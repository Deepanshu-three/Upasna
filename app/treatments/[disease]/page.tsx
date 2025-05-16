"use client";

import { useParams } from "next/navigation";
import React from "react";

interface DiseaseDetails {
  description: string;
  treatment: string;
  medicines: string[];
  src: string;
}

const allDisease: Record<string, DiseaseDetails> = {
  "migraine": {
    description:
      "Migraine is a neurological condition often characterized by intense, throbbing headaches typically on one side of the head. It may also be accompanied by nausea, sensitivity to light and sound, and visual disturbances.",
    treatment:
      "Homeopathy offers a gentle and holistic approach by addressing the root cause and enhancing natural healing. It is safe, individualized, and effective for long-term relief.\n\n📌 Note: This condition should only be treated by a qualified homeopathic doctor. Self-medication is not recommended due to the complexity of symptoms and the need for personalized care.\n\nHomeopathy can significantly improve your overall health when guided by expert care.",
    medicines: [
      "Arsenicum Album – Asthma with restlessness and wheezing, worse at night.",
      "Spongia Tosta – Dry, barking cough with a feeling of suffocation.",
      "Ipecacuanha – Persistent cough with difficulty in expectoration and nausea."
    ],
    src: "/treatment/headache.png"
  },
  "eczema": {
    description:
      "Eczema is an inflammatory skin condition that causes itchy, red, dry, and cracked skin. It can be chronic or flare up periodically due to triggers like allergens, irritants, or stress.",
    treatment:
      "Homeopathy offers a gentle and holistic approach by addressing the root cause and enhancing natural healing. It is safe, individualized, and effective for long-term relief.\n\n🔹 Commonly Used Homeopathic Medicines:\n• Graphites – For dry, cracked skin with thick oozing discharge.\n• Sulphur – Itching worse with warmth and washing, with recurring flare-ups.\n• Rhus Toxicodendron – Eczema with intense itching, better with warm applications.\n\nHomeopathy can significantly improve your overall health when guided by expert care.",
    medicines: [
      "Graphites – For dry, cracked skin with thick oozing discharge.",
      "Sulphur – Itching worse with warmth and washing, with recurring flare-ups.",
      "Rhus Toxicodendron – Eczema with intense itching, better with warm applications."
    ],
    src: "/treatment/eczema.png"
  },
  "arthritis": {
    description:
      "Arthritis refers to inflammation of one or more joints, leading to pain, swelling, stiffness, and decreased range of motion. It can be caused by age, autoimmune conditions, or wear and tear.",
    treatment:
      "Homeopathy offers a gentle and holistic approach by addressing the root cause and enhancing natural healing. It is safe, individualized, and effective for long-term relief.\n\n🔹 Commonly Used Homeopathic Medicines:\n• Rhus Tox – For joint stiffness and pain worse in cold, better with motion.\n• Bryonia Alba – Pain aggravated by slightest movement, better with rest.\n• Ledum Palustre – For gout and joint pain starting in the lower limbs.\n\nHomeopathy can significantly improve your overall health when guided by expert care.",
    medicines: [
      "Rhus Tox – For joint stiffness and pain worse in cold, better with motion.",
      "Bryonia Alba – Pain aggravated by slightest movement, better with rest.",
      "Ledum Palustre – For gout and joint pain starting in the lower limbs."
    ],
    src: "/treatment/arthritis.png"
  },
  "asthma": {
    description:
      "Asthma is a chronic inflammatory disease of the airways, causing difficulty in breathing, coughing, chest tightness, and wheezing. It can be triggered by allergens, exercise, infections, or cold air.",
    treatment:
      "Homeopathy offers a personalized approach to treating asthma by focusing on the individual's symptoms and triggers. It aims to reduce the frequency and intensity of attacks over time.\n\n🔹 Commonly Used Homeopathic Medicines:\n• Arsenicum Album – Asthma with restlessness and wheezing, worse at night.\n• Spongia Tosta – Dry, barking cough with a feeling of suffocation.\n• Ipecacuanha – Persistent cough with difficulty in expectoration and nausea.\n\nAlways consult a qualified homeopath for proper evaluation and prescription.",
    medicines: [
      "Arsenicum Album – Asthma with restlessness and wheezing, worse at night.",
      "Spongia Tosta – Dry, barking cough with a feeling of suffocation.",
      "Ipecacuanha – Persistent cough with difficulty in expectoration and nausea."
    ],
    src: "/treatment/lungs.png"
  },
  "vitiligo": {
    "description": "Vitiligo is a common health concern. This placeholder will be replaced with a condition-specific explanation.",
    "treatment": "Homeopathy offers a gentle and holistic approach by addressing the root cause and enhancing natural healing. It is safe, individualized, and effective for long-term relief.\n\n📌 Note: This condition should only be treated by a qualified homeopathic doctor. Self-medication is not recommended due to the complexity of symptoms and the need for personalized care.\n\nHomeopathy can significantly improve your overall health when guided by expert care.",
    "medicines": [
      "Arsenicum Album – For patches of depigmentation, especially when they are irregular, and when the patient feels anxious and weak.",
      "Sepia – For vitiligo with pigmentation loss around the neck, hands, and feet, often accompanied by a feeling of exhaustion and irritability.",
      "Natrum Muriaticum – For vitiligo with well-defined patches, particularly on the face and upper body, with a tendency to hide emotional distress."
    ],
    "src": "/treatment/vitiligo.png"
  },
  "pcod": {
    "description": "PCOD/PCOS is a common health concern. This placeholder will be replaced with a condition-specific explanation.",
    "treatment": "Homeopathy offers a gentle and holistic approach by addressing the root cause and enhancing natural healing. It is safe, individualized, and effective for long-term relief.\n\nHomeopathy can significantly improve your overall health when guided by expert care.",
    "medicines": [
      "Pulsatilla – For irregular periods and hormonal imbalance.",
      "Sepia – For ovarian cysts with mood swings and fatigue.",
      "Apis Mellifica – For ovarian swelling with stinging pains."
    ],
    "src": "/treatment/woman.png"
  },
  "sexual-troubles": {
    "description": "Sexual Troubles (Male & Female) is a common health concern. This placeholder will be replaced with a condition-specific explanation.",
    "treatment": "Homeopathy offers a gentle and holistic approach by addressing the root cause and enhancing natural healing. It is safe, individualized, and effective for long-term relief.\n\nHomeopathy can significantly improve your overall health when guided by expert care.",
    "medicines": [
      "Agnus Castus – For low libido and impotence in men.",
      "Lycopodium – For performance anxiety and premature ejaculation.",
      "Sepia – For female sexual health and hormonal issues."
    ],
    "src": "/treatment/sexual_troubles.png"
  },
  "depression": {
    "description": "Depression is a common health concern. This placeholder will be replaced with a condition-specific explanation.",
    "treatment": "Homeopathy offers a gentle and holistic approach by addressing the root cause and enhancing natural healing. It is safe, individualized, and effective for long-term relief.\n\nHomeopathy can significantly improve your overall health when guided by expert care.",
    "medicines": [],
    "src": "/treatment/depression.png"
  },
  "anxiety": {
    "description": "Anxiety is a common health concern. This placeholder will be replaced with a condition-specific explanation.",
    "treatment": "Homeopathy offers a gentle and holistic approach by addressing the root cause and enhancing natural healing. It is safe, individualized, and effective for long-term relief.\n\nHomeopathy can significantly improve your overall health when guided by expert care.",
    "medicines": [],
    "src": "/treatment/anxiety.png"
  },
  "thyroid": {
    "description": "Thyroid is a common health concern. This placeholder will be replaced with a condition-specific explanation.",
    "treatment": "Homeopathy offers a gentle and holistic approach by addressing the root cause and enhancing natural healing. It is safe, individualized, and effective for long-term relief.",
    "medicines": [
      "Iodium – For hyperthyroidism with weight loss and restlessness.",
      "Calcarea Carbonica – For hypothyroidism with weight gain and fatigue.",
      "Lycopus Virginicus – Regulates thyroid function and relieves palpitations."
    ],
    "src": "/treatment/thyroid.png"
  },
  "hypertension": {
    "description": "Hypertension is a common health concern. This placeholder will be replaced with a condition-specific explanation.",
    "treatment": "Homeopathy offers a gentle and holistic approach by addressing the root cause and enhancing natural healing. It is safe, individualized, and effective for long-term relief.",
    "medicines": [
      "Rauwolfia – Classic homeopathic remedy for high blood pressure.",
      "Natrum Muriaticum – For hypertension due to emotional stress.",
      "Lachesis – For high BP with hot flushes and headaches."
    ],
    "src": "/treatment/hypertension.png"
  },
  "weight_loss": {
    "description": "Weight Loss is a common health concern. This placeholder will be replaced with a condition-specific explanation.",
    "treatment": "Homeopathy offers a gentle and holistic approach by addressing the root cause and enhancing natural healing. It is safe, individualized, and effective for long-term relief.",
    "medicines": [
      "Fucus Vesiculosus – Aids metabolism and digestion.",
      "Calcarea Carbonica – For slow metabolism and obesity.",
      "Thyroidinum – Helps regulate thyroid and supports weight loss."
    ],
    "src": "/treatment/weight_loss.png"
  },
  "sinusitis": {
    "description": "Sinusitis is a common health concern. This placeholder will be replaced with a condition-specific explanation.",
    "treatment": "Homeopathy offers a gentle and holistic approach by addressing the root cause and enhancing natural healing. It is safe, individualized, and effective for long-term relief.",
    "medicines": [
      "Kali Bichromicum – Thick, stringy mucus and facial pain.",
      "Silicea – Recurrent sinus infections with pus formation.",
      "Belladonna – Sudden sinus congestion with redness and heat."
    ],
    "src": "/treatment/sinusitis.png"
  },
  "allergic_rhinitis": {
    "description": "Allergic Rhinitis is a common health concern. This placeholder will be replaced with a condition-specific explanation.",
    "treatment": "Homeopathy offers a gentle and holistic approach by addressing the root cause and enhancing natural healing. It is safe, individualized, and effective for long-term relief.",
    "medicines": [
      "Sabadilla – For sneezing with watery nasal discharge.",
      "Allium Cepa – For allergy-induced runny nose and tearing eyes.",
      "Arsenicum Album – For burning discharge and respiratory allergies."
    ],
    "src": "/treatment/allergic_rhinitis.png"
  },
  "bronchitis": {
    "description": "Bronchitis is a common health concern. This placeholder will be replaced with a condition-specific explanation.",
    "treatment": "Homeopathy offers a gentle and holistic approach by addressing the root cause and enhancing natural healing. It is safe, individualized, and effective for long-term relief.",
    "medicines": [
      "Bryonia – Dry cough with chest pain and thirst.",
      "Antimonium Tartaricum – For rattling cough with mucus in chest.",
      "Spongia Tosta – Barking, dry cough with breathing difficulty."
    ],
    "src": "/treatment/bronchitis.png"
  },
  "tonsillitis": {
    "description": "Tonsillitis is a common health concern. This placeholder will be replaced with a condition-specific explanation.",
    "treatment": "Homeopathy offers a gentle and holistic approach by addressing the root cause and enhancing natural healing. It is safe, individualized, and effective for long-term relief.",
    "medicines": [
      "Baryta Carbonica – For enlarged tonsils in children.",
      "Belladonna – For red, swollen tonsils with high fever.",
      "Hepar Sulph – For pus in tonsils and extreme sensitivity to cold."
    ],
    "src": "/treatment/tonsillitis.png"
  },
  "cold-and-flu": {
    "description": "Cold and Flu is a common health concern. This placeholder will be replaced with a condition-specific explanation.",
    "treatment": "Homeopathy offers a gentle and holistic approach by addressing the root cause and enhancing natural healing. It is safe, individualized, and effective for long-term relief.",
    "medicines": [
      "Aconite – For sudden onset of cold after exposure to cold wind.",
      "Gelsemium – For weakness and heavy feeling during flu.",
      "Eupatorium Perfoliatum – For intense body aches with flu."
    ],
    "src": "/treatment/cold_and_flu.png"
  },
  "warts": {
    "description": "Warts is a common health concern. This placeholder will be replaced with a condition-specific explanation.",
    "treatment": "Homeopathy offers a gentle and holistic approach by addressing the root cause and enhancing natural healing. It is safe, individualized, and effective for long-term relief.",
    "medicines": [
      "Thuja Occidentalis – Most commonly used for all types of warts.",
      "Nitric Acid – For painful and bleeding warts.",
      "Antimonium Crudum – For horny warts on hands and feet."
    ],
    "src": "/treatment/warts.png"
  },
  "acne_and_pimple": {
    "description": "Acne and Pimple is a common health concern. This placeholder will be replaced with a condition-specific explanation.",
    "treatment": "Homeopathy offers a gentle and holistic approach by addressing the root cause and enhancing natural healing. It is safe, individualized, and effective for long-term relief.",
    "medicines": [
      "Silicea – For pus-filled acne with scarring tendency.",
      "Hepar Sulph – For painful, sensitive acne.",
      "Kali Bromatum – For deep, cystic acne especially on face and back."
    ],
    "src": "/treatment/acne_and_pimple.png"
  },
 "insomnia": {
    description: "Insomnia is a common health concern. It involves difficulty in falling or staying asleep. Various factors like stress, lifestyle, and underlying health conditions may contribute to insomnia.",
    treatment: "Homeopathy offers a gentle and holistic approach by addressing the root cause and enhancing natural healing. It is safe, individualized, and effective for long-term relief.",
    medicines: [
      "Coffea Cruda – For sleeplessness due to mental restlessness.",
      "Nux Vomica – For sleeplessness due to stress or overwork.",
      "Chamomilla – For sleeplessness due to irritability or pain."
    ],
    src: "/treatment/insomnia.png"
  },
  "adhd": {
    description: "ADHD (Attention Deficit Hyperactivity Disorder) is a condition characterized by symptoms of inattention, hyperactivity, and impulsivity, which can affect daily functioning.",
    treatment: "Homeopathy offers a gentle and individualized treatment approach, aiming to improve focus, calmness, and overall emotional balance.",
    medicines: [
      "Hyoscyamus – For impulsive behavior and hyperactivity.",
      "Stramonium – For children with marked inattention and restlessness.",
      "Baryta Carbonica – For developmental delays and lack of concentration."
    ],
    src: "/treatment/adhd.png"
  },
  "constipation": {
    description: "Constipation is a common health concern, characterized by infrequent, difficult, or painful bowel movements. It can result from a variety of factors, including diet, lack of exercise, and stress.",
    treatment: "Homeopathy offers a gentle and holistic approach by addressing the root cause and enhancing natural healing. It is safe, individualized, and effective for long-term relief.",
    medicines: [
      "Nux Vomica – For ineffectual urging and sedentary lifestyle.",
      "Alumina – For dry, hard stools with sluggish intestines.",
      "Bryonia – For constipation due to dryness and lack of fluids."
    ],
    src: "/treatment/constipation.png"
  },
  "gallstones": {
    "description": "Gallstones is a common health concern. This placeholder will be replaced with a condition-specific explanation.",
    "treatment": "Homeopathy offers a gentle and holistic approach by addressing the root cause and enhancing natural healing. It is safe, individualized, and effective for long-term relief.",
    "medicines": [
      "Chelidonium – Pain in right upper abdomen radiating to back.",
      "Lycopodium – For gas and bloating with gallbladder issues.",
      "Calcarea Carbonica – For recurrent gallstone tendency."
    ],
    "src": "/treatment/gallstones.png"
  },
  "kidney-stones": {
    "description": "Kidney Stones is a common health concern. This placeholder will be replaced with a condition-specific explanation.",
    "treatment": "Homeopathy offers a gentle and holistic approach by addressing the root cause and enhancing natural healing. It is safe, individualized, and effective for long-term relief.",
    "medicines": [
      "Berberis Vulgaris – For radiating kidney pain and stone passage.",
      "Lycopodium – For right-sided kidney stone pain.",
      "Cantharis – For burning urination and kidney discomfort."
    ],
    "src": "/treatment/kidney_stones.png"
  },
  "gout": {
    "description": "Gout is a common health concern. This placeholder will be replaced with a condition-specific explanation.",
    "treatment": "Homeopathy offers a gentle and holistic approach by addressing the root cause and enhancing natural healing. It is safe, individualized, and effective for long-term relief.",
    "medicines": [
      "Colchicum – For intense toe joint pain and swelling.",
      "Ledum Palustre – For gout that begins in lower limbs.",
      "Urtica Urens – For uric acid regulation and joint pain."
    ],
    "src": "/treatment/gout.png"
  },
  "skin-diseases": {
    "description": "Skin Allergies is a common health concern. This placeholder will be replaced with a condition-specific explanation.",
    "treatment": "Homeopathy offers a gentle and holistic approach by addressing the root cause and enhancing natural healing. It is safe, individualized, and effective for long-term relief.",
    "medicines": [
      "Sulphur – For burning, itching skin with redness.",
      "Apis Mellifica – For swelling with stinging pain and hives.",
      "Urtica Urens – For allergic rashes and itching."
    ],
    "src": "/treatment/dermatology.png"
  },
  "menstrual-problems": {
    description: "Menstrual problems are common health concerns, which can involve irregular cycles, heavy bleeding, or painful periods. These problems can be caused by stress, hormonal imbalances, or underlying health conditions.",
    treatment: "Homeopathy offers a gentle and holistic approach by addressing the root cause and enhancing natural healing. It is safe, individualized, and effective for long-term relief.",
    medicines: [
      "Pulsatilla – For irregular menstrual cycles and emotional symptoms.",
      "Lachesis – For heavy bleeding with a feeling of heat or irritation.",
      "Sepia – For hormonal imbalance, fatigue, and mood swings during menstruation."
    ],
    src: "/treatment/manstrual.png"
  },
  "diabetes": {
    description: "Diabetes is a chronic condition that affects the body's ability to process blood sugar. It can cause symptoms like frequent urination, excessive thirst, and fatigue, and may lead to serious complications if not managed properly.",
    treatment: "Homeopathy offers a gentle and holistic approach by addressing the root cause and enhancing natural healing. It is safe, individualized, and effective for long-term relief.",
    medicines: [
      "Syzygium Jambolanum – For regulating blood sugar levels.",
      "Phosphorus – For excessive thirst and urination in diabetes.",
      "Gymnema Sylvestre – For controlling sugar cravings and improving insulin resistance."
    ],
    src: "/treatment/diabetes.png"
  },
  "hair-fall": {
    description: "Hair fall is a common concern affecting both men and women, often due to stress, nutritional deficiencies, hormonal imbalances, or underlying health conditions.",
    treatment: "Homeopathy offers a gentle and holistic approach by addressing the root cause and enhancing natural healing. It is safe, individualized, and effective for long-term relief.",
    medicines: [
      "Phosphoric Acid – For hair loss due to emotional stress.",
      "Lycopodium – For thinning hair with a slow recovery of vitality.",
      "Natrum Muriaticum – For hair fall caused by hormonal imbalance or grief."
    ],
    src: "/treatment/hair.png"
  }
};

const DiseaseDetail: React.FC = () => {
  const params = useParams();
  const disease = decodeURIComponent(params.disease as string);

  const currentDisease = allDisease[disease];

  if (!currentDisease) {
    return (
      <div className="flex justify-center items-center min-h-screen text-2xl sm:text-3xl text-red-600 px-4 text-center">
        Disease not found
      </div>
    );
  }

  return (
    <section className="min-h-screen py-10 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6 sm:p-10">
        <h1 className="text-3xl sm:text-4xl font-semibold text-teal-600 uppercase text-center mb-6">
          {disease.replace(/-/g, " ")}
        </h1>

        <div className="flex justify-center mb-8">
          <img
            src={currentDisease.src}
            alt={disease}
            className="w-28 h-28 sm:w-32 sm:h-32 object-contain"
          />
        </div>

        <div className="space-y-6 text-gray-700">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-teal-500 mb-2">
              Description
            </h2>
            <p className="text-base sm:text-lg leading-relaxed whitespace-pre-line">
              {currentDisease.description}
            </p>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-teal-500 mb-2">
              Treatment
            </h2>
            <p className="text-base sm:text-lg leading-relaxed whitespace-pre-line">
              {currentDisease.treatment}
            </p>
          </div>

          {/* Medicine Section */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-teal-500 mb-2">
              Medicines (if any)
            </h2>
            <ul className="list-disc pl-6">
              {currentDisease.medicines.length > 0 ? (
                currentDisease.medicines.map((medicine, index) => (
                  <li key={index} className="text-base sm:text-lg leading-relaxed">
                    {medicine}
                  </li>
                ))
              ) : (
                <li className="text-base sm:text-lg leading-relaxed text-gray-500">
                  No specific medicine prescribed. Please consult a qualified homeopath for personalized recommendations.
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiseaseDetail;
