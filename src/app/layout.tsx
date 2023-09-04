import { FooterButtons } from "@/components/Footer";
// import { Metadata } from "next";

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
      <body className="bg-white tracking-tight text-gray-900 antialiased dark:bg-slate-900 dark:text-slate-300">
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">{children}</main>
          <FooterButtons />
        </div>
      </body>
    </html>
  );
}
