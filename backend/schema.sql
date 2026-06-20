-- Contact submissions table for the GAHSO contact form
-- Run this against your Railway PostgreSQL database once on first deploy.
-- The backend API also runs CREATE TABLE IF NOT EXISTS on startup, so this
-- file is provided for reference / manual bootstrapping.

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

-- Index on email for fast look-ups by sender
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email
  ON contact_submissions (email);

-- Index on created_at for chronological queries / dashboards
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at
  ON contact_submissions (created_at DESC);
