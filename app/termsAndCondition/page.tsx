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
                            title: "1. Acceptance of Terms",
                            content:
                                "By accessing or using Upasana Homoeo, you agree to be bound by these Terms and Conditions. If you disagree with any part of the terms, you may not access the service.",
                        },
                        {
                            title: "2. Medical Disclaimer",
                            content:
                                "All content and services provided through Upasana Homoeo are for informational purposes only and are not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider.",
                        },
                        {
                            title: "3. User Responsibilities",
                            content: (
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>
                                        You must provide accurate and complete
                                        personal and medical information when
                                        booking appointments.
                                    </li>
                                    <li>
                                        You agree not to misuse the platform or
                                        engage in any activity that disrupts the
                                        app’s services.
                                    </li>
                                </ul>
                            ),
                        },
                        {
                            title: "4. Appointments and Cancellations",
                            content:
                                "Patients are expected to arrive on time for scheduled appointments. Cancellations must be made at least 24 hours in advance. Repeated no-shows may result in suspension of booking privileges.",
                        },
                        {
                            title: "5. Privacy and Data Security",
                            content:
                                "We are committed to protecting your personal and medical information. Please refer to our Privacy Policy to understand how we collect, use, and safeguard your data.",
                        },
                        {
                            title: "6. Changes to Terms",
                            content:
                                "Upasana Homoeo reserves the right to modify or replace these terms at any time. We will provide notice of significant changes. Continued use of the service after changes constitutes acceptance of the new terms.",
                        },
                        {
                            title: "7. Contact Us",
                            content: (
                                <p>
                                    If you have any questions about these Terms
                                    and Conditions, please contact us at{" "}
                                    <a
                                        href="mailto:upasanahomoeo@example.com"
                                        className="text-blue-600 underline"
                                    >
                                        upasnahomeo@gmail.com
                                    </a>
                                    .
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
