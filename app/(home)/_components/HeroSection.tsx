import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-20 py-10 min-h-[90vh] gap-8 md:gap-16">
      
      {/* Left Section */}
      <div className="flex-1 text-center md:text-left space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
          Welcome to <span className="text-blue-600">Upasana Homoe</span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-700 font-semibold">
          Holistic Healing Through Homeopathy
        </p>

        <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
          Experience the power of natural medicine. Homeopathy provides gentle, effective, 
          and long-lasting healing by stimulating your body's natural defenses.
        </p>

        <div>
          <Button className="mt-4 px-6 sm:px-8 py-3 sm:py-4 text-white bg-blue-600 hover:bg-blue-700 transition text-base sm:text-lg rounded-lg shadow-md">
            Book Appointment
          </Button>
        </div>
      </div>

      {/* Right Section - Hero Image */}
      <div className="flex-1 flex justify-center">
        <Image
          src="/home/hero.webp"
          alt="Homeopathy healing illustration"
          width={600}
          height={450}
          className="w-full max-w-xs sm:max-w-md md:max-w-lg h-auto"
        />
      </div>
    </div>
  );
};

export default HeroSection;
