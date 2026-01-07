# Contact System Implementation - Complete Guide

## 🎯 Overview

A production-ready Contact System integrated into the Portfolio Projects page with:

- ✅ Full contact form with validation
- ✅ Optional Razorpay payment integration (₹100 fixed)
- ✅ Nodemailer email notifications
- ✅ MongoDB database storage
- ✅ Full-width responsive design

## 📁 File Structure

```
MainPort2026/
├── app/
│   ├── api/
│   │   ├── contact/
│   │   │   ├── route.ts (legacy - kept for compatibility)
│   │   │   └── submit/
│   │   │       └── route.ts (NEW - main contact submission)
│   │   └── payment/
│   │       ├── create-order/
│   │       │   └── route.ts (NEW - Razorpay order creation)
│   │       └── verify/
│   │           └── route.ts (NEW - payment verification)
│   └── projects/
│       └── page.tsx (MODIFIED - added Contact section)
├── components/
│   └── contact-form.tsx (NEW)
├── lib/
│   ├── db/
│   │   └── mongodb.ts (NEW)
│   ├── models/
│   │   └── Contact.ts (NEW)
│   ├── services/
│   │   └── emailService.ts (NEW)
│   ├── hooks/
│   │   └── useRazorpay.ts (NEW)
│   └── utils/
│       └── validation.ts (NEW)
├── types/
│   └── contact.ts (NEW)
└── ENV_SETUP.md (NEW - environment setup guide)
```

## 🚀 Setup Instructions

### 1. Install Dependencies (Already Done)

```bash
npm install mongoose razorpay nodemailer crypto-js
npm install --save-dev @types/nodemailer
```

### 2. Configure Environment Variables

Create `.env.local` in the root directory:

```env
# MongoDB Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority

# Razorpay Payment Gateway
RAZORPAY_KEY_ID=rzp_test_your_key_id
RAZORPAY_KEY_SECRET=your_secret_key

# Email Service (Gmail)
EMAIL_USER=your.email@gmail.com
EMAIL_PASSWORD=your_gmail_app_password
ADMIN_EMAIL=admin@example.com
```

**📖 See [ENV_SETUP.md](./ENV_SETUP.md) for detailed setup instructions**

### 3. Start Development Server

```bash
npm run dev
```

Navigate to: `http://localhost:3000/projects`

## 🔧 How It Works

### Contact Submission Flow (Without Payment)

1. User fills form → Validates input
2. Submits to `/api/contact/submit`
3. Saves to MongoDB
4. Sends email notification via Nodemailer
5. Returns success response
6. Shows success toast + resets form

### Contact Submission Flow (With Payment)

1. User fills form + checks "Include Payment"
2. Submits → Creates Razorpay order (`/api/payment/create-order`)
3. Opens Razorpay Checkout modal
4. User completes payment
5. Verifies signature (`/api/payment/verify`)
6. Saves contact + payment details to MongoDB
7. Sends email notification
8. Shows success toast + resets form

## 📊 Database Schema

```typescript
{
  name: string;           // Required
  email: string;          // Required, validated
  phone?: string;         // Optional, 10 digits
  message: string;        // Required, 10-1000 chars
  amount?: number;        // Optional (₹100 if payment included)
  payment_status: 'pending' | 'success' | 'failed' | 'none';
  payment_id?: string;    // Razorpay payment ID
  order_id?: string;      // Razorpay order ID
  razorpay_signature?: string;
  created_at: Date;
}
```

## 🔐 Security Features

- ✅ Input validation with Zod schemas
- ✅ Server-side payment signature verification
- ✅ Environment variables never exposed to frontend
- ✅ Mongoose ORM prevents SQL injection
- ✅ HTTPS required for production
- ✅ CORS properly configured
- ✅ Rate limiting recommended (add middleware)

## 🎨 UI Features

- ✅ Full-width responsive design (mobile → desktop)
- ✅ Form validation with error messages
- ✅ Loading states during submission
- ✅ Success/error toast notifications
- ✅ Razorpay payment modal
- ✅ Auto form reset after success
- ✅ Disabled state during processing
- ✅ Touch-friendly buttons (44px min height)

## 📧 Email Notification

Admin receives an email with:

- Contact name, email, phone
- Message content
- Payment status (if applicable)
- Submission timestamp
- Professional HTML template

## 🧪 Testing

### Test Without Payment

1. Go to `/projects`
2. Fill form (leave payment unchecked)
3. Submit
4. Check: MongoDB record + email received

### Test With Payment (Sandbox)

1. Fill form + check "Include Payment"
2. Use test card: `4111 1111 1111 1111`
3. Any future expiry, any CVV
4. Complete payment
5. Check: MongoDB record with payment_id + email

### Test Responsiveness

- Mobile: 375px
- Tablet: 768px
- Desktop: 1920px
- Verify full-width at all breakpoints

## 🚨 Troubleshooting

### MongoDB Connection Error

- Verify `MONGODB_URI` in `.env.local`
- Whitelist your IP in MongoDB Atlas
- Check network connectivity

### Email Not Sending

- Verify Gmail App Password (not regular password)
- Enable 2FA on Google account
- Check `EMAIL_USER` and `EMAIL_PASSWORD`

### Razorpay Payment Fails

- Verify test keys in `.env.local`
- Check browser console for errors
- Ensure Razorpay script loaded

### Form Not Submitting

- Check browser console for errors
- Verify API routes are accessible
- Check network tab for failed requests

## 📝 API Endpoints

| Endpoint                    | Method | Purpose                  |
| --------------------------- | ------ | ------------------------ |
| `/api/contact/submit`       | POST   | Submit contact form      |
| `/api/payment/create-order` | POST   | Create Razorpay order    |
| `/api/payment/verify`       | POST   | Verify payment signature |

## 🎯 Next Steps (Optional Enhancements)

- [ ] Add rate limiting middleware
- [ ] Implement admin dashboard to view submissions
- [ ] Add email templates for different scenarios
- [ ] Set up webhook for payment status updates
- [ ] Add analytics tracking
- [ ] Implement CAPTCHA for spam prevention
- [ ] Add file upload for attachments

## 📞 Support

For issues or questions, contact: developerarunwork@gmail.com

---

**Built with**: Next.js 16, MongoDB, Razorpay, Nodemailer, TypeScript, Tailwind CSS
