/**
 * `populate` middleware
 */

import { Strapi } from "@strapi/strapi";

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
          populate: "*",
        },
      },
    },
    bestHostingSection: {
      populate: "*",
    },
    contactUsSection: {
      populate: "*",
    },
    reviewSection: {
      populate: "*",
    },
    faqSection: {
      populate: "*",
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
