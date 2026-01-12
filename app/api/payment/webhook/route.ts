import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import connectDB from '@/lib/db/mongodb';
import Contact from '@/lib/models/Contact';

export async function POST(request: NextRequest) {
    try {
        const body = await request.text();
        const signature = request.headers.get('x-razorpay-signature');
        const secret = process.env.RAZORPAY_WEBHOOK_SECRET;

        // 1. Verify Webhook Secret exists
        if (!secret) {
            console.error('❌ RAZORPAY_WEBHOOK_SECRET is not defined');
            return NextResponse.json({ error: 'Configuration error' }, { status: 500 });
        }

        // 2. Verify Signature
        if (!signature) {
            return NextResponse.json({ error: 'Missing signature' }, { status: 400 });
        }

        const generatedSignature = crypto
            .createHmac('sha256', secret)
            .update(body)
            .digest('hex');

        if (generatedSignature !== signature) {
            console.error('❌ Invalid webhook signature');
            return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
        }

        // 3. Process Event
        const event = JSON.parse(body);
        console.log('🔔 Razorpay Webhook Event:', event.event);

        await connectDB();

        if (event.event === 'payment.captured') {
            const { payload } = event;
            const payment = payload.payment.entity;
            const orderId = payment.order_id;

            // Update status to 'success' (if not already)
            const updatedContact = await Contact.findOneAndUpdate(
                { order_id: orderId },
                {
                    payment_status: 'success',
                    payment_id: payment.id,
                    // You might want to store more details here
                },
                { new: true }
            );

            if (updatedContact) {
                console.log(`✅ Order ${orderId} marked as paid (via Webhook)`);
            } else {
                console.warn(`⚠️ Order ${orderId} not found in DB`);
            }
        } else if (event.event === 'payment.failed') {
            const { payload } = event;
            const payment = payload.payment.entity;
            const orderId = payment.order_id;

            await Contact.findOneAndUpdate(
                { order_id: orderId },
                { payment_status: 'failed' }
            );
            console.log(`❌ Order ${orderId} marked as failed`);
        }

        return NextResponse.json({ status: 'ok' });

    } catch (error) {
        console.error('❌ Webhook error:', error);
        return NextResponse.json({ error: 'Internal User Error' }, { status: 500 });
    }
}
