import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db/mongodb';
import Contact from '@/lib/models/Contact';
import { sendContactNotification } from '@/lib/services/emailService';
import { contactFormSchema } from '@/lib/utils/validation';
import { ZodError } from 'zod';

export async function POST(request: NextRequest) {
    try {
        // Parse request body
        const body = await request.json();

        // Validate input
        const validatedData = contactFormSchema.parse(body);

        // Connect to database
        await connectDB();

        // Create contact record
        const contact = await Contact.create({
            name: validatedData.name,
            email: validatedData.email,
            phone: validatedData.phone || undefined,
            message: validatedData.message,
            amount: validatedData.amount || undefined,
            payment_status: validatedData.amount ? 'pending' : 'none',
            payment_id: validatedData.payment_id || undefined,
            order_id: validatedData.order_id || undefined,
            created_at: new Date(),
        });

        // Send email notification
        const emailResult = await sendContactNotification({
            name: contact.name,
            email: contact.email,
            phone: contact.phone,
            message: contact.message,
            amount: contact.amount,
            payment_status: contact.payment_status,
            created_at: contact.created_at,
        });

        if (!emailResult.success) {
            console.warn('⚠️ Email notification failed:', emailResult.error);
            // Don't fail the request if email fails, just log it
        }

        return NextResponse.json(
            {
                success: true,
                message: 'Contact form submitted successfully',
                contactId: contact._id,
            },
            { status: 201 }
        );
    } catch (error) {
        console.error('❌ Contact submission error:', error);

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

        // Handle mongoose validation errors
        if (error instanceof Error && error.name === 'ValidationError') {
            return NextResponse.json(
                {
                    success: false,
                    error: 'Database validation failed',
                    details: error.message,
                },
                { status: 400 }
            );
        }

        // Generic error
        return NextResponse.json(
            {
                success: false,
                error: 'Failed to submit contact form',
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
