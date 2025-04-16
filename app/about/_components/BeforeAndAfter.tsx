import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const treatmentResults = [
  { before: "/results/before1.png", after: "/results/after1.png", condition: "Skin Allergy" },
  { before: "/results/before2.png", after: "/results/after2.png", condition: "Hair Loss" },
  { before: "/results/before3.png", after: "/results/after3.png", condition: "Psoriasis" },
  { before: "/results/before4.png", after: "/results/after4.png", condition: "Eczema" },
];

const BeforeAfter = () => {
  return (
    <section
      className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-r from-blue-50 via-gray-100 to-white w-full mx-auto max-w-7xl text-center space-y-10 rounded-xl border"
    >
      {/* SEO Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-blue-600">Before & After Treatment Results</h2>

      {/* Description */}
      <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
        See the real results from our trusted homeopathic treatments. Our natural healing methods have
        transformed the lives of <span className="font-semibold text-blue-600">5+ lakh individuals</span> across India and abroad.
      </p>

      {/* Grid of Treatment Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {treatmentResults.map((result, index) => (
          <article
            key={index}
            className="p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{result.condition}</h3>
            <div className="flex gap-4 justify-center">
              <figure className="w-1/2">
                <Image
                  src={result.before}
                  alt={`${result.condition} - Before`}
                  width={200}
                  height={200}
                  className="rounded-md shadow-sm object-cover"
                />
                <figcaption className="text-sm text-gray-500 mt-1">Before</figcaption>
              </figure>

              <figure className="w-1/2">
                <Image
                  src={result.after}
                  alt={`${result.condition} - After`}
                  width={200}
                  height={200}
                  className="rounded-md shadow-sm object-cover"
                />
                <figcaption className="text-sm text-gray-500 mt-1">After</figcaption>
              </figure>
            </div>
          </article>
        ))}
      </div>

      {/* CTA Button */}
      <Button
        variant="outline"
        className="px-6 py-3 text-base sm:text-lg font-semibold border-blue-500 hover:bg-blue-50 transition-colors"
      >
        See All Treatment Results
      </Button>
    </section>
  );
};

export default BeforeAfter;
