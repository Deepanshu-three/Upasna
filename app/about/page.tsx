"use client"
import React from "react";
import { motion } from "framer-motion"; // Import motion
import Testimonials from "./_components/Testimonials";
import Reviews from "./_components/Reviews";
import BeforeAfter from "./_components/BeforeAndAfter";
import Head from 'next/head'; // Importing the Head component for SEO

const Page = () => {
    return (
        <>
            <Head>
                <title>Why Choose Upasna Homoeo? | Holistic Healing and Compassionate Care</title>
                <meta name="description" content="Discover the holistic healing approach at Upasna Homoeo. Learn about Dr. Alok Verma and the patient-centered care that has transformed over 2,00,000 lives." />
                <meta name="keywords" content="homeopathy, holistic healing, Dr. Alok Verma, Upasna Homoeo, chronic disorders, lifestyle disorders, patient care, wellness" />
                <meta name="author" content="Upasna Homoeo Clinic" />
                <meta property="og:title" content="Why Choose Upasna Homoeo? | Holistic Healing and Compassionate Care" />
                <meta property="og:description" content="Learn more about Upasna Homoeo's unique approach to healing and how Dr. Alok Verma's expertise has made a difference in thousands of lives." />
                <meta property="og:image" content="/path-to-image.jpg" /> {/* Add your image URL here */}
                <meta property="og:url" content="https://www.upasanahomeo.com/why-choose-us" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Upasna Homoeo" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Why Choose Upasna Homoeo? | Holistic Healing and Compassionate Care" />
                <meta name="twitter:description" content="Discover how Upasna Homoeo combines traditional methods and patient understanding to provide lasting relief and wellness." />
                <meta name="twitter:image" content="/path-to-image.jpg" /> {/* Add your image URL here */}
            </Head>

            <main className="min-h-screen flex flex-col items-center mt-20 px-4 md:px-8">
                <div className="max-w-7xl w-full mx-auto">
                    {/* Heading */}
                    <header className="text-center mb-6">
                        <motion.h1
                            className="text-4xl md:text-5xl font-medium text-[#0C6170]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            Why Upasna Homoeo?
                        </motion.h1>
                        <motion.p
                            className="text-lg md:text-xl text-gray-700 leading-relaxed mt-4 mb-16"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                        >
                            At Upasna Homoeo, we take pride in a holistic healing
                            approach. We go beyond treating symptoms — we listen,
                            understand, and tailor treatments that promote total
                            well-being. Our clinic is built around empathy, personal
                            attention, and results that matter to our patients.
                        </motion.p>
                    </header>

                    {/* Doctor Section */}
                    <motion.section
                        className="flex flex-col lg:flex-row items-center gap-10 mb-10 p-4 sm:p-8 border border-[#0C6170] shadow-xl rounded-xl mx-auto w-full max-w-7xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <div className="w-full lg:w-1/2 flex justify-center">
                            <img
                                src="/docVerma.jpeg"
                                alt="Dr. Abhinav Verma, Homeopathy Specialist"
                                className="w-full max-w-md object-cover border-2 border-[#0C6170] shadow-xl rounded-xl"
                            />
                        </div>
                        <div className="w-full lg:w-1/2 space-y-6">
                            <h2 className="text-2xl md:text-4xl font-medium text-[#0C6170]">
                                Dr. Alok Verma
                            </h2>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                With over <strong>30 years</strong> of dedicated
                                service in the field of homeopathy, Dr. Alok Verma
                                has helped transform the lives of over{" "}
                                <strong>2,00,000 patients</strong>. His expertise lies
                                in combining traditional methods with deep patient
                                understanding and compassion.
                            </p>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>
                                    Specialist in chronic and lifestyle-related
                                    disorders
                                </li>
                                <li>
                                    Trusted by thousands of families for effective
                                    homeopathy
                                </li>
                                <li>
                                    Focus on root-cause healing and lasting relief
                                </li>
                                <li>
                                    Known for ethical, kind, and honest patient care
                                </li>
                            </ul>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                Dr. Alok Verma is not just a doctor — he is a
                                compassionate guide who stands by his patients
                                throughout their journey to wellness. Praised for
                                his excellence during his government service, he is
                                poised to make a landmark contribution to the field
                                of medicine.
                            </p>
                        </div>
                    </motion.section>
                </div>

                {/* Testimonials */}
                <motion.section
                    className="w-full border border-[#0C6170] shadow-xl py-16 m-4 rounded-xl mb-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.7 }}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <Testimonials />
                    </div>
                </motion.section>

                {/* Reviews */}
                <motion.section
                    className="w-full border border-[#0C6170] shadow-xl rounded-xl mb-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.9 }}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <Reviews />
                    </div>
                </motion.section>

                {/* Before and After */}
                <motion.section
                    className="w-full border border-[#0C6170] shadow-xl rounded-xl py-16 m-4 mb-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.1 }}
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <BeforeAfter />
                    </div>
                </motion.section>
            </main>
        </>
    );
};

export default Page;
