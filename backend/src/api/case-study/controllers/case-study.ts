"use strict";

/**
 *  post controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::case-study.case-study",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { slug } = ctx.params;

      const query = {
        filters: { slug },
        ...ctx.query,
      };

      const post = await strapi.entityService.findMany(
        "api::case-study.case-study",
        query
      );

      const sanitizedEntity = await this.sanitizeOutput(post);

      return this.transformResponse(sanitizedEntity[0]);
    },
  })
);
