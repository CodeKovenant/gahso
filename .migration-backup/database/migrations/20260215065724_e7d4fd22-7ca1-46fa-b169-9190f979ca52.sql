
-- Create donations table to track IntaSend payments
CREATE TABLE public.donations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  checkout_id TEXT,
  invoice_id TEXT,
  amount DECIMAL(10,2) NOT NULL,
  currency TEXT NOT NULL DEFAULT 'USD',
  status TEXT NOT NULL DEFAULT 'PENDING',
  payment_method TEXT,
  mpesa_reference TEXT,
  api_ref TEXT,
  donor_email TEXT,
  donor_first_name TEXT,
  donor_last_name TEXT,
  failed_reason TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.donations ENABLE ROW LEVEL SECURITY;

-- Public insert (edge functions insert via service role, but allow anon insert too)
CREATE POLICY "Allow insert donations" ON public.donations FOR INSERT WITH CHECK (true);

-- Block direct reads from anon (edge functions use service role)
CREATE POLICY "Block public reads" ON public.donations FOR SELECT USING (false);

-- Block public updates  
CREATE POLICY "Block public updates" ON public.donations FOR UPDATE USING (false);

-- Block public deletes
CREATE POLICY "Block public deletes" ON public.donations FOR DELETE USING (false);

-- Auto-update updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_donations_updated_at
BEFORE UPDATE ON public.donations
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();
