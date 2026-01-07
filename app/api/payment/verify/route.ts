import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import connectDB from '@/lib/db/mongodb';
import Contact from '@/lib/models/Contact';
import { paymentVerificationSchema } from '@/lib/utils/validation';
import { ZodError } from 'zod';

/**
 * Verify Razorpay payment signature
 * Formula: HMAC SHA256(order_id + "|" + payment_id, secret) === signature
 */
function verifyPaymentSignature(
    orderId: string,
    paymentId: string,
    signature: string
): boolean {
    const keySecret = process.env.RAZORPAY_KEY_SECRET?.trim();

    if (!keySecret) {
        throw new Error('RAZORPAY_KEY_SECRET is not defined');
    }

    const generatedSignature = crypto
        .createHmac('sha256', keySecret)
        .update(`${orderId}|${paymentId}`)
        .digest('hex');

    console.log('--- Signature Verification ---');
    console.log('OrderID:', orderId);
    console.log('PaymentID:', paymentId);
    console.log('Received:', signature);
    console.log('Generated:', generatedSignature);
    console.log('Match:', generatedSignature === signature);

    return generatedSignature === signature;
}

export async function POST(request: NextRequest) {
    try {
        // Parse request body
        const body = await request.json();

        // Validate input
        const validatedData = paymentVerificationSchema.parse(body);

        // Verify signature
        const isValid = verifyPaymentSignature(
            validatedData.razorpay_order_id,
            validatedData.razorpay_payment_id,
            validatedData.razorpay_signature
        );

        if (!isValid) {
            console.error('❌ Invalid payment signature');
            return NextResponse.json(
                {
                    success: false,
                    error: 'Payment verification failed',
                    message: 'Invalid signature',
                },
                { status: 400 }
            );
        }

        // Connect to database
        await connectDB();

        // Update contact record with payment details
        const updatedContact = await Contact.findOneAndUpdate(
            { order_id: validatedData.razorpay_order_id },
            {
                payment_id: validatedData.razorpay_payment_id,
                razorpay_signature: validatedData.razorpay_signature,
                payment_status: 'success',
            },
            { new: true }
        );

        if (!updatedContact) {
            console.warn('⚠️ Contact record not found for order:', validatedData.razorpay_order_id);
            // Payment is valid but contact record not found - this is unusual but not critical
        }

        console.log('✅ Payment verified successfully:', validatedData.razorpay_payment_id);

        return NextResponse.json(
            {
                success: true,
                message: 'Payment verified successfully',
                payment_id: validatedData.razorpay_payment_id,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('❌ Payment verification error:', error);

        // Handle validation errors
        if (error instanceof ZodError) {
            return NextResponse.json(
                {
                    success: false,
                    error: 'Validation failed',
                    details: error.errors.map((err) => ({
                        field: err.path.join('.'),
                        message: err.message,
                    })),
                },
                { status: 400 }
            );
        }

        // Generic error
        return NextResponse.json(
            {
                success: false,
                error: 'Payment verification failed',
                message:
                    process.env.NODE_ENV === 'development'
                        ? error instanceof Error
                            ? error.message
                            : 'Unknown error'
                        : 'Internal server error',
            },
            { status: 500 }
        );
    }
}
