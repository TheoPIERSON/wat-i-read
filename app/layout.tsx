import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Noto_Sans_Javanese } from "next/font/google";

const NotoJapanese = Noto_Sans_Javanese({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "WAT-I-READ",
  description: "Next library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={cn(NotoJapanese.variable, "font-sans h-full bg-background text-foreground")}>{children}</body>
    </html>
  );
}
