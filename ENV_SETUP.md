# Contact System - Environment Variables Setup Guide

## Required Environment Variables

Create a `.env.local` file in the root directory with the following variables:

### Database Configuration

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
```

- Get your MongoDB connection string from [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Replace `username`, `password`, and `cluster` with your actual credentials

### Razorpay Payment Gateway

```env
RAZORPAY_KEY_ID=rzp_test_your_key_id_here
RAZORPAY_KEY_SECRET=your_razorpay_key_secret_here
```

- Sign up at [Razorpay Dashboard](https://dashboard.razorpay.com/)
- Get test keys from Settings → API Keys
- For production, use live keys (rzp*live*...)

### Email Service (Nodemailer with Gmail)

```env
EMAIL_USER=your.email@gmail.com
EMAIL_PASSWORD=your_gmail_app_password_here
ADMIN_EMAIL=admin@example.com
```

- `EMAIL_USER`: Your Gmail address
- `EMAIL_PASSWORD`: Gmail App Password (NOT your regular password)
  - Enable 2FA on your Google account
  - Go to Google Account → Security → App Passwords
  - Generate a new app password for "Mail"
- `ADMIN_EMAIL`: Email where contact notifications will be sent (defaults to EMAIL_USER if not set)

### Existing Variables (Keep these)

```env
RESEND_API_KEY=re_your_resend_api_key
CONTACT_EMAIL=developerarunwork@gmail.com
NODE_ENV=development
```

## Complete .env.local Template

```env
# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority

# Razorpay
RAZORPAY_KEY_ID=rzp_test_your_key_id_here
RAZORPAY_KEY_SECRET=your_razorpay_key_secret_here

# Email (Nodemailer)
EMAIL_USER=your.email@gmail.com
EMAIL_PASSWORD=your_gmail_app_password_here
ADMIN_EMAIL=admin@example.com

# Existing
RESEND_API_KEY=re_your_resend_api_key
CONTACT_EMAIL=developerarunwork@gmail.com
NODE_ENV=development
```

## Security Notes

⚠️ **NEVER commit `.env.local` to version control**
✅ `.env.local` is already in `.gitignore`
✅ Only share environment variables through secure channels
✅ Use test keys for development, live keys for production
