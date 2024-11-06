/**
 * landing-page router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter(
  "api::news-grid-page.news-grid-page",
  {
    config: {
      find: {
        middlewares: ["api::news-grid-page.populate"],
      },
    },
  },
);
