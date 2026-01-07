import { z } from 'zod';

// Contact form validation schema
export const contactFormSchema = z.object({
    name: z
        .string()
        .min(2, 'Name must be at least 2 characters')
        .max(100, 'Name cannot exceed 100 characters')
        .trim(),
    email: z
        .string()
        .email('Please provide a valid email address')
        .toLowerCase()
        .trim(),
    phone: z
        .string()
        .regex(/^[0-9]{10}$/, 'Please provide a valid 10-digit phone number')
        .optional()
        .or(z.literal('')),
    message: z
        .string()
        .min(10, 'Message must be at least 10 characters')
        .max(1000, 'Message cannot exceed 1000 characters')
        .trim(),
    amount: z.number().min(0, 'Amount cannot be negative').optional(),
    payment_id: z.string().optional(),
    order_id: z.string().optional(),
});

// Payment order creation schema
export const paymentOrderSchema = z.object({
    amount: z.number().min(1, 'Amount must be at least ₹1'),
    currency: z.string().default('INR'),
});

// Payment verification schema
export const paymentVerificationSchema = z.object({
    razorpay_order_id: z.string().min(1, 'Order ID is required'),
    razorpay_payment_id: z.string().min(1, 'Payment ID is required'),
    razorpay_signature: z.string().min(1, 'Signature is required'),
});

// Type exports
export type ContactFormData = z.infer<typeof contactFormSchema>;
export type PaymentOrderData = z.infer<typeof paymentOrderSchema>;
export type PaymentVerificationData = z.infer<typeof paymentVerificationSchema>;
