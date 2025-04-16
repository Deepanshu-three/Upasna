import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// ✅ Unique, real testimonials (removed duplicate)
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
];

const Reviews = () => {
  return (
    <section className="px-4 sm:px-6 md:px-10 py-16 space-y-10 max-w-7xl mx-auto">
      {/* Section Heading */}
      <header className="text-center space-y-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-600">
          Why Patients Prefer Upasana Homeopathy® Clinic?
        </h2>
        <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto">
          See what our happy patients say about their healing journey at our trusted homeopathy clinic in India.
        </p>
      </header>

      {/* Testimonials */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {testimonials.map((t, index) => (
          <Card
            key={index}
            className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition"
          >
            <CardContent className="p-5 space-y-3">
              {/* Logo + Stars */}
              <div className="flex justify-between items-center">
                <Image
                  src="/google-logo.png"
                  alt="Google review"
                  width={20}
                  height={20}
                  className="object-contain"
                />
                <div className="flex text-yellow-500">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" stroke="none" />
                  ))}
                </div>
              </div>

              {/* Reviewer Info */}
              <h3 className="text-sm font-semibold text-gray-900">{t.name}</h3>
              <time className="text-xs text-gray-500">{t.time}</time>
              <p className="text-sm text-gray-700">{t.feedback}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
