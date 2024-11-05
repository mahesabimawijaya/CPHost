/**
 * team-page router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::team-page.team-page", {
  config: {
    find: {
      middlewares: ["api::team-page.populate"],
    },
  },
});
