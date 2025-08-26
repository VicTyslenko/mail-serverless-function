const ALLOWED_ORIGINS = ["http://localhost:3001", "https://vt-portfolio.info"];

export default async function handler(req, res) {
  const origin = req.headers.origin || "";
  const isAllowed = ALLOWED_ORIGINS.includes(origin);

  if (isAllowed) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");

  // Preflight
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Actual request
  const body = req.body;
  return res.status(200).json({
    message: "Hello from server",
    body,
  });
}
