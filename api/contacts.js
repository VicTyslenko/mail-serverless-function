import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  const body = req.body || {};
  const { email, name, message } = body;

  const origin = req.headers.origin || "";

  res.setHeader("Access-Control-Allow-Origin", origin);
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASSWORD,
      },
    });

    const mailOptions = {
      //Gmail service will check the 'from' value is equal to auth.user in transporter to
      from: `Victor ${process.env.USER_EMAIL}`,
      to: process.env.RECEIVER_EMAIL,
      replyTo: email,
      subject: "New contact message",
      text: `
              You have received a new message from the contact form:
              Name: ${name}
              Email: ${email}
              Message: ${message}
            `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true, message: "Email sent" });
  } catch (error) {
    return res.status(404).json({ errorMessage: error });
  }
}
