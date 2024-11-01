/**
 * hosting-page router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::domain-page.domain-page", {
  config: {
    find: {
      middlewares: ["api::domain-page.populate"],
    },
  },
});
