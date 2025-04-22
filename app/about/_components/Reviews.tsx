import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// ✅ Unique, real testimonials (removed duplicate)
const testimonials = [
  {
    name: "Kshitiz Singh",
    time: "5 months ago",
    rating: 5,
    feedback: "Best Homopethic dr in ajmer cured my dengue in 2 days with just 40k platelets remaining the best for all provides treatment with the medicinal and natural both ways and is always helpful and very kind hearted to the patient",
    image: "/review/unnamed.png"
  },
  {
    name: "Sonali Sen",
    time: "2 years ago",
    rating: 5,
    feedback:
      "Dr. Alok sir is very good and very smartly talking with us the treatment is also very nice ✌️",

    image: "/review/default-avatar.jpg"
  },
  {
    name: "ANUJ GARG",
    time: "a year ago",
    rating: 5,
    feedback:
      "Polite, intelligent,helpful.",
    image: "/review/images.png"
    },
  {
    name: "parul mathur",
    time: "2 years ago",
    rating: 5,
    feedback: "HE IS THE BEST DOCTOR",
    image: "/review/p.webp"
  },
  
];

const Reviews = () => {
  return (
    <section className="px-4 sm:px-6 md:px-10 py-16 space-y-10 max-w-7xl mx-auto">
      {/* Section Heading */}
      <header className="text-center space-y-4">
        <h2 className="text-3xl sm:text-4xl font-medium text-[#0C6170]">
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
                  src={t.image || ""}
                  alt="Google review"
                  width={20}
                  height={20}
                  className="object-contain rounded-full w-10 h-10"
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
