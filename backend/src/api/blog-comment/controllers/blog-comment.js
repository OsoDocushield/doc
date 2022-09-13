'use strict';

/**
 * blog-comment controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::blog-comment.blog-comment', ({ strapi }) => ({
    async create(ctx) {
        ctx.request.body.data = {
            ...ctx.request.body.data,
            username: ctx.state.user.username
        }
        const response = await strapi.services['api::blog-comment.blog-comment'].create(ctx.request.body)
        return response;
    }
}))