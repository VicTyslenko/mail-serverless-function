import nodemailer from "nodemailer";

const ALLOWED_ORIGINS = ["http://localhost:3001", "https://vt-portfolio.info"];

export default async function handler(req, res) {
  // const { email, name, message } = req.body;

  // const origin = req.headers.origin || "";
  // const isAllowed = ALLOWED_ORIGINS.includes(origin);

  // const isAllowed = ALLOWED_ORIGINS.includes(origin);

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();

 

  return res.status(200).json({ success: true, message: "Email sent" });
}
