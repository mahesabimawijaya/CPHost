/**
 * transaction service
 */

import { factories } from "@strapi/strapi";
import axios from "axios";
import { User } from "../../../../types/transaction";
import {
  paymentMethodConverter,
  sendEmail,
  toRupiah,
} from "../helpers/transaction";

export default factories.createCoreService(
  "api::transaction.transaction",
  ({ strapi }) => ({
    async createPayment(
      orderId: string,
      grossAmount: number,
      customerDetails: User,
    ) {
      const parameter = {
        transaction_details: {
          order_id: orderId,
          gross_amount: grossAmount,
        },
        customer_details: customerDetails,
      };

      try {
        const response = await axios.post(
          "https://app.sandbox.midtrans.com/snap/v1/transactions",
          parameter,
          {
            headers: {
              Authorization: `Basic ${Buffer.from(process.env.MIDTRANS_SERVER_KEY).toString("base64")}`,
            },
          },
        );

        return response.data.token; // Return the token for frontend Snap popup
      } catch (error) {
        console.error(
          "Midtrans API Error:",
          error.response ? error.response.data : error.message,
        );
        throw new Error("Midtrans payment failed");
      }
    },

    async handlePaymentNotification(notification) {
      const { order_id, transaction_status, payment_type } = notification;

      const transactions = await strapi.entityService.findMany(
        "api::transaction.transaction",
        {
          filters: { uuid: order_id },
          limit: 1, // Limit to 1 record since uuid should be unique
        },
      );

      const transaction = transactions[0]; // Get the first match (if any)

      if (!transaction) {
        throw new Error("Transaction not found");
      }

      const updatedTransaction = {
        paymentMethod: paymentMethodConverter(payment_type),
        paymentStatus:
          transaction_status === "settlement"
            ? "success"
            : transaction_status === "pending"
              ? "pending"
              : ("failed" as "pending" | "success" | "failed"),
      };

      await strapi.entityService.update(
        "api::transaction.transaction",
        transaction.id,
        {
          data: updatedTransaction,
        },
      );

      if (updatedTransaction.paymentStatus === "success") {
        const userEmail = (transaction.user as { email: string }).email;
        const subject = `CPHost Payment Invoice`;
        const message = `
  <div style="font-family: Arial, sans-serif; color: #333;">
    <div style="max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
      <h1 style="color: #7d4cdb; text-align: center; font-size: 24px; margin-bottom: 10px;">Payment Success</h1>
      <p style="text-align: center; font-size: 16px; color: #555;">Thank you for using our service,</p>
      
      <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
      
      <p><strong>INVOICE:</strong> ${transaction.invoice}</p>
      <p><strong>Payment Method:</strong> ${transaction.paymentMethod}</p>
      <p><strong>Total:</strong> ${toRupiah(transaction.amount)}</p>
      <p><strong>Domain:</strong> <a href="http://${transaction.domain}" style="color: #4a90e2; text-decoration: none;">${transaction.domain}</a></p>
      <p><strong>Purchase Date:</strong> ${new Date(transaction.createdAt).toDateString()}</p>
      <p><strong>End of Period:</strong> ${new Date(transaction.endDate).toDateString()}</p>
      
      <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
      
      <h4 style="text-align: center; font-size: 16px; color: #333;">
        You will be informed by the CPHost admin within an hour to get the IP Address, password, etc.
      </h4>
    </div>
  </div>
`;

        await sendEmail(userEmail, subject, message);
      }

      if (updatedTransaction.paymentStatus === "failed") {
        const userEmail = (transaction.user as { email: string }).email;
        const subject = `CPHost Payment Failed`;
        const message = `
  <div style="font-family: Arial, sans-serif; color: #333;">
    <div style="max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
      <h1 style="color: #d9534f; text-align: center; font-size: 24px; margin-bottom: 10px;">Payment Failed</h1>
      <p style="text-align: center; font-size: 16px; color: #555;">We’re sorry, but your payment could not be processed.</p>
      
      <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
      
      <p><strong>INVOICE:</strong> ${transaction.invoice}</p>
      <p><strong>Payment Method:</strong> ${transaction.paymentMethod}</p>
      <p><strong>Total:</strong> ${toRupiah(transaction.amount)}</p>
      <p><strong>Domain:</strong> <a href="http://${transaction.domain}" style="color: #4a90e2; text-decoration: none;">${transaction.domain}</a></p>
      <p><strong>Purchase Date:</strong> ${new Date(transaction.createdAt).toDateString()}</p>
      <p><strong>End of Period:</strong> ${new Date(transaction.endDate).toDateString()}</p>
      
      <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
      
      <h4 style="text-align: center; font-size: 16px; color: #333;">
        Please try again or contact our support team if you continue to experience issues.
      </h4>
    </div>
  </div>
`;

        await sendEmail(userEmail, subject, message);
      }

      return { message: "Transaction status updated" };
    },
  }),
);
