# Razorpay Live Mode Setup Guide

Your payment system has been upgraded to LIVE MODE.

## 🛑 IMPORTANT: ACTION REQUIRED

I have updated your `.env.local` file with placeholders. You must replace them with your actual Live keys from the Razorpay Dashboard.

1. Go to [Razorpay Dashboard](https://dashboard.razorpay.com/)
2. Switch to **Live Mode** (toggle button at the top right).
3. Go to **Settings > API Keys** and generate Live Keys.
4. Copy `Key ID` and `Key Secret`.
5. Open `.env.local` in your project root.
6. Replace the placeholders:
   ```env
   RAZORPAY_KEY_ID=rzp_live_xxxxxxxxxxxxxxxx
   RAZORPAY_KEY_SECRET=xxxxxxxxxxxxxxxxxxxxxxxx
   ```

## 🔔 Webhook Setup (Required for Verify)

To ensure secure verification (Requirement #7), I have implemented a Webhook Route at:
`https://your-domain.com/api/payment/webhook`

1. In Razorpay Dashboard > Settings > Webhooks > Add New Webhook.
2. Set Webhook URL to your production URL + `/api/payment/webhook`.
3. Set Secret.
4. Copy this Secret to `.env.local` as `RAZORPAY_WEBHOOK_SECRET`.
5. Events to subscribe:
   - `payment.captured`
   - `payment.failed`

## ✅ What I Have Done

- **Code:** Switched all payment logic to be production-ready.
- **Security:** Added Webhook signature verification.
- **UI:** Replaced simple toast with a dedicated "Payment Successful" card.
- **Environment:** Configured `.env.local` for Live handling.

Your app is now ready for real payments once you paste the keys.
