"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
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
    Home,
    Calendar,
    Menu,
    X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
    const { data: session } = useSession();
    const [menuOpen, setMenuOpen] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(false);

    return (
        <div className="bg-white shadow-sm">
            <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4">
                {/* Logo */}
                <Link href="/">
                    <h1 className="text-2xl font-bold cursor-pointer">
                        Upasna<span className="text-[#F83002]">Homoeo</span>
                    </h1>
                </Link>

                {/* Mobile Toggle Button - Always Visible */}
                <div className="md:hidden">
                    <button
                        className="text-black"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <ul className="flex font-medium items-center gap-5">
                        <li>
                            <Link
                                href="/"
                                className="flex font-bold text-xl items-center gap-1 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-200 hover:text-black transition-all duration-200"
                            >
                                 Home
                            </Link>
                        </li>
                        <li>
                            <DropdownMenu>
                                <DropdownMenuTrigger className="flex text-xl font-bold items-center gap-1 cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-200 hover:text-black transition-all duration-200">
                                    About
                                    
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56">
                                    {[
                                        [
                                            "Why Homeopathy",
                                            "/about/why-homeopathy",
                                        ],
                                        ["About Us", "/about/us"],
                                        ["Leadership", "/about/leadership"],
                                        ["Our Doctors", "/about/doctors"],
                                        [
                                            "Doctor Videos",
                                            "/about/doctor-videos",
                                        ],
                                        ["Testimonials", "/about/testimonials"],
                                    ].map(([label, href]) => (
                                        <DropdownMenuItem asChild key={href}>
                                            <Link
                                                href={href}
                                                className="block hover:bg-blue-200/60 rounded-md px-4 py-2 cursor-pointer"
                                            >
                                                {label}
                                            </Link>
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                        <li>
                            <Link
                                href="/services"
                                className="flex font-bold cursor-pointer text-xl items-center gap-1 px-4 py-2 rounded-lg hover:bg-gray-200 hover:text-black transition-all duration-200"
                            >
                               Services
                            </Link>
                        </li>
                    </ul>

                    {/* Auth Dropdown */}
                    {session?.user ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger className="flex items-center gap-1 px-4 py-2 rounded-lg hover:bg-blue-200/60 hover:text-white transition-all duration-200">
                                <img
                                    src={
                                        session.user.image ||
                                        "/default-avatar.jpg"
                                    }
                                    alt="Profile"
                                    className="w-10 h-10 rounded-full"
                                />
                                <ChevronDown className="w-4 h-4" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                <DropdownMenuItem asChild>
                                    <Link
                                        href="/profile"
                                        className="block hover:bg-blue-200/60 rounded-md px-4 py-2"
                                    >
                                        <User className="mr-2 w-5 h-5" />{" "}
                                        Profile
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link
                                        href="/api/auth/signout"
                                        className="block hover:bg-blue-200/60 rounded-md px-4 py-2"
                                    >
                                        <LogOut className="mr-2 w-5 h-5" />{" "}
                                        Logout
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <Link href="/api/auth/signin">
                            <Button className="text-white font-bold bg-blue-600 hover:bg-blue-700 transition-all duration-200 px-6 py-3">
                                Sign-In
                            </Button>
                        </Link>
                    )}
                </div>
            </div>

            {/* Mobile Menu */}
            <div className="-mt-10 md:hidden">
                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            key="mobile-menu"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.3 }}
                            className="fixed top-18 left-0 w-4/5 h-full bg-gray-100 text-blue-900 px-6 py-6 z-50 overflow-y-auto rounded-r-xl shadow-xl backdrop-blur-md"
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
                                <li>
                                    <Link
                                        href="/"
                                        className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-200/60 transition-all duration-200"
                                        onClick={() => setMenuOpen(false)} // Close menu after click
                                    >
                                        Home
                                    </Link>
                                </li>

                                <li>
                                    {/* Mobile About Dropdown */}
                                    <button
                                        className="flex items-center gap-3 px-4 py-2 rounded-lg w-full hover:bg-blue-200/60 transition-all duration-200"
                                        onClick={(e) => {
                                            e.stopPropagation(); // Prevent menu from closing when clicking the About dropdown
                                            setAboutOpen(!aboutOpen);
                                        }}
                                    >
                                        About{" "}
                                        <ChevronDown className="w-5 h-5" />
                                    </button>
                                    <AnimatePresence>
                                        {aboutOpen && (
                                            <motion.div
                                                initial={{
                                                    opacity: 0,
                                                    height: 0,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    height: "auto",
                                                }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="ml-6 mt-2 space-y-2 text-lg font-medium"
                                            >
                                                {[
                                                    [
                                                        "Why Homeopathy",
                                                        "/about/why-homeopathy",
                                                    ],
                                                    ["About Us", "/about/us"],
                                                    [
                                                        "Leadership",
                                                        "/about/leadership",
                                                    ],
                                                    [
                                                        "Our Doctors",
                                                        "/about/doctors",
                                                    ],
                                                    [
                                                        "Doctor Videos",
                                                        "/about/doctor-videos",
                                                    ],
                                                    [
                                                        "Testimonials",
                                                        "/about/testimonials",
                                                    ],
                                                ].map(([label, href]) => (
                                                    <Link
                                                        key={href}
                                                        href={href}
                                                        className="block px-3 py-1 rounded-md hover:bg-blue-200/60 transition"
                                                        onClick={() =>
                                                            setMenuOpen(false)
                                                        } // Close menu after click on an item
                                                    >
                                                        {label}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </li>

                                <li>
                                    <Link
                                        href="/services"
                                        className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-200/60 transition-all duration-200"
                                        onClick={() => setMenuOpen(false)} // Close menu after click
                                    >
                                        Services
                                    </Link>
                                </li>

                                <li>
                                    {session?.user ? (
                                        <>
                                            <Link
                                                href="/profile"
                                                className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-200/60 transition-all duration-200"
                                                onClick={() =>
                                                    setMenuOpen(false)
                                                } // Close menu after click
                                            >
                                                Profile
                                            </Link>
                                            <Link
                                                href="/api/auth/signout"
                                                className="flex items-center gap-3 px-4 py-2 rounded-lg text-red-500 hover:bg-red-700 hover:text-white transition-all duration-200"
                                                onClick={() =>
                                                    setMenuOpen(false)
                                                } // Close menu after click
                                            >
                                                Logout
                                            </Link>
                                        </>
                                    ) : (
                                        <Link href="/api/auth/signin">
                                            <Button
                                                className="w-full bg-blue-700 hover:bg-blue-800 text-white mt-4"
                                                onClick={() =>
                                                    setMenuOpen(false)
                                                } // Close menu after click
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
            </div>
        </div>
    );
};

export default Navbar;
