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
    <div className="flex flex-col items-center justify-center space-y-10 my-20">
      <h1 className="font-extrabold text-3xl mx-auto text-blue-600">
        Our Testimonials
      </h1>

      <div className="w-full max-w-4xl">
        <Carousel className="w-full">
          <CarouselContent className="-ml-1 flex justify-center">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3 flex justify-center"
              >
                <div className="p-1">
                  <Card className="w-64">
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-2xl font-semibold">
                        {index + 1}
                      </span>
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
