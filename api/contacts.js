import nodemailer from "nodemailer";

const ALLOWED_ORIGINS = ["http://localhost:3001", "https://vt-portfolio.info"];

export default async function handler(req, res) {
  const { email, name, message } = req.body;

  const origin = req.headers.origin || "";
  const isAllowed = ALLOWED_ORIGINS.includes(origin);

  res.setHeader("Access-Control-Allow-Origin", origin);
  res.setHeader("Vary", "Origin");

  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");

  // Preflight
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // if (req.method !== "POST") {
  //   return res.status(405).json({ success: false, message: "Method not allowed" });
  // }
  
  return res.status(200).json({ success: true, message: "Email sent", origin });
  // try {
  //   const transporter = nodemailer.createTransport({
  //     host: "smtp.gmail.com",
  //     port: 587,
  //     secure: false,
  //     auth: {
  //       user: process.env.USER_EMAIL,
  //       pass: process.env.USER_PASSWORD,
  //     },
  //   });

  //   const mailOptions = {
  //     //Gmail service will check the 'from' value is equal to auth.user in transporter to
  //     from: `Victor ${process.env.USER_EMAIL}`,
  //     to: process.env.RECEIVER_EMAIL,
  //     replyTo: email,
  //     subject: "New contact message",
  //     text: `
  //           You have received a new message from the contact form:
  //           Name: ${name}
  //           Email: ${email}
  //           Message: ${message}
  //         `,
  //   };

  //   await transporter.sendMail(mailOptions);

  //   return res.status(200).json({ success: true, message: "Email sent", origin });
  // } catch (error) {
  //   console.error("Error sending email:", error);
  //   return res.status(500).json({ success: false, message: "Error sending email" });
  // }
}
