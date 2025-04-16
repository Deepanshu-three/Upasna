import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

// Sample testimonials for illustration; replace with dynamic data
const testimonials = [
  {
    name: "Patient 1",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et. Mauris posuere ultricies.",
  },
  {
    name: "Patient 2",
    feedback:
      "Afecto Homeopathy changed my life! The treatments were effective, and the staff was caring.",
  },
  {
    name: "Patient 3",
    feedback:
      "I felt much better after treatment, and the doctor's approach was highly professional and empathetic.",
  },
  {
    name: "Patient 4",
    feedback:
      "My chronic pain is now under control, and I can't thank Afecto Homeopathy enough!",
  },
  {
    name: "Patient 5",
    feedback:
      "Amazing results! I highly recommend Afecto for anyone looking for natural and effective treatments.",
  },
];

const Testimonials = () => {
  return (
    <section className="px-4 sm:px-6 md:px-10 py-16 space-y-10">
      {/* Section Heading */}
      <header className="text-center space-y-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-600">
          What Our Patients Say
        </h2>
        <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
          Read the heartfelt feedback from our patients and discover how Afecto Homeopathy has helped them achieve health and balance.
        </p>
      </header>

      {/* Carousel */}
      <div className="w-full max-w-6xl mx-auto">
        <Carousel className="w-full">
          <CarouselContent className="-ml-1 flex justify-center">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="pl-1 sm:basis-3/4 md:basis-1/2 lg:basis-1/3 flex justify-center"
              >
                <div className="p-2 w-full max-w-xs">
                  <Card className="w-full h-full">
                    <CardContent className="flex flex-col items-center justify-center p-6 space-y-4">
                      {/* Testimonial Text */}
                      <p className="text-sm text-gray-600 text-center italic">
                        “{testimonial.feedback}”
                      </p>
                      {/* Patient Name */}
                      <p className="text-xs text-gray-500">– {testimonial.name}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Carousel Navigation */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
            <CarouselPrevious className="text-blue-600 hover:text-blue-800" />
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
            <CarouselNext className="text-blue-600 hover:text-blue-800" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
