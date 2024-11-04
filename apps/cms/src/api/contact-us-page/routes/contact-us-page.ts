/**
 * hosting-page router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter(
  "api::contact-us-page.contact-us-page",
  {
    config: {
      find: {
        middlewares: ["api::contact-us-page.populate"],
      },
    },
  },
);