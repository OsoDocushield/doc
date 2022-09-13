'use strict';
var request = require('request');
module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) { },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {

    console.log(request)
    strapi.db.lifecycles.subscribe({
      models: ['plugin::users-permissions.user'],

      async afterCreate(event) {
        let url = process.env.HOST === '0.0.0.0' ? `http://localhost:${process.env.PORT}` : `http://${process.env.HOST}:${process.env.PORT}`
        url = url + '/strapi-newsletter/newsletter/subscribe'
        request({
          url: url,
          method: "POST",
          json: true,
          body: { email: event?.result?.email }
        }, function (error, response, body) {
          if (!error && response.statusCode == 200) {
            console.log(body);
          } else {
            console.log(error);
          }
        });
      },
    });
  },
};
