"use strict";

/**
 *  Case Study controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::case-study.case-study",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { slug } = ctx.params;
      const query = {
        filters: { slug },
        // sort: 'fieldA:asc',
        populate:[
          'cover',
          'thumbnail',
          'title',
          'slug',
          'compare',
          'theme.color',
          'categories',
          'stack',
          'results',
          'results.list',
          'features.list',
          'projects.banner',
          'projects.gallery',
          'projects.featurelist',
          'seo'
        ],
        ...ctx.query
      };

      const casestudy = await strapi.entityService.findMany(
        "api::case-study.case-study",
        query
      );

      const sanitizedEntity = await this.sanitizeOutput(casestudy);
      return this.transformResponse(sanitizedEntity[0]);
    },
  })
);
