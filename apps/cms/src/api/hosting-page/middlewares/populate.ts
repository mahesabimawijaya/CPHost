/**
 * `populate` middleware
 */

import { Strapi } from "@strapi/strapi";

const populate = {
  populate: {
    clientFeedbackSecton: {
      populate: "*",
    },
    recommendationSection: {
      populate: "*",
    },
    whyChooseUsSection: {
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