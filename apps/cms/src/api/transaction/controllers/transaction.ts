/**
 * transaction controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::transaction.transaction",
  ({ strapi }) => ({
    async create(ctx) {
      const { data } = ctx.request.body;
      const { domain, invoice, endDate, amount, templateId, planId, user } =
        data;
      // todo : invoice generator ada di helper
      if (
        !domain ||
        !invoice ||
        !endDate ||
        !amount ||
        !templateId ||
        !planId ||
        !user
      ) {
        return ctx.badRequest("Please provide all required fields");
      }

      data.uuid = crypto.randomUUID();

      const plan = await strapi.entityService.findOne("api::plan.plan", planId);

      if (!plan) {
        return ctx.notFound("Plan not found");
      }

      const template = await strapi.entityService.findOne(
        "api::template.template",
        templateId,
      );

      if (!template) {
        return ctx.notFound("Template not found");
      }

      const transaction = await super.create(ctx);

      const token = await strapi
        .service("api::transaction.transaction")
        .createPayment(data.uuid, amount, {
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
        });

      return ctx.send({
        message: "Transaction created successfully",
        token, // Send Snap token back to frontend
        transaction,
      });
    },

    async handlePaymentNotification(ctx) {
      const notification = ctx.request.body;
      const response = await strapi
        .service("api::transaction.transaction")
        .handlePaymentNotification(notification);
      return ctx.send(response);
    },
  }),
);
