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
  },
};

export default (config, { strapi }: { strapi: Strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info("In populate middleware.");
    ctx.query = {
      ...ctx.query,
      ...populate,
    };
    await next();
  };
};
