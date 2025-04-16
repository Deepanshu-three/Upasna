"use client";
import React from "react";
import { motion } from "framer-motion";  // Ensure framer-motion is installed correctly
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";  // Ensure proper import

const faqs = [
  {
    question: "What are the timings of the Afecto Homeopathy Clinic?",
    answer:
      "Our clinics operate from 9 AM to 7 PM, Monday to Saturday. Timings may vary by location.",
  },
  {
    question: "Is there a facility for Online Homeopathy Consultation at Afecto?",
    answer:
      "Yes! We provide online consultations to ensure you receive treatment from the comfort of your home.",
  },
  {
    question: "How long does it take to see results from homeopathic treatment?",
    answer:
      "The results depend on the severity of the condition, but most patients experience improvements within a few weeks.",
  },
  {
    question: "What are the benefits of choosing homeopathy treatment at Afecto Homeopathy Clinic?",
    answer:
      "Homeopathy is safe, non-toxic, and treats the root cause of ailments naturally, ensuring long-term wellness.",
  },
  {
    question: "Are homeopathic remedies safe?",
    answer:
      "Yes! Homeopathic medicines are 100% safe, free from chemicals, and have no side effects.",
  },
  {
    question: "How long does a typical homeopathy consultation last?",
    answer:
      "A consultation typically lasts between 30-45 minutes, depending on the patient's case history and condition.",
  },
  {
    question: "Can I use homeopathy medicine alongside conventional medicine?",
    answer:
      "Yes, homeopathy can be safely used alongside conventional medicine without harmful interactions.",
  },
  {
    question: "Do you provide Home Delivery for homeopathy medicines?",
    answer:
      "Yes, we offer home delivery services so you can receive your medicines at your doorstep.",
  },
  {
    question: "Is Homeopathy better than conventional medicine?",
    answer:
      "Homeopathy focuses on treating the root cause and strengthening immunity rather than just suppressing symptoms.",
  },
  {
    question: "In which cities do you have homeopathy clinics?",
    answer:
      "We have clinics in multiple cities, including Delhi, Mumbai, Chandigarh, and more.",
  },
  {
    question: "Can children and pregnant women get homeopathic treatment?",
    answer:
      "Absolutely! Homeopathy is safe for children, pregnant women, and even elderly patients.",
  },
];

const FAQs = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col justify-center p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-600 text-center">FAQs</h1>
        <p className="text-lg text-gray-700 text-center">
          Find answers to the most common questions about Afecto Homeopathy Clinic.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Accordion
            type="single"
            collapsible
            className="w-full border bg-gradient-to-r from-blue-50 via-gray-100 to-white rounded-xl m-10 p-10 mx-auto"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="border-b border-gray-300"
                >
                  <AccordionTrigger className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FAQs;
