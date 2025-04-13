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
    <div className="p-10 space-y-8 text-center border rounded-xl bg-gradient-to-r from-blue-50 via-gray-100 to-white m-10 w-full mx-auto">
      {/* Section Title */}
      <h1 className="text-4xl font-bold text-blue-600">Before And After</h1>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto">
        Experience the remarkable treatment results achieved at our best homeopathic clinic in India. 
        Discover how our personalized, natural therapies have empowered more than 
        <span className="font-semibold text-blue-600"> 5 Lakh individuals </span> 
        to reclaim their health and embrace a life of balance.
      </p>

      {/* Before & After Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {treatmentResults.map((result, index) => (
          <div key={index} className="space-y-3 shadow-md p-4 rounded-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">{result.condition}</h3>
            <div className="flex gap-3">
              <div className="w-1/2">
                <Image src={result.before} alt="Before Treatment" width={200} height={200} className="rounded-md shadow" />
                <p className="text-sm text-gray-500 mt-2">Before</p>
              </div>
              <div className="w-1/2">
                <Image src={result.after} alt="After Treatment" width={200} height={200} className="rounded-md shadow" />
                <p className="text-sm text-gray-500 mt-2">After</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <Button variant={"outline"} className="cursor-pointer px-6 py-3 rounded-md text-lg font-semibold">
        See All Treatment Results
      </Button>
    </div>
  );
};

export default BeforeAfter;
