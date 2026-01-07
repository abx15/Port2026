import nodemailer from 'nodemailer';

interface ContactEmailData {
    name: string;
    email: string;
    phone?: string;
    message: string;
    amount?: number;
    payment_status?: string;
    created_at: Date;
}

// Create reusable transporter
const createTransporter = () => {
    const emailUser = process.env.EMAIL_USER;
    const emailPassword = process.env.EMAIL_PASSWORD;

    if (!emailUser || !emailPassword) {
        throw new Error(
            'EMAIL_USER and EMAIL_PASSWORD must be defined in environment variables'
        );
    }

    return nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // use STARTTLS
        auth: {
            user: emailUser,
            pass: emailPassword,
        },
        tls: {
            // Do not fail on invalid certs (common on some Windows/Local setups)
            rejectUnauthorized: false,
        },
    });
};

/**
 * Send email notification to admin when a new contact form is submitted
 */
export async function sendContactNotification(
    contactData: ContactEmailData
): Promise<{ success: boolean; error?: string }> {
    try {
        const transporter = createTransporter();
        const adminEmail = process.env.ADMIN_EMAIL || process.env.EMAIL_USER;

        const paymentInfo = contactData.amount
            ? `
        <div style="background-color: #e8f5e9; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #4caf50;">
          <h3 style="margin-top: 0; color: #2e7d32;">💳 Payment Information</h3>
          <p style="margin: 5px 0;"><strong>Amount:</strong> ₹${contactData.amount}</p>
          <p style="margin: 5px 0;"><strong>Status:</strong> <span style="color: ${contactData.payment_status === 'success' ? '#4caf50' : '#ff9800'
            }; font-weight: bold; text-transform: uppercase;">${contactData.payment_status || 'Pending'
            }</span></p>
        </div>
      `
            : '';

        const mailOptions = {
            from: `"Portfolio Contact System" <${process.env.EMAIL_USER}>`,
            to: adminEmail,
            replyTo: contactData.email,
            subject: `🔔 New Project Contact Request from ${contactData.name}`,
            html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4; margin: 0; padding: 20px;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600;">
                📬 New Contact Request
              </h1>
            </div>
            
            <!-- Content -->
            <div style="padding: 30px;">
              
              <!-- Contact Information -->
              <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                <h2 style="color: #333; margin-top: 0; font-size: 20px; border-bottom: 2px solid #667eea; padding-bottom: 10px;">
                  👤 Contact Information
                </h2>
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; color: #666; font-weight: 600; width: 120px;">Name:</td>
                    <td style="padding: 8px 0; color: #333;">${contactData.name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #666; font-weight: 600;">Email:</td>
                    <td style="padding: 8px 0;"><a href="mailto:${contactData.email}" style="color: #667eea; text-decoration: none;">${contactData.email}</a></td>
                  </tr>
                  ${contactData.phone
                    ? `
                  <tr>
                    <td style="padding: 8px 0; color: #666; font-weight: 600;">Phone:</td>
                    <td style="padding: 8px 0; color: #333;">${contactData.phone}</td>
                  </tr>
                  `
                    : ''
                }
                  <tr>
                    <td style="padding: 8px 0; color: #666; font-weight: 600;">Submitted:</td>
                    <td style="padding: 8px 0; color: #333;">${new Date(
                    contactData.created_at
                ).toLocaleString('en-IN', {
                    dateStyle: 'full',
                    timeStyle: 'short',
                    timeZone: 'Asia/Kolkata',
                })}</td>
                  </tr>
                </table>
              </div>

              ${paymentInfo}
              
              <!-- Message -->
              <div style="background-color: #fff3e0; padding: 20px; border-radius: 8px; border-left: 4px solid #ff9800;">
                <h3 style="margin-top: 0; color: #e65100; font-size: 18px;">💬 Message</h3>
                <p style="line-height: 1.8; color: #333; margin: 0; white-space: pre-wrap;">${contactData.message}</p>
              </div>
              
            </div>
            
            <!-- Footer -->
            <div style="background-color: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #e0e0e0;">
              <p style="margin: 0; color: #999; font-size: 13px;">
                This email was sent from your portfolio contact form at 
                <strong>${new Date(contactData.created_at).toLocaleTimeString('en-IN', {
                    timeZone: 'Asia/Kolkata',
                })}</strong>
              </p>
              <p style="margin: 10px 0 0 0; color: #999; font-size: 12px;">
                © ${new Date().getFullYear()} Arun Kumar Portfolio. All rights reserved.
              </p>
            </div>
            
          </div>
        </body>
        </html>
      `,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('✅ Email sent successfully:', info.messageId);
        console.log('📤 To:', adminEmail);

        return { success: true };
    } catch (error) {
        console.error('❌ Email sending failed ERROR DETAILS:', error);
        if (error instanceof Error) {
            console.error('Stack:', error.stack);
        }
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error',
        };
    }
}
