import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Gauri Singh",
    time: "6 months ago",
    rating: 5,
    feedback: "I got my treatment for acne from Afecto clinic. The results were amazing.",
  },
  {
    name: "Pooja Burman",
    time: "7 months ago",
    rating: 5,
    feedback:
      "I had been suffering from severe back pain for months, then I took treatment from Afecto. The treatment plan was effective. Highly recommend Afecto Homeopathy!",
  },
  {
    name: "Archi Singhal",
    time: "7 months ago",
    rating: 4,
    feedback:
      "Doctor Sukriti and the staff were very kind. Only homeopathy helped, and Dr. Sukriti listened patiently with a smile. Highly recommended!",
  },
  {
    name: "Prince Parashar",
    time: "7 months ago",
    rating: 5,
    feedback: "I had been struggling with migraines for years. The doctors are experienced and caring.",
  },
  {
    name: "Devender Kumar",
    time: "1 year ago",
    rating: 5,
    feedback: "Best doctors and supporting staff.",
  },
  {
    name: "Parmeshwar Panwar",
    time: "1 year ago",
    rating: 5,
    feedback:
      "Good work! The doctors are cooperative, and the staff is very helpful. They helped me cure my chronic skin problem.",
  },
  {
    name: "Naresh Chand",
    time: "1 year ago",
    rating: 4,
    feedback:
      "Taking treatment for hydrocele from Dr. Mansha. My symptoms are much better. Thank you, Afecto family!",
  },
  {
    name: "Naresh Chand",
    time: "1 year ago",
    rating: 4,
    feedback:
      "Taking treatment for hydrocele from Dr. Mansha. My symptoms are much better. Thank you, Afecto family!",
  },
];

const Reviews = () => {
  return (
    <div className="px-4 sm:px-6 md:px-10 py-12 space-y-8">
      {/* Section Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 text-center">
        Why Patients Prefer Upasans Homeopathy® Clinic?
      </h1>
      <p className="text-sm sm:text-base md:text-lg text-gray-700 text-center max-w-2xl mx-auto">
        See what our happy patients say about their amazing changes at our best homeopathy clinic in India!
      </p>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="shadow-md border border-gray-200 hover:shadow-lg transition">
            <CardContent className="p-4 space-y-3">
              {/* Logo & Rating */}
              <div className="flex justify-between items-center">
                <Image src="/google-logo.png" alt="Google Reviews" width={20} height={20} />
                <div className="flex text-yellow-500">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" stroke="none" />
                  ))}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-base font-semibold text-gray-900">{testimonial.name}</h3>
              <p className="text-xs text-gray-500">{testimonial.time}</p>
              <p className="text-sm text-gray-700">{testimonial.feedback}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
