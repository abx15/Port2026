import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import { paymentOrderSchema } from '@/lib/utils/validation';
import { ZodError } from 'zod';

// Initialize Razorpay instance
const getRazorpayInstance = () => {
    const keyId = process.env.RAZORPAY_KEY_ID?.trim();
    const keySecret = process.env.RAZORPAY_KEY_SECRET?.trim();

    if (!keyId || !keySecret) {
        throw new Error(
            'RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET must be defined in environment variables'
        );
    }

    return new Razorpay({
        key_id: keyId,
        key_secret: keySecret,
    });
};

export async function POST(request: NextRequest) {
    try {
        // Parse request body
        const body = await request.json();

        // Validate input (amount is fixed at ₹100)
        const validatedData = paymentOrderSchema.parse({
            amount: 100, // Fixed amount
            currency: body.currency || 'INR',
        });

        // Initialize Razorpay
        const razorpay = getRazorpayInstance();

        // Create order
        const order = await razorpay.orders.create({
            amount: validatedData.amount * 100, // Convert to paise (₹100 = 10000 paise)
            currency: validatedData.currency,
            receipt: `receipt_${Date.now()}`,
            notes: {
                purpose: 'Contact Form Payment',
                created_at: new Date().toISOString(),
            },
        });

        console.log('✅ Razorpay order created:', order.id);

        // Return order details (NEVER expose key_secret)
        return NextResponse.json(
            {
                success: true,
                order_id: order.id,
                amount: validatedData.amount,
                currency: validatedData.currency,
                key_id: process.env.RAZORPAY_KEY_ID,
            },
            { status: 201 }
        );
    } catch (error) {
        console.error('❌ Payment order creation error:', error);

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

        // Handle Razorpay errors
        if (error instanceof Error && 'statusCode' in error) {
            return NextResponse.json(
                {
                    success: false,
                    error: 'Razorpay error',
                    message: error.message,
                },
                { status: (error as any).statusCode || 500 }
            );
        }

        // Generic error
        return NextResponse.json(
            {
                success: false,
                error: 'Failed to create payment order',
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
