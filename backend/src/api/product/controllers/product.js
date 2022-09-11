'use strict';

/**
 * product controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::product.product', ({ strapi }) => ({
    async findOne(ctx) {
        // some logic here
        const response = await super.findOne(ctx);
        if (response?.data?.id) {
            const reviews = await strapi.entityService.findMany('api::review.review', {
                filters: { product: response.data?.id },
                sort: { createdAt: 'DESC' },
                populate: { user: true }
            });
            response.data.attributes.reviews = reviews.map(each => ({ ...each, user: each.user.username }))
        }
        return response;
    }
}))
