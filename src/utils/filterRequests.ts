export function shouldFilterRequest(req: Request): boolean {
  const ip =
    req.headers.get("x-forwarded-for") ||
    req.headers.get("x-real-ip") ||
    "unknown";
  const userAgent = req.headers.get("user-agent") || "";
  const referer = req.headers.get("referer") || "";

  // Filter localhost visits
  if (ip === "::1" || ip === "127.0.0.1") {
    return true;
  }

  // Filter specific IP addresses (example)
  const filteredIPs = process.env.FILTERED_IPS
    ? process.env.FILTERED_IPS.split(",")
    : [];
  if (filteredIPs.includes(ip)) {
    return true;
  }

  // Filter based on user agent (e.g., exclude bots)
  if (userAgent.toLowerCase().includes("bot")) {
    return true;
  }

  // Filter based on referer (e.g., exclude visits from your development domain)
  if (referer.includes("localhost") || referer.includes("127.0.0.1")) {
    return true;
  }

  return false;
}
