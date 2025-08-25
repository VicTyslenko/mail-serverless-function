const cors = require("cors");

const ALLOWED_ORIGINS = ["http://localhost:3001", "https://vt-portfolio.info"];

export default async function (req, res) {
  const origin = req.headers.origin || "";
  const isAllowed = ALLOWED_ORIGINS.includes(origin);

  if (isAllowed) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  const body = req.body;

  return res.status(200).json({ message: "Hello from server", body });
}
