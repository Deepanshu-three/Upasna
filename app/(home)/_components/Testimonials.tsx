import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 px-4 sm:px-6 md:px-10 py-12">
      {/* Title */}
      <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl text-center text-blue-600">
        Our Testimonials
      </h1>

      {/* Carousel */}
      <div className="w-full max-w-6xl">
        <Carousel className="w-full">
          <CarouselContent className="-ml-1 flex justify-center">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="pl-1 sm:basis-3/4 md:basis-1/2 lg:basis-1/3 flex justify-center"
              >
                <div className="p-2 w-full max-w-xs">
                  <Card className="w-full h-full">
                    <CardContent className="flex flex-col items-center justify-center p-6 space-y-4">
                      <span className="text-xl sm:text-2xl font-semibold">
                        Testimonial #{index + 1}
                      </span>
                      <p className="text-sm text-gray-600 text-center">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et.”
                      </p>
                      <p className="text-xs text-gray-500">– Patient Name</p>
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

export default Testimonials;
