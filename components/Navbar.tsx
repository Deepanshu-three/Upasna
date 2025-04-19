"use client";

import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    ChevronDown,
    User,
    LogOut,

    Menu,
    X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type navlinkType = {
    link: string;
    name: string;
};

const navlinks: navlinkType[] = [
    {
        link: "/",
        name: "Home",
    },
    {
        link: "/appointment",
        name: "Book Appoinment",
    },
    {
        link: "/contact",
        name: "Contact Us",
    },
    {
        link: "/faqs",
        name: "FAQs",
    },
    {
        link: "/about",
        name: "About",
    },
];

const Navbar = () => {
    const { data: session } = useSession();
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    console.log("Session: ", session);

    const profileImage = session?.user?.image || "default-avatar.jpg";

    return (
        <nav className="fixed top0 left-0 right-0 bg-white/90 backdrop:blur-sm z-50 border-b border-gray-100 shadow-sm">
            <div className="w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16">
                {/* logo */}
                <div className="flex items-center gap-1 cursor-pointer">
                    <div className="font-bold text-2xl text-[#0C6170] ">
                        Upasana
                    </div>
                    <div className="font-medium text-2xl text-[#37BEB0]">
                        Homoeo
                    </div>
                </div>

                {/* mobile menu button */}

                <button
                    className="lg:hidden p-2 cursor-pointer"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? (
                        <X className="w-6 h-6" />
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}
                </button>

                {/* desktop nav */}
                <div className="hidden lg:flex items-center gap-10">
                    {navlinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.link}
                            className={`font-bold text-sm relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all ${
                                pathname === link.link
                                    ? "text-blue-600 after:w-full"
                                    : "text-gray-600 hover:text-gray-900"
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* login and profile button */}
                <div className="hidden lg:block">
                    {!session?.user ? (
                        <Link href={"/sign-in"}>
                            <Button className="bg-blue-500">Sign In</Button>
                        </Link>
                    ) : (
                        <div className="flex items-center justify-center">
                            {session?.user.isAdmin && (
                                <div className="flex items-center gap-4 mr-4">
                                    <Link href={"/dashboard"}>
                                        <Button className="cursor-pointer">
                                            Dashboard
                                        </Button>
                                    </Link>
                                    <Link href={"/popupcontact"}>
                                        <Button className="cursor-pointer">
                                           Popup contact
                                        </Button>
                                    </Link>
                                </div>
                            )}
                            <DropdownMenu>
                                <DropdownMenuTrigger className="flex items-center gap-1 px-4 py-2 rounded-lg cursor-pointer transition-all duration-200">
                                    <img
                                        src={
                                            profileImage &&
                                            profileImage.trim() !== ""
                                                ? profileImage
                                                : "/default-avatar.jpg"
                                        }
                                        alt=""
                                        className="w-10 h-10 rounded-full"
                                    />
                                    <ChevronDown className="w-4 h-4" />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56">
                                    <DropdownMenuItem asChild>
                                        <Link
                                            href="/myappointments"
                                            className="flex items-center px-4 py-2 rounded-md hover:bg-blue-200/60"
                                        >
                                            <User className="mr-2 w-5 h-5" />
                                            My Appointments
                                        </Link>
                                    </DropdownMenuItem>

                                    <DropdownMenuItem
                                        onClick={() => {
                                            signOut({ callbackUrl: "/" }).then(
                                                () => {
                                                    window.location.href = "/";
                                                }
                                            );
                                        }}
                                        className="flex items-center text-red-500 hover:text-white hover:bg-red-500 px-4 py-2 rounded-md cursor-pointer"
                                    >
                                        <LogOut className="mr-2 w-5 h-5" />
                                        Logout
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    )}
                </div>
            </div>

            {/* mobile responsive */}
            {/* mobile responsive */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-18 md:top-24 left-0 w-4/5 h-full bg-gray-100 text-blue-900 px-6 py-6 z-50 overflow-y-auto rounded-r-xl shadow-xl backdrop-blur-md"
                    >
                        {/* Profile Section */}
                        {session?.user && (
                            <div className="flex items-center space-x-4 mb-8">
                                <img
                                    src={
                                        session.user.image ||
                                        "/default-avatar.jpg"
                                    }
                                    alt="Profile"
                                    className="w-16 h-16 rounded-full border-2 border-blue-300 shadow"
                                />
                                <div>
                                    <p className="font-bold text-xl">
                                        {session.user.name}
                                    </p>
                                    <p className="text-sm text-blue-600">
                                        {session.user.email}
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Mobile Menu Items */}
                        <ul className="space-y-6 text-2xl font-semibold mt-2">
                            {navlinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.link}
                                        className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 ${
                                            pathname === link.link
                                                ? "text-blue-600 bg-blue-100"
                                                : "text-gray-700 hover:text-blue-600 hover:bg-blue-100"
                                        }`}
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}

                            <li>
                                {session?.user ? (
                                    <>
                                        {session?.user.isAdmin && (
                                            <>
                                                <Link
                                                    href="/dashboard"
                                                    className={`flex mb-3 items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 ${
                                                        pathname ===
                                                        "/dashboard"
                                                            ? "text-blue-600 bg-blue-100"
                                                            : "text-gray-700 hover:text-blue-600 hover:bg-blue-100"
                                                    }`}
                                                    onClick={() =>
                                                        setMenuOpen(false)
                                                    }
                                                >
                                                    Dashboard
                                                </Link>
                                                <Link
                                                    href="/popupcontact"
                                                    className={`flex mb-3 items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 ${
                                                        pathname ===
                                                        "/dashboard"
                                                            ? "text-blue-600 bg-blue-100"
                                                            : "text-gray-700 hover:text-blue-600 hover:bg-blue-100"
                                                    }`}
                                                    onClick={() =>
                                                        setMenuOpen(false)
                                                    }
                                                >
                                                    Popup Contact
                                                </Link>
                                            </>
                                        )}
                                        <Link
                                            href="/myappointments"
                                            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 ${
                                                pathname === "/myappointments"
                                                    ? "text-blue-600 bg-blue-100"
                                                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-100"
                                            }`}
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            My appointments
                                        </Link>
                                        <Link
                                            href="/api/auth/signout"
                                            className="flex items-center gap-3 mt-3 px-4 py-2 rounded-lg text-red-500 hover:bg-red-700 hover:text-white transition-all duration-200"
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            Logout
                                        </Link>
                                    </>
                                ) : (
                                    <Link href="/sign-in">
                                        <Button
                                            className="w-full bg-blue-700 hover:bg-blue-800 text-white mt-4"
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            Sign-In
                                        </Button>
                                    </Link>
                                )}
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
