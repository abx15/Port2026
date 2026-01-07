import mongoose, { Schema, Model } from 'mongoose';

export interface IContact {
    name: string;
    email: string;
    phone?: string;
    message: string;
    amount?: number;
    payment_status: 'pending' | 'success' | 'failed' | 'none';
    payment_id?: string;
    order_id?: string;
    razorpay_signature?: string;
    created_at: Date;
}

const ContactSchema = new Schema<IContact>(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
            trim: true,
            maxlength: [100, 'Name cannot exceed 100 characters'],
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            trim: true,
            lowercase: true,
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                'Please provide a valid email address',
            ],
        },
        phone: {
            type: String,
            trim: true,
            match: [/^[0-9]{10}$/, 'Please provide a valid 10-digit phone number'],
        },
        message: {
            type: String,
            required: [true, 'Message is required'],
            trim: true,
            maxlength: [1000, 'Message cannot exceed 1000 characters'],
        },
        amount: {
            type: Number,
            min: [0, 'Amount cannot be negative'],
        },
        payment_status: {
            type: String,
            enum: ['pending', 'success', 'failed', 'none'],
            default: 'none',
        },
        payment_id: {
            type: String,
            trim: true,
        },
        order_id: {
            type: String,
            trim: true,
        },
        razorpay_signature: {
            type: String,
            trim: true,
        },
        created_at: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true,
    }
);

// Create indexes for efficient queries
ContactSchema.index({ email: 1 });
ContactSchema.index({ created_at: -1 });
ContactSchema.index({ payment_status: 1 });

const Contact: Model<IContact> =
    mongoose.models.Contact || mongoose.model<IContact>('Contact', ContactSchema);

export default Contact;
