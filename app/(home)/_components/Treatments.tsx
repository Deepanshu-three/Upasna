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
    <div className="container mx-auto px-4 py-20">
      <div className="text-center space-y-6">
        <h1 className="text-3xl font-extrabold text-blue-600">Our Treatments</h1>
        <h2 className="text-5xl font-bold">
          Our Homeopathy Clinics can cure 100+ Diseases Naturally
        </h2>
        <p className="text-gray-700 mx-auto text-xl">
          At Afecto Homeopathy Clinics, we specialize in various homeopathic
          treatments for Allergies, Bed-Wetting, Eczema, Female Disorders,
          Hormonal Imbalance, Lifestyle Disorders, PCOD, Pediatrics, Skin/Hair
          Problems, Thyroid, and many more. Get your personalized homeopathic
          treatment today from the Afecto homeopathic clinic. Our remedies are
          safe, non-toxic, and free from side effects. Our experienced
          homeopathic doctors provide personalized treatments to address your
          unique health concerns.
        </p>
      </div>

      {/* Disease Cards Section */}
      <div className="mt-8 flex justify-center gap-6 cursor-pointer">
        {disease.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-4 w-48 text-center flex flex-col items-center transition-transform hover:scale-105"
          >
            <img
              src={item.src}
              alt={item.name}
              className="w-20 h-20 object-contain mb-3"
            />
            <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Treatments;
