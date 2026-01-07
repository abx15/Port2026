export interface ContactFormData {
    name: string;
    email: string;
    phone?: string;
    message: string;
    includePayment?: boolean;
}

export interface PaymentOrderResponse {
    success: boolean;
    order_id: string;
    amount: number;
    currency: string;
    key_id: string;
    error?: string;
    message?: string;
}

export interface PaymentVerificationRequest {
    razorpay_order_id: string;
    razorpay_payment_id: string;
    razorpay_signature: string;
}

export interface RazorpayOptions {
    key: string;
    amount: number;
    currency: string;
    name: string;
    description: string;
    order_id: string;
    handler: (response: {
        razorpay_payment_id: string;
        razorpay_order_id: string;
        razorpay_signature: string;
    }) => void;
    prefill: {
        name: string;
        email: string;
        contact?: string;
    };
    theme: {
        color: string;
    };
    modal: {
        ondismiss: () => void;
    };
}

declare global {
    interface Window {
        Razorpay: any;
    }
}
