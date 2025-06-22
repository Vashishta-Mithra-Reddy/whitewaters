import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import localfont from "next/font/local";

import "./globals.css";
import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import BottomNav from "@/components/shared/bottom-nav";
import BottomGradient from "@/components/BottomGradient";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "White Waters",
  description: "Your One Stop Spot For All Your Adventures",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  display: "swap",
  subsets: ["latin"],
});

const satoshi = localfont({
  variable: "--font-satoshi",
  weight: "900",
  src: "./fonts/Satoshi-Variable.woff2",
  display: "swap"
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} ${satoshi.variable} antialiased flex flex-col items-center`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div className="px-6 md:px-20 py-80 md:py-80 pt-16 md:pt-28 pb-16 md:pb-20">
            {children}
          </div>
          
          <BottomGradient/>
          <BottomNav/>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
