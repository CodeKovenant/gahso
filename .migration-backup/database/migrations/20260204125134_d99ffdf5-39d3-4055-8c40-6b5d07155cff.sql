-- Enable FORCE ROW LEVEL SECURITY to ensure even table owners comply with RLS
-- This prevents any bypass through ownership privileges
ALTER TABLE public.contact_submissions FORCE ROW LEVEL SECURITY;

-- Drop and recreate policies to ensure they are RESTRICTIVE (not PERMISSIVE)
-- First, drop existing policies
DROP POLICY IF EXISTS "Anyone can submit contact form" ON public.contact_submissions;
DROP POLICY IF EXISTS "No one can delete contact submissions" ON public.contact_submissions;
DROP POLICY IF EXISTS "No one can read contact submissions" ON public.contact_submissions;
DROP POLICY IF EXISTS "No one can update contact submissions" ON public.contact_submissions;

-- Recreate INSERT policy as PERMISSIVE (needed for public form submissions)
CREATE POLICY "Anyone can submit contact form"
ON public.contact_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Create RESTRICTIVE policies to explicitly deny other operations
CREATE POLICY "Block all reads"
ON public.contact_submissions
FOR SELECT
TO anon, authenticated
USING (false);

CREATE POLICY "Block all updates"
ON public.contact_submissions
FOR UPDATE
TO anon, authenticated
USING (false);

CREATE POLICY "Block all deletes"
ON public.contact_submissions
FOR DELETE
TO anon, authenticated
USING (false);