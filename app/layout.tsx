import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";


export const metadata: Metadata = {
  title: "Seeds Financial Groups",
  description: "We Grow Big People",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
      <Header/>
      {children}
      <Footer/>
      </body>
    </html>
  );
}
