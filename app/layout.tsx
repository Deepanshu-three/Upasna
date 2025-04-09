import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // Importing Footer Component

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-100">
        {/* Navbar - Fixed at the top */}
        <div className="fixed top-0 left-0 w-full z-50 shadow-md bg-white">
          <Navbar />
        </div>

        {/* Content with space for fixed navbar */}
        <main className="flex-grow w-full flex justify-center px-4 pt-16">
          <div className="w-full max-w-[1200px]">{children}</div>
        </main>

        {/* Footer - Always at the bottom */}
        <div className=" w-full shadow-md bg-white">
          <Footer />
        </div>
      </body>
    </html>
  );
}
