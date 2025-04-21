"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            duration: 0.6,
            ease: "easeOut",
        },
    }),
};

const PrivacyPolicyPage = () => {
    const sections = [
        {
            title: "1. Introduction",
            content: `At Upasana Homoeo, we value your privacy and are committed to protecting your personal and medical information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our website or services.`,
        },
        {
            title: "2. Information We Collect",
            list: [
                "Personal information (name, age, contact details)",
                "Medical history and appointment details",
                "Usage data such as IP address and device info",
            ],
        },
        {
            title: "3. How We Use Your Information",
            content: `We use your information to manage appointments, communicate with you, improve our services, and ensure patient safety. Your data is never sold or shared without your consent, except where required by law.`,
        },
        {
            title: "4. Data Security",
            content: `We implement strong security measures to protect your personal and health information from unauthorized access, alteration, disclosure, or destruction.`,
        },
        {
            title: "5. Your Rights",
            content: `You have the right to access, update, or delete your personal data. If you'd like to exercise these rights, please contact us directly.`,
        },
        {
            title: "6. Changes to This Policy",
            content: `We may update our Privacy Policy from time to time. Changes will be posted on this page with an updated date.`,
        },
        {
            title: "7. Contact Us",
            content: (
                <>
                    If you have questions about this Privacy Policy, reach out
                    to us at{" "}
                    <a
                        href="mailto:upasnahomeo@gmail.com"
                        className="text-blue-600 underline"
                    >
                        upasnahomeo@gmail.com
                    </a>
                    .
                </>
            ),
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4">
            <div className="max-w-5xl mx-auto">
                <motion.h1
                    className="text-4xl font-medium text-center text-gray-800 mb-10"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Privacy Policy
                </motion.h1>

                <motion.div
                    className="grid gap-6 border border-[#0C6170] shadow-xl rounded-xl p-10 mb-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {sections.map((section, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-2xl shadow-md p-6"
                            custom={index}
                            variants={fadeInUp}
                        >
                            <h2 className="text-2xl font-semibold mb-2">
                                {section.title}
                            </h2>
                            {section.list ? (
                                <ul className="list-disc pl-5 space-y-1">
                                    {section.list.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p>{section.content}</p>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;
