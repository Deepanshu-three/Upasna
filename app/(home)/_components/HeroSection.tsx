"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

const HeroSection = () => {
  return (
    <section
      className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-20 py-10 min-h-[90vh] gap-8 md:gap-16"
      aria-label="Upasna Homoeo Hero Section"
    >
      {/* Left Section */}
      <div className="flex-1 text-center md:text-left space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
          Welcome to <span className="text-blue-600">Upasna Homoeo</span>
        </h1>

        <h2 className="text-xl sm:text-2xl text-gray-700 font-semibold">
          Trusted Homeopathy Clinic in Ajmer, Rajasthan
        </h2>

        <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
          Experience holistic healing with natural remedies. At Upasna Homoeo, we
          provide gentle, effective, and long-lasting homeopathic treatments that
          stimulate your body's natural defenses—without side effects.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button
            className="px-6 sm:px-8 py-3 sm:py-4 text-white bg-blue-600 hover:bg-blue-700 transition text-base sm:text-lg rounded-lg shadow-md"
            aria-label="Book online appointment with Upasna Homoeo in Ajmer"
          >
            Book Appointment Online
          </Button>
          <span className="hidden sm:inline">OR</span>
          <Button
            className="px-6 sm:px-8 py-3 sm:py-4 text-white bg-blue-600 hover:bg-blue-700 transition text-base sm:text-lg rounded-lg shadow-md"
            aria-label="Call Upasna Homoeo Clinic"
          >
            Call
          </Button>
        </div>
      </div>

      {/* Right Section - Hero Image Carousel */}
      <div className="flex-1 flex justify-center">
        <Carousel plugins={[Autoplay({ delay: 2000 })]} className="w-full max-w-lg">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <Image
                        src={`/carousel/clinic${index + 1}.jpg`}
                        alt={`Upasna Homoeo Clinic - Image ${index + 1}`}
                        width={300}
                        height={300}
                        className="rounded-md object-cover"
                      />
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
    </section>
  );
};

export default HeroSection;
