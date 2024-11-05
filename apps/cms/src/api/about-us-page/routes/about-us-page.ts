/**
 * about-us-page router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::about-us-page.about-us-page", {
  config: {
    find: {
      middlewares: ["api::about-us-page.populate"],
    },
  },
});
