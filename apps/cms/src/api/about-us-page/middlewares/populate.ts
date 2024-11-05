/**
 * `populate` middleware
 */

import { Strapi } from "@strapi/strapi";

const populate = {
  populate: {
    subHeroSection: {
      populate: "*",
    },
    aboutUsSection: {
      populate: "*",
    },
    bestHostingSection: {
      populate: "*",
    },
    reviewSection: {
      populate: "*",
    },
    teamSection: {
      populate: {
        teamCard: {
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
