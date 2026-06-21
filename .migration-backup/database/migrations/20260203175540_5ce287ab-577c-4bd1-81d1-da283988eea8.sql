-- Add explicit policies to deny UPDATE and DELETE operations on contact_submissions
-- This prevents any user from modifying or deleting contact form submissions

-- Deny all UPDATE operations (no one can update submissions)
CREATE POLICY "No one can update contact submissions" 
ON public.contact_submissions 
FOR UPDATE 
USING (false);

-- Deny all DELETE operations (no one can delete submissions)
CREATE POLICY "No one can delete contact submissions" 
ON public.contact_submissions 
FOR DELETE 
USING (false);