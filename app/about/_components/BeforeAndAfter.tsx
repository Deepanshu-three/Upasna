import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const treatmentResults = [
  { before: "/beforeAndAfter/Psoriasis_Before_1.JPG", after: "/beforeAndAfter/Psoriasis_After_1.JPG", condition: "Psoriasis" },
  { before: "/beforeAndAfter/Psoriasis_Before_2.jpeg", after: "/beforeAndAfter/Psoriasis_After_2.JPG", condition: "Psoriasis" },
  { before: "/beforeAndAfter/Sebaceous_Before.JPG", after: "/beforeAndAfter/Sebaceous_acne.JPG", condition: "Sebaceous acne" },
];

const BeforeAfter = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-16 w-full mx-auto max-w-7xl text-center space-y-10 rounded-xl">
      {/* SEO Heading */}
      <h2 className="text-3xl sm:text-4xl font-medium text-[#0C6170]">Before & After Treatment Results</h2>

      {/* Description */}
      <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
        See the real results from our trusted homeopathic treatments. Our natural healing methods have
        transformed the lives of <span className="font-semibold text-blue-600">10+ thousand individuals</span> across India and abroad.
      </p>

      {/* Grid of Treatment Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {treatmentResults.map((result, index) => (
          <article
            key={index}
            className="p-4 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 bg-white"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">{result.condition}</h3>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <figure className="w-full sm:w-1/2">
                <div className="relative w-full aspect-[3/4] rounded-md overflow-hidden shadow-sm border">
                  <Image
                    src={result.before}
                    alt={`${result.condition} - Before`}
                    fill
                    className="object-cover"
                  />
                </div>
                <figcaption className="text-sm text-gray-500 mt-2 text-center">Before</figcaption>
              </figure>

              <figure className="w-full sm:w-1/2">
                <div className="relative w-full aspect-[3/4] rounded-md overflow-hidden shadow-sm border">
                  <Image
                    src={result.after}
                    alt={`${result.condition} - After`}
                    fill
                    className="object-cover"
                  />
                </div>
                <figcaption className="text-sm text-gray-500 mt-2 text-center">After</figcaption>
              </figure>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BeforeAfter;
