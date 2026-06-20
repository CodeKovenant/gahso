import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const INTASEND_PUBLISHABLE_KEY = Deno.env.get('INTASEND_PUBLISHABLE_KEY');
    if (!INTASEND_PUBLISHABLE_KEY) {
      throw new Error('INTASEND_PUBLISHABLE_KEY is not configured');
    }

    const { amount, currency, email, first_name, last_name, redirect_url } = await req.json();

    if (!amount || amount <= 0) {
      return new Response(JSON.stringify({ error: 'Invalid amount' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const response = await fetch('https://payment.intasend.com/api/v1/checkout/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-IntaSend-Public-API-Key': INTASEND_PUBLISHABLE_KEY,
      },
      body: JSON.stringify({
        public_key: INTASEND_PUBLISHABLE_KEY,
        amount: parseFloat(amount).toFixed(2),
        currency: currency || 'USD',
        email: email || '',
        first_name: first_name || '',
        last_name: last_name || '',
        redirect_url: redirect_url || '',
        api_ref: `donation-${Date.now()}`,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('IntaSend API error:', JSON.stringify(data));
      throw new Error(`IntaSend API error [${response.status}]: ${JSON.stringify(data)}`);
    }

    return new Response(JSON.stringify({ url: data.url, id: data.id }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error: unknown) {
    console.error('IntaSend checkout error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
