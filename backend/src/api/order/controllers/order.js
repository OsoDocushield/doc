'use strict';

/**
 * order controller
 */
const { createCoreController, entityService } = require('@strapi/strapi').factories;
const fetch = require('node-fetch');

async function confirmTransaction(orderId) {
    try {
        let headersList = {
            "Accept": "*/*",
            "Authorization": "Basic " + Buffer.from(process.env.PAYPAL_CLIENT_ID + ":" + process.env.PAYPAL_CLIENT_SECRET).toString('base64'),
            "Content-Type": "application/x-www-form-urlencoded"
        }
        let bodyContent = "grant_type=client_credentials";
        let response = await fetch(process.env.PAYPAL_API_URL, {
            method: "POST",
            body: bodyContent,
            headers: headersList
        });
        let { access_token } = await response.json();
        let orderResponse = await fetch(process.env.PAYPAL_ORDER_URL + "/checkout/orders/" + orderId, {
            method: "GET",
            headers: { ...headersList, Authorization: "Bearer " + access_token }
        });
        let { status } = await orderResponse.json();
        return status === 'COMPLETED'
    } catch (error) {
        console.log('error in transaction verification' + error)
        return false
    }
}


module.exports = createCoreController('api::order.order', ({ strapi }) => ({
    async create(ctx) {
        ctx.request.body.data = {
            ...ctx.request.body.data,
            paid: false,
            shipped: false,
            transactionID: null,
            user: { id: ctx.state.user.id }
        }
        const response = await strapi.services['api::order.order'].create(ctx.request.body)
        delete response?.paid
        delete response?.shipped
        delete response?.transactionID
        return response;
    },

    async update(ctx) {
        let { transactionID } = ctx.request.body
        let isVerfied = await confirmTransaction(transactionID)
        if (isVerfied) {
            ctx.request.body.data = { paid: true, transactionID }
            const result = await super.update(ctx);
            return {
                status: 'ORDER_COMPLETED'
            }
        } else {
            return {
                status: 'ORDER_NOT_COMPLETED'
            }
        }
    },

    async findOne(ctx) {
        const order = await strapi.entityService.findMany('api::order.order', {
            filters: { id: ctx.request.params.id, user: ctx.state.user.id },
            sort: { createdAt: 'DESC' },
            populate: { category: true },
        });
        if (order[0] && order[0].shipped) {
            const reviews = await strapi.entityService.findMany('api::review.review', {
                filters: { order: order[0].id },
                sort: { createdAt: 'DESC' },
                populate: { product: true },
            });
            reviews.map(eachReview => {
                order[0].products.map(eachProduct => {
                    if (eachProduct.id === eachReview.product.id) {
                        eachProduct.review = { ...eachReview }
                        delete eachProduct.review.product
                    }
                })
            })
        }
        return order;
    },

    async find(ctx) {
        const entries = await strapi.entityService.findMany('api::order.order', {
            filters: { user: ctx.state.user.id },
            fields: ['paid', 'shipped', 'amount'],
            sort: { createdAt: 'DESC' }
        });

        return entries;
    }

}));
