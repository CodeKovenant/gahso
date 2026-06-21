import { Router } from "express";
import { z } from "zod";

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

router.post("/submit-contact", async (req, res) => {
  const result = contactSchema.safeParse(req.body);
  if (!result.success) {
    res.status(400).json({ error: "Invalid form data", details: result.error.flatten() });
    return;
  }

  const { first_name, last_name, email, phone, subject, message, source } = result.data;

  req.log.info({ email, subject, source }, "Contact form submission received");

  res.json({
    success: true,
    message: "Thank you for your message. We will get back to you soon.",
  });
});

export default router;
