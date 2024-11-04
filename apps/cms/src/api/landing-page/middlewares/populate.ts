/**
 * `populate` middleware
 */

import { Strapi } from "@strapi/strapi";
import template from "../../template/controllers/template";

const populate = {
  populate: {
    heroSection: {
      populate: "*",
    },
    featureSection: {
      populate: {
        features: {
          populate: "image",
        },
      },
    },
    aboutUsSection: {
      populate: "*",
    },
    pricingSection: {
      populate: "*",
    },
    templateSection: {
      populate: {
        templates: {
          populate: "icon",
        },
      },
    },
  },
};

export default (config, { strapi }: { strapi: Strapi }) => {
  return async (ctx, next) => {
    strapi.log.info("In populate middleware.");
    ctx.query = {
      ...ctx.query,
      ...populate,
    };
    await next();
  };
};
