import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <div className="bg-white shadow-sm">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-4">
        {/* Logo */}
        <div>
          <Link href="/">
            <h1 className="text-2xl font-bold cursor-pointer">
              Upasna<span className="text-[#F83002]">Homoeo</span>
            </h1>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <ul className="flex font-medium items-center gap-5">
            <li>
              <Link href="/" className="hover:text-[#F83002]">Home</Link>
            </li>

            {/* About Dropdown using ShadCN */}
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 hover:text-[#F83002]">
                  About <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuItem asChild>
                    <Link href="/about/why-homeopathy">Why Homeopathy</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/about/us">About Afecto Homeopathy®</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/about/leadership">Leadership</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/about/doctors">Our Doctors</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/about/doctor-videos">Doctor Videos</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/about/testimonials">Testimonials</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>

            <li>
              <Link href="/services" className="hover:text-[#F83002]">Services</Link>
            </li>
          </ul>

          {/* Book Appointment Button */}
          <Link href="/book-appointment">
            <Button variant="secondary">Book Appointment</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
