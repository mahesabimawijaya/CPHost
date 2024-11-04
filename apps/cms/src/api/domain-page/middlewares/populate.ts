/**
 * `populate` middleware
 */

import { Strapi } from "@strapi/strapi";

const populate = {
  populate: {
    popularDomainSection: {
      populate: {
        popularDomainCard: {
          populate: "*",
        },
      },
    },
    domainPriceListSection: {
      populate: {
        tableHead: "*",
        tableContent: {
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
