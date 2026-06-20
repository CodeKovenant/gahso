import { Router, Request, Response } from "express";
import rateLimit from "express-rate-limit";
import { pool } from "../db";
import { validateContactForm } from "../validation";

export const contactRouter = Router();

// ---------------------------------------------------------------------------
// Rate limiting: max 1 submission per IP per 5 minutes
// ---------------------------------------------------------------------------
const contactRateLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 1,
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req: Request) => {
    // Respect X-Forwarded-For when running behind a Railway proxy
    const forwarded = req.headers["x-forwarded-for"];
    const ip =
      (Array.isArray(forwarded) ? forwarded[0] : forwarded?.split(",")[0])?.trim() ??
      req.socket.remoteAddress ??
      "unknown";
    return ip;
  },
  handler: (_req: Request, res: Response) => {
    const retryAfter = 5 * 60; // seconds
    res.status(429).json({
      error: "Too many submissions. Please try again later.",
      retryAfter,
    });
  },
});

// ---------------------------------------------------------------------------
// POST /api/contact
// ---------------------------------------------------------------------------
contactRouter.post(
  "/",
  contactRateLimiter,
  async (req: Request, res: Response): Promise<void> => {
    // Resolve client IP (used for logging and storage)
    const forwarded = req.headers["x-forwarded-for"];
    const ipAddress =
      (Array.isArray(forwarded) ? forwarded[0] : forwarded?.split(",")[0])?.trim() ??
      req.socket.remoteAddress ??
      "unknown";

    console.log(`[contact] Submission attempt from IP: ${ipAddress}`);

    // Validate
    const validation = validateContactForm(req.body as Record<string, unknown>);
    if (!validation.valid) {
      console.log("[contact] Validation failed:", validation.errors);
      res.status(400).json({
        error: "Validation failed",
        details: validation.errors,
      });
      return;
    }

    const body = req.body as Record<string, string | null | undefined>;

    try {
      await pool.query(
        `INSERT INTO contact_submissions
           (first_name, last_name, email, phone, subject, message, source, ip_address)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
        [
          body.first_name!.trim(),
          body.last_name!.trim(),
          body.email!.trim(),
          body.phone?.trim() || null,
          body.subject!.trim(),
          body.message!.trim(),
          body.source?.trim() || "contact_page",
          ipAddress,
        ]
      );

      console.log(`[contact] Submission saved successfully from IP: ${ipAddress}`);

      res.status(200).json({
        success: true,
        message: "Contact form submitted successfully",
      });
    } catch (err) {
      console.error("[contact] Database insert error:", err);
      res.status(500).json({ error: "Failed to submit contact form" });
    }
  }
);
