import { Pool } from "pg";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is required");
}

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : false,
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 5000,
});

pool.on("error", (err) => {
  console.error("Unexpected PostgreSQL pool error:", err);
});

/**
 * Initialise the database: create the contact_submissions table and its
 * indexes if they do not already exist.
 */
export async function initDb(): Promise<void> {
  const client = await pool.connect();
  try {
    await client.query(`
      CREATE TABLE IF NOT EXISTS contact_submissions (
        id          UUID                     NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
        first_name  TEXT                     NOT NULL,
        last_name   TEXT                     NOT NULL,
        email       TEXT                     NOT NULL,
        phone       TEXT,
        subject     TEXT                     NOT NULL,
        message     TEXT                     NOT NULL,
        source      TEXT                     DEFAULT 'contact_page',
        ip_address  TEXT,
        created_at  TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
      );
    `);

    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_contact_submissions_email
        ON contact_submissions (email);
    `);

    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at
        ON contact_submissions (created_at DESC);
    `);

    console.log("Database initialised successfully");
  } finally {
    client.release();
  }
}
