"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import ContactForm from "@/components/contact-form";

export default function ContactPage() {
  return (
    <div className="pt-20">
      <section className="border-b border-border">
        <div className="w-full px-6 lg:px-12 py-20 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 text-balance">
              Get In Touch
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Have a project in mind or want to discuss opportunities? I'd love
              to hear from you. Send me a message and I'll respond as soon as
              possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="w-full px-6 lg:px-12 py-24 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 border-2 shadow-sm">
              <ContactForm />
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
              <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                Whether you have a project in mind, need technical consultation,
                or just want to say hello, I'm here to help. I typically respond
                within 24-48 hours.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="p-6 border-2 hover:border-primary/20 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-lg">Email</h3>
                    <a
                      href="mailto:developerarunwork@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors text-base"
                    >
                      developerarunwork@gmail.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-2 hover:border-primary/20 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-lg">Location</h3>
                    <p className="text-muted-foreground text-base">India</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Available for remote work worldwide
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="pt-8">
              <h3 className="font-bold mb-4 text-xl">What to Expect</h3>
              <ul className="space-y-4 text-muted-foreground text-base">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl mt-[-4px]">
                    •
                  </span>
                  <span>Initial response within 24-48 hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl mt-[-4px]">
                    •
                  </span>
                  <span>
                    Detailed discussion about your project requirements
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl mt-[-4px]">
                    •
                  </span>
                  <span>Transparent communication throughout the process</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl mt-[-4px]">
                    •
                  </span>
                  <span>Professional and timely delivery of work</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
