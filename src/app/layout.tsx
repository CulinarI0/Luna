import { HeaderButtons } from "@/components/Header";
// import { Metadata } from "next";
import React from 'react'
import { Inter as CustomFont } from "next/font/google";
import "./globals.css";
const customFont = CustomFont({
  subsets: ["latin"],
  variable: "--font-custom",
});

export interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html
      lang="en"
      className={`motion-safe:scroll-smooth 2xl:text-[24px] ${customFont.variable} font-sans`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div className="flex flex-col min-h-screen">
          <HeaderButtons />
          <main className="flex-grow bg-[#FAFAFA]">{children}</main>
        </div>
      </body>
    </html>
  );
}
