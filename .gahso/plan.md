
# Daraja 3.0 M-Pesa STK Push Integration Plan

## Overview
This plan will replace the current iframe-based M-Pesa payment with a native Safaricom Daraja API integration. This gives you more control over the payment flow, better branding, and allows donors to stay completely within your website.

## What You'll Need First

Before I can implement this, you'll need to obtain credentials from Safaricom:

1. **Go to the Daraja Portal**: https://developer.safaricom.co.ke
2. **Create an account** (if you don't have one)
3. **Create an App** for your organization
4. **Get these credentials**:
   - **Consumer Key** - for API authentication
   - **Consumer Secret** - for API authentication
   - **Passkey** - provided by Safaricom for STK Push
   - **Business Shortcode** (Paybill or Till number)

You can start with **Sandbox credentials** for testing, then switch to **Production credentials** when ready.

## How It Will Work

```text
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│  Donor enters   │────▶│  Edge Function   │────▶│  Safaricom API  │
│  phone + amount │     │  (STK Push)      │     │  (Daraja 3.0)   │
└─────────────────┘     └──────────────────┘     └─────────────────┘
                                                          │
         ┌────────────────────────────────────────────────┘
         ▼
┌─────────────────┐     ┌──────────────────┐
│  Donor gets     │     │  Callback to     │
│  M-Pesa prompt  │────▶│  Edge Function   │
│  on phone       │     │  (saves result)  │
└─────────────────┘     └──────────────────┘
```

1. Donor enters phone number and amount on your website
2. Your site calls your edge function to initiate STK Push
3. Edge function authenticates with Safaricom and sends the request
4. Donor receives M-Pesa PIN prompt on their phone
5. Safaricom sends payment result to your callback
6. Your site shows success/failure message

## What I'll Build

### 1. Database Table for Donations
A `donations` table to track all M-Pesa transactions:
- Phone number, amount, status
- M-Pesa transaction codes
- Timestamps for tracking

### 2. Edge Function: `mpesa-stk-push`
Handles initiating the payment:
- Generates OAuth access token from Daraja API
- Creates the STK Push request
- Returns checkout request ID to track the payment

### 3. Edge Function: `mpesa-callback`
Receives payment confirmation from Safaricom:
- Validates the callback
- Updates donation status in database
- Stores M-Pesa receipt number

### 4. Edge Function: `mpesa-status`
Allows checking payment status:
- Queries the database for transaction status
- Returns current state to the frontend

### 5. Updated Donate Page
A clean, integrated payment form:
- Phone number input (formatted for Kenya)
- Amount selection (using your existing tiers)
- Real-time status updates
- Success/failure feedback

## Technical Details

### Secrets Required
These will be stored securely in Supabase:
- `MPESA_CONSUMER_KEY`
- `MPESA_CONSUMER_SECRET`
- `MPESA_PASSKEY`
- `MPESA_SHORTCODE`
- `MPESA_ENVIRONMENT` (sandbox or production)

### API Endpoints Used
- **OAuth Token**: `https://api.safaricom.co.ke/oauth/v1/generate`
- **STK Push**: `https://api.safaricom.co.ke/mpesa/stkpush/v1/processrequest`
- **Query Status**: `https://api.safaricom.co.ke/mpesa/stkpushquery/v1/query`

### Security Considerations
- All API credentials stored as secrets (never in frontend code)
- Phone number validation before sending
- Callback signature verification
- Rate limiting on STK push requests

## Next Steps After Approval

1. I'll ask you to add the Safaricom API credentials as secrets
2. Create the database table for donations
3. Build the edge functions
4. Update the Donate page with the integrated form
5. Test the complete flow

Would you like me to proceed with this integration?
