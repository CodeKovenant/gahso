import { Router } from "express";
import { z } from "zod";
import { db, contactSubmissionsTable } from "@workspace/db";

const router = Router();

const contactSchema = z.object({
  first_name: z.string().trim().min(1).max(100),
  last_name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(50).optional().nullable(),
  subject: z.string().trim().min(1).max(200),
  message: z.string().trim().min(1).max(5000),
  source: z.string().optional().default("contact_page"),
});

const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

const ipTimestamps = new Map<string, number[]>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;
  const timestamps = (ipTimestamps.get(ip) ?? []).filter((t) => t > windowStart);
  if (timestamps.length >= RATE_LIMIT_MAX) {
    return false;
  }
  timestamps.push(now);
  ipTimestamps.set(ip, timestamps);
  return true;
}

router.post("/submit-contact", async (req, res) => {
  const ip =
    (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() ??
    req.socket.remoteAddress ??
    "unknown";

  if (!checkRateLimit(ip)) {
    res.status(429).json({
      error: "Too many requests",
      message: "You have exceeded the submission limit. Please try again later.",
    });
    return;
  }

  const result = contactSchema.safeParse(req.body);
  if (!result.success) {
    res.status(400).json({ error: "Invalid form data", details: result.error.flatten() });
    return;
  }

  const { first_name, last_name, email, phone, subject, message, source } = result.data;

  try {
    await db.insert(contactSubmissionsTable).values({
      firstName: first_name,
      lastName: last_name,
      email,
      phone: phone ?? null,
      subject,
      message,
      source,
      ipAddress: ip,
    });

    req.log.info({ email, subject, source }, "Contact form submission saved");

    res.json({
      success: true,
      message: "Thank you for your message. We will get back to you soon.",
    });
  } catch (err) {
    req.log.error({ err }, "Failed to save contact submission");
    res.status(500).json({
      error: "Internal server error",
      message: "Failed to save your message. Please try again later.",
    });
  }
});

export default router;
