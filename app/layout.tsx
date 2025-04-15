import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="overflow-x-hidden">
            <SessionProvider>
                <body className="flex flex-col min-h-screen bg-gradient-to-r from-blue-200 to-cyan-200 overflow-x-hidden">
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
