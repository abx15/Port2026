const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables from .env
dotenv.config({ path: path.join(__dirname, '..', '.env') });

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || EMAIL_USER;

console.log('--- Email Diagnostic Tool ---');
console.log('User:', EMAIL_USER);
console.log('Admin Email:', ADMIN_EMAIL);
console.log('Password Length:', EMAIL_PASSWORD ? EMAIL_PASSWORD.length : 0);

if (!EMAIL_USER || !EMAIL_PASSWORD) {
    console.error('❌ Missing credentials in .env');
    process.exit(1);
}

async function testEmail() {
    console.log('\n--- Test 1: Port 587 (STARTTLS) ---');
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: EMAIL_USER,
                pass: EMAIL_PASSWORD,
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        console.log('🔌 Connecting...');
        await transporter.verify();
        console.log('✅ Connection verified!');

        console.log('📧 Sending test mail...');
        const info = await transporter.sendMail({
            from: `"Diagnostic tool" <${EMAIL_USER}>`,
            to: ADMIN_EMAIL,
            subject: "Portfolio Email Diagnostic",
            text: "This is a test email to verify your SMTP configuration.",
            html: "<b>Connection Test Successful!</b>"
        });
        console.log('✅ Email sent successfully:', info.messageId);
    } catch (error) {
        console.error('❌ Port 587 failed:', error.message);
        if (error.code === 'EAUTH') {
            console.error('💡 TIP: Check if 2FA is enabled and you are using an "App Password" (not your regular Gmail password).');
        }
    }

    console.log('\n--- Test 3: Port 465 (SSL) - Alternate Method ---');
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: EMAIL_USER,
                pass: EMAIL_PASSWORD,
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        console.log('🔌 Connecting...');
        await transporter.verify();
        console.log('✅ Connection verified!');
    } catch (error) {
        console.error('❌ Port 465 failed:', error.message);
    }

    console.log('\n--- Final Verdict ---');
    console.log('If all tests failed with "EAUTH", your App Password is likely wrong.');
    console.log('If they failed with "ETIMEDOUT" or "ECONNREFUSED", your network/firewall is blocking SMTP.');
}

testEmail();
