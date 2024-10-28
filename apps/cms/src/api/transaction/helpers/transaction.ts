import nodemailer from "nodemailer";

export function paymentMethodConverter(paymentMethod: string) {
  if (paymentMethod === "bank_transfer") {
    return "Transfer Bank";
  } else if (paymentMethod === "qris") {
    return "QRIS";
  } else if (paymentMethod === "credit_card") {
    return "Credit Card";
  } else if (paymentMethod === "echannel") {
    return "E-Channel";
  } else if (paymentMethod === "gopay") {
    return "GoPay";
  }
}

export async function sendEmail(to, subject, text) {
  const email = process.env.EMAIL_USER;
  const password = process.env.EMAIL_PASS;
  if (!email) throw new Error("AUTH_EMAIL is not defined");
  if (!password) throw new Error("AUTH_EMAIL_PASSWORD is not defined");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: email,
      pass: password,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject,
    html: text,
  });
}

export function toRupiah(number: number): string {
  const roundedNumber = Math.round(number / 1000) * 1000;
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(roundedNumber);
}
