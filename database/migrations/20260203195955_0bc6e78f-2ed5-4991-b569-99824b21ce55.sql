-- Add restrictive SELECT policy to block public read access to contact submissions
-- This ensures no one can read contact form data through the Supabase API
CREATE POLICY "No one can read contact submissions" 
ON public.contact_submissions 
FOR SELECT 
USING (false);