"use client";
import React from "react";
import { motion } from "framer-motion"; // Ensure framer-motion is installed correctly
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"; // Ensure proper import
import Head from "next/head"

const faqs = [
  {
    question: "Why is Upasna Homoeo the best choice for me and my family?",
    answer:
      "With excellent treatment and affordability, we make no compromises and go above and beyond to guide you toward a healthy life — even if you're not currently undergoing our treatment.",
  },
  {
    question: "Why is Homoeopathy preferred over Allopathy?",
    answer:
      "The most common reason is that Homoeopathic medicines have no side effects. This makes Homoeopathy not only more effective but also safer to use, especially in chronic diseases.",
  },
  {
    question:
      "How long does it take to see results from Homoeopathic treatment?",
    answer:
      "A common misconception is that Homoeopathy takes a long time to show results. This is not true. The effects of Homoeopathic medicine can be seen within a few minutes (depending on the patient and the nature of the disease) to a few hours. Thus, Homoeopathy is extremely potent — not only in treating acute conditions but also in providing fast relief in chronic diseases.",
  },
  {
    question: "How effective is your treatment?",
    answer:
      "In cases of acute diseases — such as fever, cold, heat stroke, or diarrhea — results can often be seen within a few minutes to a few hours. It’s not just temporary relief but a step toward a permanent cure. For chronic conditions — like asthma, hypertension, or non-painful kidney stones — noticeable improvement is typically seen within 2 days. Providing fast relief and achieving permanent cure are our highest priorities.",
  },
  {
    question: "Are Homoeopathic remedies safe?",
    answer:
      "Yes! Homoeopathic medicines are 100% safe, free from chemicals, and have no side effects.",
  },
  {
    question: "How long does a typical Homoeopathy consultation last?",
    answer:
      "A consultation typically lasts between 30–45 minutes, depending on the patient's case history and condition.",
  },
  {
    question: "Can I use Homoeopathy medicine alongside conventional medicine?",
    answer:
      "Yes, Homoeopathy can be safely used alongside conventional medicine without harmful interactions. (Consult your attending physician for more information.)",
  },
  {
    question: "Do you provide home delivery for Homoeopathy medicines?",
    answer:
      "Yes, we offer home delivery services so you can receive your medicines at your doorstep — not only within India but in most other countries as well.",
  },
  {
    question: "Is Homoeopathy better than conventional medicine?",
    answer:
      "Homoeopathy focuses on treating the root cause and strengthening immunity rather than just suppressing symptoms.",
  },
];

const FAQs = () => {
  return (
    <>
      <Head>
        <title>Frequently Asked Questions | Upasna Homoeo Clinic</title>
        <meta
          name="description"
          content="Find answers to common questions about homeopathy, treatments, appointments, and care at Upasna Homoeo Clinic in Ajmer."
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="FAQs - Upasna Homoeo | Your Homeopathy Questions Answered"
        />
        <meta
          property="og:description"
          content="Explore frequently asked questions about homeopathic treatments, clinic policies, and patient care at Upasna Homoeo."
        />
        <meta property="og:url" content="https://www.upasanahomoeo.com/faqs" />
        <meta
          property="og:image"
          content="https://www.upasanahomoeo.com/images/faqs-og.jpg"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Upasna Homoeo" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="FAQs | Upasna Homoeo - Homeopathy Clinic in Ajmer"
        />
        <meta
          name="twitter:description"
          content="Get answers to your questions about homeopathy and our clinic services at Upasna Homoeo."
        />
        <meta
          name="twitter:image"
          content="https://www.upasanahomoeo.com/images/faqs-og.jpg"
        />
      </Head>

      <motion.div
        className="min-h-screen flex flex-col justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-medium text-[#0C6170] text-center">
            FAQs
          </h1>
          <p className="text-lg text-gray-700 text-center">
            Find answers to the most common questions about Upasana Homoeopathy
            Clinic.
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
              className="w-full border border-[#0C6170] shadow-xl rounded-xl m-10 p-10 mx-auto"
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
    </>
  );
};

export default FAQs;
