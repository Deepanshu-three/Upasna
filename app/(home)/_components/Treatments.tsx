"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const inptDisease = [
  { name: "Asthma", src: "/treatment/lungs.png" },//
  { name: "Arthritis", src: "/treatment/arthritis.png" },//
  { name: "Hair Fall", src: "/treatment/hair.png" },//
  { name: "Migraine", src: "/treatment/headache.png" },//
  { name: "PCOD", src: "/treatment/woman.png" },//
  { name: "Skin Diseases", src: "/treatment/dermatology.png" }, //
  { name: "Bronchitis", src: "/treatment/bronchitis.png" }, //
  { name: "Constipation", src: "/treatment/constipation.png" }, //
  { name: "Depression", src: "/treatment/depression.png" }, //
  { name: "Diabetes", src: "/treatment/diabetes.png" }, //
];

const allDisease = [
  ...inptDisease,
 
  { name: "Gout", src: "/treatment/gout.png" }, //
  { name: "Hypertension", src: "/treatment/hypertension.png" },//
  { name: "Insomnia", src: "/treatment/insomnia.png" }, //

  //extra added
  {name: "vitiligo", src: "/treatment/vitiligo.png"},
  {name: "Sexual Troubles", src: "/treatment/sexual_troubles.png"},
  {name: "anxiety", src: "/treatment/anxiety.png"},
  {name: "Thyroid", src: "/treatment/thyroid.png"},
  {name: "weight loss", src: "/treatment/weight_loss.png"},
  {name: "sinusitis", src: "/treatment/sinusitis.png"},
  {name: "allergic rhinitis", src: "/treatment/allergic_rhinitis.png"},
  {name: "tonsillitis", src: "/treatment/tonsillitis.png"},
  {name: "cold and flu", src: "/treatment/cold_and_flu.png"},
  {name: "warts", src: "/treatment/warts.png"},
  {name: "acne and pimple", src: "/treatment/acne_and_pimple.png"},
  {name: "adhd", src: "/treatment/adhd.png"},
  {name: "gallstones", src: "/treatment/gallstones.png"},
  {name: "kidney stones", src: "/treatment/kidney_stones.png"},
  {name: "menstrual problems", src: "treatment/manstrual.png"},
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const Treatments = () => {
  const [showAll, setShowAll] = React.useState(false);
  const router = useRouter();

  const diseasesToShow = showAll ? allDisease : inptDisease;

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  const handleCardClick = (name: string) => {
    const formattedName = name.toLowerCase().replace(/ /g, "-");
    router.push(`/treatments/${formattedName}`);
  };

  return (
    <div className="w-full flex justify-center items-center">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="container max-w-[1280px] px-4 sm:px-6 lg:px-8 py-16 space-y-12 flex flex-col justify-center items-center border border-[#0C6170] shadow-xl rounded-xl m-4 sm:m-8"
      >
        <header className="text-center space-y-8 px-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#37BEB0]">
            Treatments at Upasna Homoeo Clinic – Ajmer, Rajasthan
          </h1>
          <h2 className="text-[#0C6170] text-3xl sm:text-4xl md:text-5xl font-medium">
            Natural Homeopathy Solutions for 100+ Diseases
          </h2>
          <p className="text-gray-700 mx-auto text-base sm:text-lg md:text-xl max-w-4xl">
            Upasna Homoeo Clinic in Ajmer, Rajasthan, offers expert homeopathic care
            for Asthma, Arthritis, PCOD, Migraine, Liver Conditions, and many other
            chronic and lifestyle-related diseases. Our remedies are non-toxic, safe,
            and tailored to your unique health needs.
          </p>
        </header>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {diseasesToShow.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              onClick={() => handleCardClick(item.name)}
              className="cursor-pointer"
            >
              <article className="bg-white shadow-md rounded-xl p-4 sm:p-5 text-center flex flex-col items-center transition-transform hover:scale-105">
                <img
                  src={item.src}
                  alt={`Homeopathy treatment for ${item.name} at Upasna Homoeo Clinic Ajmer`}
                  className="w-14 h-14 sm:w-16 sm:h-16 object-contain mb-3"
                  loading="lazy"
                />
                <h3 className="text-sm sm:text-base font-semibold text-gray-800">
                  {item.name}
                </h3>
              </article>
            </motion.div>
          ))}
        </div>

        <Button
          variant="outline"
          className="cursor-pointer mt-6"
          aria-label="Toggle treatment visibility"
          onClick={toggleShowAll}
        >
          {showAll ? "Hide Treatments" : "More Available Treatments"}
        </Button>
      </motion.section>
    </div>
  );
};

export default Treatments;
