'use strict';

/**
 * review controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::review.review', ({ strapi }) => ({
    async create(ctx) {
        ctx.request.body.data = {
            ...ctx.request.body.data,
            user: { id: ctx.state.user.id },
        }
        const response = await strapi.services['api::review.review'].create(ctx.request.body)
        return response;
    }
}))

