import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between  md:px-20 py-8 min-h-[90vh]">
      {/* Left Section */}
      <div className="flex-1 text-center md:text-left space-y-6">
        <h1 className="text-6xl font-bold text-gray-900 leading-tight">
          Welcome to <span className="text-blue-600">Upasana Homoe</span>
        </h1>
        <p className="text-2xl text-gray-700 font-semibold">
          Holistic Healing Through Homeopathy
        </p>
        <p className="text-lg text-gray-600 max-w-xl">
          Experience the power of natural medicine. Homeopathy provides gentle, effective, 
          and long-lasting healing by stimulating your body's natural defenses.
        </p>
        <Button className="mt-6 px-8 py-4 text-white bg-blue-600 hover:bg-blue-700 transition text-lg rounded-lg shadow-md">
          Book Appointment
        </Button>
      </div>

      {/* Right Section - Hero Image */}
      <div className="flex-1 flex justify-center mt-6 md:mt-0">
        <Image
          src="/home/hero.webp"
          alt="Homeopathy healing illustration"
          width={600} 
          height={450}
        />
      </div>
    </div>
  );
};

export default HeroSection;
