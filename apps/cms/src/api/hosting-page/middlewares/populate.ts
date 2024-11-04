/**
 * `populate` middleware
 */

import { Strapi } from "@strapi/strapi";

const populate = {
  populate: {
    clientFeedbackSection: {
      populate: {
        feedbackCard: {
          populate: "*",
        },
      },
    },
    recommendationSection: {
      populate: {
        companyLogo: true,
        companyIcon: {
          populate: "*",
        },
      },
    },
    whyChooseUsSection: {
      populate: {
        whyChooseUsCard: {
          populate: "*",
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
