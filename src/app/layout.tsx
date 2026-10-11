import type { Metadata } from "next";
import { Geist, Geist_Mono, Vazirmatn } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "DeKo css — کتابخانه افکت‌های CSS و ابزارهای طراحی",
  description:
    "DeKo css — بیش از ۱۰۰۰ افکت CSS با پیش‌نمایش زنده و کد آماده کپی، به‌همراه ابزارهای گرادیان، سایه، گردی گوشه و پالت رنگ. بدون وابستگی، فقط CSS خالص. ساخته شده توسط امیر علی کریم زاده.",
  keywords: [
    "DeKo css",
    "CSS effects",
    "افکت CSS",
    "CSS animation",
    "کتابخانه CSS",
    "انیمیشن CSS",
    "افکت سه بعدی CSS",
    "design tools",
    "ابزار طراحی",
    "live demo",
  ],
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className="dark" suppressHydrationWarning>
      <body
        className={`${vazirmatn.variable} ${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
