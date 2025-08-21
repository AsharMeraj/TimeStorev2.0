import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Josefin_Sans } from "next/font/google"
import "./globals.css";
import Navbar from "./_components/Navbar";
import StoreWrapper from "./Provider/StoreWrapper";
import Footer from "./_components/Footer";
import { Suspense } from "react";
import NextTopLoader from 'nextjs-toploader';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TimeStore",
  description: "Welcome to our premier online watch boutique, where every tick marks a moment of timeless elegance. Discover an extensive selection of meticulously curated watches designed to elevate your style and punctuate your presence. From classic designs to contemporary marvels, our collection boasts a diverse range of timepieces to suit every taste and occasion.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <Suspense fallback={<div className="w-full h-screen flex items-center justify-center text-[2rem]">Loading...</div>}>
          <NextTopLoader
            color='var(--primary)'
            height={3}
            showSpinner={false}
          />
          <StoreWrapper>
            <Navbar />
            {children}
            <Footer />
          </StoreWrapper>
        </Suspense>
      </body>
    </html>
  );
}
