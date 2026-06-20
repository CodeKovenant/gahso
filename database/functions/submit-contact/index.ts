import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// In-memory rate limiting store (resets on function cold start)
// For production, consider using Redis or database-based rate limiting
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Rate limit configuration
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS_PER_WINDOW = 5; // 5 submissions per hour per IP

function getRateLimitKey(ip: string): string {
  return `contact_${ip}`;
}

function checkRateLimit(ip: string): { allowed: boolean; remaining: number; resetIn: number } {
  const key = getRateLimitKey(ip);
  const now = Date.now();
  const record = rateLimitStore.get(key);

  // Clean up expired entries
  if (record && now > record.resetTime) {
    rateLimitStore.delete(key);
  }

  const currentRecord = rateLimitStore.get(key);

  if (!currentRecord) {
    // First request - allow and start tracking
    rateLimitStore.set(key, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW_MS,
    });
    return {
      allowed: true,
      remaining: MAX_REQUESTS_PER_WINDOW - 1,
      resetIn: RATE_LIMIT_WINDOW_MS,
    };
  }

  if (currentRecord.count >= MAX_REQUESTS_PER_WINDOW) {
    // Rate limit exceeded
    return {
      allowed: false,
      remaining: 0,
      resetIn: currentRecord.resetTime - now,
    };
  }

  // Increment count
  currentRecord.count++;
  rateLimitStore.set(key, currentRecord);

  return {
    allowed: true,
    remaining: MAX_REQUESTS_PER_WINDOW - currentRecord.count,
    resetIn: currentRecord.resetTime - now,
  };
}

// Input validation
function validateInput(data: Record<string, unknown>): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  // Required fields
  if (!data.first_name || typeof data.first_name !== "string" || data.first_name.trim().length === 0) {
    errors.push("First name is required");
  } else if (data.first_name.length > 100) {
    errors.push("First name must be less than 100 characters");
  }

  if (!data.last_name || typeof data.last_name !== "string" || data.last_name.trim().length === 0) {
    errors.push("Last name is required");
  } else if (data.last_name.length > 100) {
    errors.push("Last name must be less than 100 characters");
  }

  if (!data.email || typeof data.email !== "string" || data.email.trim().length === 0) {
    errors.push("Email is required");
  } else if (data.email.length > 255) {
    errors.push("Email must be less than 255 characters");
  } else {
    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      errors.push("Please enter a valid email address");
    }
  }

  if (!data.subject || typeof data.subject !== "string" || data.subject.trim().length === 0) {
    errors.push("Subject is required");
  } else if (data.subject.length > 200) {
    errors.push("Subject must be less than 200 characters");
  }

  if (!data.message || typeof data.message !== "string" || data.message.trim().length === 0) {
    errors.push("Message is required");
  } else if (data.message.length > 5000) {
    errors.push("Message must be less than 5000 characters");
  }

  // Optional phone validation
  if (data.phone && typeof data.phone === "string" && data.phone.length > 50) {
    errors.push("Phone must be less than 50 characters");
  }

  // Source validation
  if (data.source && typeof data.source === "string" && data.source.length > 100) {
    errors.push("Source must be less than 100 characters");
  }

  return { valid: errors.length === 0, errors };
}

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  // Only allow POST
  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      { status: 405, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  try {
    // Get client IP for rate limiting
    const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    console.log(`Contact form submission from IP: ${clientIp}`);

    // Check rate limit
    const rateLimit = checkRateLimit(clientIp);
    
    if (!rateLimit.allowed) {
      console.log(`Rate limit exceeded for IP: ${clientIp}`);
      return new Response(
        JSON.stringify({
          error: "Too many submissions. Please try again later.",
          retryAfter: Math.ceil(rateLimit.resetIn / 1000),
        }),
        {
          status: 429,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
            "Retry-After": String(Math.ceil(rateLimit.resetIn / 1000)),
            "X-RateLimit-Remaining": String(rateLimit.remaining),
          },
        }
      );
    }

    // Parse request body
    const body = await req.json();

    // Validate input
    const validation = validateInput(body);
    if (!validation.valid) {
      console.log("Validation failed:", validation.errors);
      return new Response(
        JSON.stringify({ error: "Validation failed", details: validation.errors }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Create Supabase client with service role for server-side operations
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Insert contact submission
    const { error: insertError } = await supabase
      .from("contact_submissions")
      .insert({
        first_name: body.first_name.trim(),
        last_name: body.last_name.trim(),
        email: body.email.trim(),
        phone: body.phone?.trim() || null,
        subject: body.subject.trim(),
        message: body.message.trim(),
        source: body.source?.trim() || "contact_page",
      });

    if (insertError) {
      console.error("Database insert error:", insertError);
      return new Response(
        JSON.stringify({ error: "Failed to submit contact form" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log(`Contact form submitted successfully from IP: ${clientIp}, remaining: ${rateLimit.remaining}`);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Contact form submitted successfully",
        remaining: rateLimit.remaining,
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
          "X-RateLimit-Remaining": String(rateLimit.remaining),
        },
      }
    );
  } catch (error) {
    console.error("Unexpected error:", error);
    return new Response(
      JSON.stringify({ error: "An unexpected error occurred" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
