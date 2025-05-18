"use client";
import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.6,
            ease: "easeOut",
        },
    }),
};

const TermsAndConditionsPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen bg-gray-100 py-10 px-4"
        >
            <div className="max-w-5xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-4xl font-medium text-center text-[#0C6170] mb-10"
                >
                    Terms and Conditions
                </motion.h1>

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.1,
                            },
                        },
                    }}
                    className="grid gap-6 border border-[#0C6170] shadow-xl rounded-xl p-10 mb-10"
                >
                    {[
                        {
                            title: "1. General",
                            content:
                                "Upasna Homoeo is a homeopathic clinic offering consultation services through online (teleconsultation) and offline modes. These Terms and Conditions apply to all users of our website, online booking system, and consultation services. We reserve the right to update or modify these terms at any time. Updated terms will be posted on this page.",
                        },
                        {
                            title: "2. Consultation Services",
                            content:
                                "Teleconsultations are conducted based on the information shared by the patient during the case-taking process. No physical examination is conducted during an online consultation. The advice and prescriptions provided are rooted in classical homeopathic principles and individualized to each case. The patient is responsible for providing accurate and complete health information during consultation.",
                        },
                        {
                            title: "3. Informed Consent",
                            content:
                                "By proceeding with an online consultation, the patient acknowledges and consents to receive homeopathic treatment in a remote format. The patient understands the limitations of teleconsultation and agrees to follow medical advice, including a recommendation to seek in-person evaluation if necessary. A consent form may be required before initiating the consultation process.",
                        },
                        {
                            title: "4. Payments & Refunds",
                            content: (
                                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                    <li>
                                        All payments are processed securely via trusted third-party gateways such as Razorpay, Instamojo, etc.
                                    </li>
                                    <li>
                                        Consultation charges are non-refundable once the case-taking has started.
                                    </li>
                                    <li>
                                        Refunds for medicines are possible only if the remedy has not yet been prepared or dispatched.
                                    </li>
                                    <li>
                                        In the case of technical errors (e.g., payment deducted but not received), eligible refunds will be processed within 7–10 working days after verification.
                                    </li>
                                </ul>
                            ),
                        },
                        {
                            title: "5. Data Privacy & Security",
                            content:
                                "We are committed to protecting your personal and medical data and ensuring confidentiality at all times. Information shared by patients is used solely for treatment purposes and is stored securely in compliance with Indian data protection laws and IT Act (2000). We do not share, sell, or distribute patient data to third parties without explicit consent, except where required by law. Secure platforms are used for video consultations, medical records, and online payments. Patients are advised to avoid using public or unsecured networks while accessing services.",
                        },
                        {
                            title: "6. Limitation of Liability",
                            content:
                                "Homeopathic remedies are natural, gentle, and non-toxic. In rare cases, a temporary aggravation of symptoms may occur, which is a natural part of the healing response in classical homeopathy. This is not an adverse reaction. If any discomfort or unusual change occurs, do not stop the remedy on your own. Contact the doctor immediately for guidance. Upasna Homoeo is not responsible for outcomes arising from misuse of medicines, discontinuation of treatment without consultation, or third-party misinterpretation of the advice given.",
                        },
                        {
                            title: "7. Governing Law & Jurisdiction",
                            content:
                                "These terms are governed by the laws of India, including the Central Council of Homoeopathy (CCH) guidelines, the Ministry of AYUSH, and RBI and Information Technology (IT) Act (2000) standards for digital transactions and data. Any disputes arising out of these services shall be subject to the exclusive jurisdiction of courts in Ajmer, India, India.",
                        },
                        {
                            title: "8. Contact Us",
                            content: (
                                <p>
                                    For any questions or concerns regarding these Terms and Conditions:
                                    <br />
                                    Email:{" "}
                                    <a
                                        href="mailto:upasnahomeo@gmail.com"
                                        className="text-blue-600 underline"
                                    >
                                        upasnahomeo@gmail.com
                                    </a>
                                    <br />
                                    Phone:{" "}
                                    <a href="tel:+919468811004" className="text-blue-600 underline">
                                        9468811004
                                    </a>
                                    <br />
                                    Clinic: Upasna Homoeo, BihariGanj, Ajmer, India, 305001
                                </p>
                            ),
                        },
                    ].map((section, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            custom={index}
                            className="bg-white rounded-2xl shadow-md p-6"
                        >
                            <h2 className="text-2xl font-semibold mb-2">
                                {section.title}
                            </h2>
                            <div className="text-gray-700">
                                {section.content}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default TermsAndConditionsPage;
