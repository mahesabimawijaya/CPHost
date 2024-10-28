module.exports = {
  routes: [
    {
      method: "POST",
      path: "/transaction/notification",
      handler: "transaction.handlePaymentNotification",
      config: {
        auth: false,
      },
    },
  ],
};
