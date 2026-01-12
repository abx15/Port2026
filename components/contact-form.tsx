"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Loader2, Send, CheckCircle2 } from "lucide-react";
import { useRazorpay } from "@/lib/hooks/useRazorpay";
import type { ContactFormData, PaymentOrderResponse } from "@/types/contact";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please provide a valid email address"),
  phone: z
    .string()
    .regex(/^[0-9]{10}$/, "Please provide a valid 10-digit phone number")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000),
  includePayment: z.boolean().default(false),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { isLoaded: isRazorpayLoaded, initiatePayment } = useRazorpay();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      includePayment: false,
    },
  });

  const includePayment = watch("includePayment");

  // Handle form submission without payment
  const submitContactForm = async (
    formData: FormData,
    paymentDetails?: {
      payment_id: string;
      order_id: string;
    }
  ) => {
    try {
      const response = await fetch("/api/contact/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || undefined,
          message: formData.message,
          amount: formData.includePayment ? 100 : undefined,
          payment_id: paymentDetails?.payment_id,
          order_id: paymentDetails?.order_id,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit form");
      }

      return data;
    } catch (error) {
      console.error("Contact submission error:", error);
      throw error;
    }
  };

  // Handle payment flow
  const handlePayment = async (formData: FormData) => {
    try {
      // Create Razorpay order
      const orderResponse = await fetch("/api/payment/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: 100 }),
      });

      const orderData: PaymentOrderResponse = await orderResponse.json();

      if (!orderResponse.ok || !orderData.success) {
        throw new Error(
          orderData.message ||
            orderData.error ||
            "Failed to create payment order"
        );
      }

      // Open Razorpay checkout
      await initiatePayment({
        key: orderData.key_id,
        amount: orderData.amount * 100, // Convert to paise
        currency: orderData.currency,
        name: "Arun Kumar Portfolio",
        description: "Project Contact Payment",
        order_id: orderData.order_id,
        handler: async (response) => {
          try {
            // Verify payment
            const verifyResponse = await fetch("/api/payment/verify", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });

            const verifyData = await verifyResponse.json();

            if (!verifyResponse.ok || !verifyData.success) {
              throw new Error(
                verifyData.message || "Payment verification failed"
              );
            }

            // Submit contact form with payment details
            await submitContactForm(formData, {
              payment_id: response.razorpay_payment_id,
              order_id: response.razorpay_order_id,
            });

            // Success!
            setIsSuccess(true);
            toast.success("Payment successful! Your message has been sent.", {
              description: "We'll get back to you soon.",
              duration: 5000,
            });
            reset();
          } catch (error) {
            console.error("Payment verification error:", error);
            toast.error("Payment verification failed", {
              description:
                error instanceof Error
                  ? error.message
                  : "Please contact support",
            });
          } finally {
            setIsSubmitting(false);
          }
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone || undefined,
        },
        theme: {
          color: "#667eea",
        },
        modal: {
          ondismiss: () => {
            setIsSubmitting(false);
            toast.error("Payment cancelled", {
              description: "You can try again anytime",
            });
          },
        },
      });
    } catch (error) {
      console.error("Payment error:", error);
      toast.error("Payment failed", {
        description:
          error instanceof Error ? error.message : "Please try again",
      });
      setIsSubmitting(false);
    }
  };

  // Main form submission handler
  const onSubmit = async (formData: FormData) => {
    setIsSubmitting(true);

    try {
      if (formData.includePayment) {
        // Payment flow
        if (!isRazorpayLoaded) {
          throw new Error("Payment system is loading. Please try again.");
        }
        await handlePayment(formData);
      } else {
        // Direct submission without payment
        await submitContactForm(formData);

        setIsSuccess(true);
        toast.success("Message sent successfully!", {
          description: "Thank you for reaching out. We'll respond soon.",
          duration: 5000,
        });
        reset();

        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to send message", {
        description:
          error instanceof Error ? error.message : "Please try again later",
      });
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="w-full h-[600px] flex flex-col items-center justify-center text-center p-8 space-y-6 bg-gradient-to-br from-primary/5 via-primary/10 to-transparent rounded-2xl border-2 border-primary/20 animate-in fade-in zoom-in duration-500">
        <div className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
          <CheckCircle2 className="w-12 h-12 text-green-500" />
        </div>
        <h3 className="text-3xl font-bold tracking-tight">
          Payment Successful!
        </h3>
        <p className="text-muted-foreground text-lg max-w-md">
          Thank you for your payment and message. We have received your details
          and will get back to you shortly.
        </p>
        <div className="pt-6">
          <Button
            onClick={() => setIsSuccess(false)}
            variant="outline"
            className="min-w-[200px] border-2 hover:bg-primary hover:text-primary-foreground transition-all"
          >
            Send Another Message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-8">
        {/* Name and Email - Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Name Field */}
          <div className="space-y-3">
            <label
              htmlFor="name"
              className="block text-sm font-bold text-foreground uppercase tracking-wider"
            >
              Full Name <span className="text-red-500">*</span>
            </label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your full name"
              {...register("name")}
              disabled={isSubmitting || isSuccess}
              className="h-14 text-base border-2 focus:border-primary transition-all duration-300"
            />
            {errors.name && (
              <p className="text-sm text-red-500 flex items-center gap-1">
                <span className="text-lg">⚠️</span> {errors.name.message}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="space-y-3">
            <label
              htmlFor="email"
              className="block text-sm font-bold text-foreground uppercase tracking-wider"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              {...register("email")}
              disabled={isSubmitting || isSuccess}
              className="h-14 text-base border-2 focus:border-primary transition-all duration-300"
            />
            {errors.email && (
              <p className="text-sm text-red-500 flex items-center gap-1">
                <span className="text-lg">⚠️</span> {errors.email.message}
              </p>
            )}
          </div>
        </div>

        {/* Phone Field - Full Width */}
        <div className="space-y-3">
          <label
            htmlFor="phone"
            className="block text-sm font-bold text-foreground uppercase tracking-wider"
          >
            Phone Number{" "}
            <span className="text-muted-foreground font-normal">
              (Optional)
            </span>
          </label>
          <Input
            id="phone"
            type="tel"
            placeholder="10-digit mobile number"
            {...register("phone")}
            disabled={isSubmitting || isSuccess}
            className="h-14 text-base border-2 focus:border-primary transition-all duration-300"
          />
          {errors.phone && (
            <p className="text-sm text-red-500 flex items-center gap-1">
              <span className="text-lg">⚠️</span> {errors.phone.message}
            </p>
          )}
        </div>

        {/* Message Field - Full Width */}
        <div className="space-y-3">
          <label
            htmlFor="message"
            className="block text-sm font-bold text-foreground uppercase tracking-wider"
          >
            Your Message <span className="text-red-500">*</span>
          </label>
          <Textarea
            id="message"
            placeholder="Tell me about your project, ideas, or how we can collaborate..."
            rows={8}
            {...register("message")}
            disabled={isSubmitting || isSuccess}
            className="text-base resize-none border-2 focus:border-primary transition-all duration-300"
          />
          {errors.message && (
            <p className="text-sm text-red-500 flex items-center gap-1">
              <span className="text-lg">⚠️</span> {errors.message.message}
            </p>
          )}
        </div>

        {/* Payment Checkbox - Enhanced Design */}
        <div className="relative">
          <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-primary/5 via-primary/10 to-transparent rounded-xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
            <Checkbox
              id="includePayment"
              checked={includePayment}
              onCheckedChange={(checked) =>
                setValue("includePayment", checked as boolean)
              }
              disabled={isSubmitting || isSuccess}
              className="mt-1 h-5 w-5"
            />
            <div className="flex-1">
              <label
                htmlFor="includePayment"
                className="text-base font-semibold leading-none cursor-pointer flex items-center gap-2"
              >
                Include Payment (₹100)
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold bg-primary text-primary-foreground">
                  PRIORITY
                </span>
              </label>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                Get priority response and personalized consultation for your
                project
              </p>
            </div>
          </div>
        </div>

        {/* Submit Button - Enhanced */}
        <div className="pt-4">
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting || isSuccess}
            className="w-full h-16 text-lg font-bold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-3 h-6 w-6 animate-spin" />
                {includePayment
                  ? "Processing Payment..."
                  : "Sending Message..."}
              </>
            ) : isSuccess ? (
              <>
                <CheckCircle2 className="mr-3 h-6 w-6" />
                Message Sent Successfully!
              </>
            ) : (
              <>
                <Send className="mr-3 h-6 w-6" />
                {includePayment ? "Proceed to Payment" : "Send Message"}
              </>
            )}
          </Button>
        </div>

        {/* Info Text */}
        <div className="text-center pt-2">
          <p className="text-sm text-muted-foreground leading-relaxed">
            🔒 Your information is secure and will only be used to respond to
            your inquiry.
          </p>
        </div>
      </form>
    </div>
  );
}
