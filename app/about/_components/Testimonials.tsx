import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

// Sample testimonials for Upasana Homoeo
const testimonials = [
  {
    name: "Rajesh K.",
    feedback:
      "After visiting Upasana Homoeo, I noticed significant improvement in my chronic migraine issues. The doctor took the time to understand my symptoms and provided an effective, natural treatment plan. I feel much better now!",
  },
  {
    name: "Anjali S.",
    feedback:
      "I was struggling with digestive issues for months, and Upasana Homoeo's treatment has been a game-changer. Their approach is holistic, and the staff is friendly and supportive throughout the process.",
  },
  {
    name: "Vikram P.",
    feedback:
      "Upasana Homoeo has helped me with my respiratory issues, which have been persistent for years. Their personalized treatment approach and professional care have brought me significant relief.",
  },
  {
    name: "Priya D.",
    feedback:
      "I highly recommend Upasana Homoeo for anyone looking for effective homeopathic treatments. The staff is caring, and the treatments are gentle yet powerful. It truly feels like a healing environment.",
  },
  {
    name: "Sandeep T.",
    feedback:
      "As someone who has tried multiple treatments, I can confidently say that Upasana Homoeo has been the most effective. The treatments have improved my overall well-being, and the doctors are highly knowledgeable.",
  },
];

const Testimonials = () => {
  return (
    <section className="px-4 sm:px-6 md:px-10 py-16 space-y-10">
      {/* Section Heading */}
      <header className="text-center space-y-4">
        <h2 className="text-3xl sm:text-4xl font-medium text-[#0C6170]">
          What Our Patients Say
        </h2>
        <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
          Read the heartfelt feedback from our patients and discover how Upasana Homoeo has helped them achieve health and balance.
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
