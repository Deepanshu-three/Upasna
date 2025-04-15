"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay"
import React from "react";

const HeroSection = () => {
  
  return (
    <div className="flex flex-col md:flex-row items-center justify-center justify-between px-4 sm:px-8 md:px-20 py-10 min-h-[90vh] gap-8 md:gap-16">
      
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
            Book Appointment Online
          </Button>
           <span className="mx-2">OR</span>
          <Button className="mt-4 px-6 sm:px-8 py-3 sm:py-4 text-white bg-blue-600 hover:bg-blue-700 transition text-base sm:text-lg rounded-lg shadow-md">
            Call
          </Button>
        </div>
      </div>

      {/* Right Section - Hero Image */}
      <div className="flex-1 flex justify-center">
      <Carousel
        plugins={[Autoplay({delay: 2000})]}
      className="w-full max-w-l">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
      </div>
    </div>
  );
};

export default HeroSection;
