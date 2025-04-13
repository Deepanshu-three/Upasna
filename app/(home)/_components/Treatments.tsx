import { Button } from "@/components/ui/button";
import React from "react";

const disease = [
  {
    name: "Autism",
    src: "/home/autism.png",
  },
  {
    name: "Hair Fall",
    src: "/home/hair.png",
  },
  {
    name: "Asthma",
    src: "/home/lungs.png",
  },
  {
    name: "Diabetes",
    src: "/home/sugar-blood-level.png",
  },
  {
    name: "Thyroid",
    src: "/home/thyroid.png",
  },
];

const Treatments = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 flex flex-col justify-center items-center border bg-gradient-to-r from-blue-50 via-gray-100 to-white rounded-xl m-10">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-blue-600">Our Treatments</h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Our Homeopathy Clinics can cure 100+ Diseases Naturally
        </h2>
        <p className="text-gray-700 mx-auto text-base sm:text-lg md:text-xl max-w-4xl">
          At Afecto Homeopathy Clinics, we specialize in various homeopathic treatments for Allergies,
          Bed-Wetting, Eczema, Female Disorders, Hormonal Imbalance, Lifestyle Disorders, PCOD, Pediatrics,
          Skin/Hair Problems, Thyroid, and many more. Our remedies are safe, non-toxic, and free from side
          effects. Get your personalized homeopathic treatment today.
        </p>
      </div>

      {/* Disease Cards Section */}
      <div className="flex flex-wrap justify-center gap-6">
        {disease.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-4 w-36 sm:w-40 md:w-44 lg:w-48 text-center flex flex-col items-center transition-transform hover:scale-105"
          >
            <img
              src={item.src}
              alt={item.name}
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-3"
            />
            <h3 className="text-sm sm:text-base font-semibold text-gray-800">{item.name}</h3>
          </div>
        ))}
      </div>

      <Button variant={"outline"} className="cursor-pointer">More Available Treatments</Button>
    </div>
  );
};

export default Treatments;
