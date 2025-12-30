import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Arun Kumar - Frontend & Full Stack Developer",
  description:
    "Portfolio of Arun Kumar, a skilled Frontend and Full Stack React Developer specializing in modern, scalable, user-focused web applications.",
  keywords: [
    "Frontend Developer",
    "Full Stack Developer",
    "React",
    "TypeScript",
    "Web Development",
    "Arun Kumar",
  ],
  authors: [{ name: "Arun Kumar" }],
  creator: "Arun Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arun15dev.netlify.app",
    title: "Arun Kumar - Frontend & Full Stack Developer",
    description:
      "Portfolio of Arun Kumar, a skilled Frontend and Full Stack React Developer",
    siteName: "Arun Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arun Kumar - Frontend & Full Stack Developer",
    description:
      "Portfolio of Arun Kumar, a skilled Frontend and Full Stack React Developer",
  },
  icons: {
    icon: "/faviconLogo26.png", // single icon
    apple: "/faviconLogo26.png", // use same for Apple devices
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
