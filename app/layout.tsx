import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/sonner";
import { Poppins } from "next/font/google";
import { Metadata } from "next";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-poppins",
});

export const metadata: Metadata = {
    title: "Upasana Homoeo | One of the best homoropathic solution in ajmer India",
    description: "Welcome to Your Website - Offering the best services and products tailored for you.",
    keywords: ["Your Website", "Services", "Products", "Online Platform"],
    authors: [{ name: "Your Name" }],
    viewport: "width=device-width, initial-scale=1",
    icons: {
      icon: "/favicon.png", // Path to your favicon in the public directory
      shortcut: "/favicon.png", // Optional: for shortcut icon
      apple: "/favicon.png", // Optional: for Apple devices
    },
    themeColor: "#ffffff", // Define the theme color for browsers
    robots: {
      index: true,
      follow: true,
    },
  };

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${poppins.variable} overflow-x-hidden`}>
            <SessionProvider>
                <body className="flex flex-col min-h-screen  bg-accent  overflow-x-hidden font-sans">
                    {/* Navbar - Fixed at the top */}
                    <div className="fixed top-0 left-0 w-full z-50 shadow-md bg-white">
                        <Navbar />
                    </div>

                    {/* Content with space for fixed navbar */}
                    <main className="flex-grow w-full flex justify-center px-4 pt-16">
                        <div className="w-full max-w-7xl overflow-x-hidden">
                            {children}
                        </div>
                    </main>
                    <Toaster />
                    {/* Footer - Always at the bottom */}
                    <div className="w-full shadow-md bg-white">
                        <Footer />
                    </div>
                </body>
            </SessionProvider>
        </html>
    );
}
