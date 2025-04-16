import { Button } from "@/components/ui/button";
import React from "react";

const disease = [
  { name: "Asthma", src: "/treatment/lungs.png" },
  { name: "Arthritis", src: "/treatment/arthritis.png" },
  { name: "Hair Fall", src: "/treatment/hair.png" },
  { name: "High/Low Blood Pressure", src: "/treatment/arm.png" },
  { name: "Infertility", src: "/treatment/infertility.png" },
  { name: "Liver Diseases", src: "/treatment/liver.png" },
  { name: "Migraine", src: "/treatment/headache.png" },
  { name: "PCOD", src: "/treatment/woman.png" },
  { name: "Sciatica", src: "/treatment/pain.png" },
  { name: "Skin Diseases", src: "/treatment/dermatology.png" },
];

const Treatments = () => {
  return (
    <section
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 flex flex-col justify-center items-center border bg-gradient-to-r from-blue-50 via-gray-100 to-white rounded-xl m-10"
    >
      {/* SEO Header */}
      <header className="text-center space-y-4">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-blue-600">
          Treatments at Upasna Homoeo Clinic – Ajmer, Rajasthan
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Natural Homeopathy Solutions for 100+ Diseases
        </h2>
        <p className="text-gray-700 mx-auto text-base sm:text-lg md:text-xl max-w-4xl">
          Upasna Homoeo Clinic in Ajmer, Rajasthan, offers expert homeopathic care
          for Asthma, Arthritis, PCOD, Migraine, Liver Conditions, and many other chronic and lifestyle-related diseases.
          Our remedies are non-toxic, safe, and tailored to your unique health needs.
        </p>
      </header>

      {/* Treatments List */}
      <div className="flex flex-wrap justify-center gap-6">
        {disease.map((item, index) => (
          <article
            key={index}
            className="bg-white shadow-md rounded-xl p-4 w-36 sm:w-40 md:w-44 lg:w-48 text-center flex flex-col items-center transition-transform hover:scale-105"
          >
            <img
              src={item.src}
              alt={`Homeopathy treatment for ${item.name} at Upasna Homoeo Clinic Ajmer`}
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-3"
              loading="lazy"
            />
            <h3 className="text-sm sm:text-base font-semibold text-gray-800">
              {item.name}
            </h3>
          </article>
        ))}
      </div>

      {/* CTA Button */}
      <Button variant="outline" className="cursor-pointer" aria-label="View more treatments at Upasna Homoeo Clinic in Ajmer">
        More Available Treatments
      </Button>
    </section>
  );
};

export default Treatments;
