import { useState, useEffect } from 'react';
import type { RazorpayOptions } from '@/types/contact';

interface UseRazorpayReturn {
    isLoaded: boolean;
    initiatePayment: (options: Partial<RazorpayOptions>) => Promise<void>;
    error: string | null;
}

export function useRazorpay(): UseRazorpayReturn {
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Load Razorpay script
        const loadRazorpayScript = () => {
            return new Promise<boolean>((resolve) => {
                // Check if already loaded
                if (window.Razorpay) {
                    setIsLoaded(true);
                    resolve(true);
                    return;
                }

                const script = document.createElement('script');
                script.src = 'https://checkout.razorpay.com/v1/checkout.js';
                script.async = true;

                script.onload = () => {
                    setIsLoaded(true);
                    resolve(true);
                };

                script.onerror = () => {
                    setError('Failed to load Razorpay SDK');
                    resolve(false);
                };

                document.body.appendChild(script);
            });
        };

        loadRazorpayScript();
    }, []);

    const initiatePayment = async (options: Partial<RazorpayOptions>) => {
        if (!isLoaded) {
            throw new Error('Razorpay SDK not loaded');
        }

        if (!window.Razorpay) {
            throw new Error('Razorpay is not available');
        }

        const razorpayInstance = new window.Razorpay(options);
        razorpayInstance.open();
    };

    return { isLoaded, initiatePayment, error };
}
