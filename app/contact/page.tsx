"use client";

import React from "react";
import { Mail, Phone, Clock } from "lucide-react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";

const ContactPage = () => {
    return (
        <>
            {/* SEO Meta Tags */}
            <Head>
                <title>Contact Us | Upasna Homeopathy Clinic</title>
                <meta
                    name="description"
                    content="Get in touch with Upasna Homeopathy Clinic for online consultations, appointments, and visit our clinics in Delhi and Mumbai."
                />
                <meta name="robots" content="index, follow" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>

            <main className="w-full max-w-7xl mx-auto mt-20 flex flex-col gap-16 px-4 pb-10">
                {/* Header Section */}
                <header>
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl font-medium text-[#0C6170] text-center"
                    >
                        Wanna get in touch?
                    </motion.h1>
                </header>

                {/* Contact Info Section */}
                <section>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="w-full border border-[#0C6170] shadow-xl rounded-xl p-10 space-y-10"
                    >
                        <div className="flex flex-col sm:flex-row justify-around items-center gap-8">
                            {/* Email */}
                            <div className="flex flex-col items-center space-y-3 text-gray-700">
                                <Mail className="w-16 h-16 text-[#0C6170]" />
                                <h3 className="text-xl font-semibold">Email</h3>
                                <span className="text-lg sm:text-xl text-center">
                                    upasnahomeo@gmail.com
                                </span>
                            </div>

                            {/* Phone */}
                            <div className="flex flex-col items-center space-y-3 text-gray-700">
                                <Phone className="w-16 h-16 text-[#0C6170]" />
                                <h3 className="text-xl font-semibold">
                                    Call for Appointment
                                </h3>
                                <span className="text-lg sm:text-xl text-center">
                                    +91 94688 11004
                                </span>
                            </div>

                            {/* Timings */}
                            <div className="flex flex-col items-center space-y-3 text-gray-700">
                                <Clock className="w-16 h-16 text-[#0C6170]" />
                                <h3 className="text-xl font-semibold">
                                    Timings
                                </h3>
                                <span className="text-lg sm:text-xl text-center">
                                    9:00 AM - 9:00 PM
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Visit Us Section */}
                <section>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="w-full border border-[#0C6170] shadow-xl rounded-xl p-10 space-y-10"
                    >
                        <h2 className="text-2xl md:text-4xl font-medium text-center text-[#0C6170]">
                            Visit us at our Clinics
                        </h2>

                        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                            {/* Clinic 1 */}
                            <div className="w-full md:w-1/2 flex flex-col gap-4 items-center">
                                <h3 className="text-lg font-semibold text-[#0C6170] text-center">
                                    Clinic 1
                                </h3>
                                <address className="text-center">
                                    123 Wellness Street, Health City, Delhi
                                </address>
                                <iframe
                                    src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=123+Wellness+Street,+Health+City,+Delhi`}
                                    className="w-full h-64 border-2 border-[#0C6170] shadow-xl rounded-xl"
                                    loading="lazy"
                                    title="Clinic 1 Location"
                                ></iframe>
                            </div>

                            {/* Clinic 2 */}
                            <div className="w-full md:w-1/2 flex flex-col gap-4 items-center">
                                <h3 className="text-lg font-semibold text-[#0C6170] text-center">
                                    Clinic 2
                                </h3>
                                <address className="text-center">
                                    456 Care Lane, Medical Town, Mumbai
                                </address>
                                <iframe
                                    src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=456+Care+Lane,+Medical+Town,+Mumbai`}
                                    className="w-full h-64 border-2 border-[#0C6170] shadow-xl rounded-xl"
                                    loading="lazy"
                                    title="Clinic 2 Location"
                                ></iframe>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Clinic Gallery Section */}
                <section>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="w-full border border-[#0C6170] shadow-xl rounded-xl p-10 space-y-10 mb-10"
                    >
                        <h2 className="text-2xl md:text-4xl font-medium text-center text-[#0C6170]">
                            Our Clinic
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* Portrait Images */}
                            <div className="w-full">
                                <Image
                                    src="/clinic/Clinic_1.jpg"
                                    alt="Clinic Image 1"
                                    className="w-full h-auto aspect-[3/4] object-cover border-2 border-[#0C6170] shadow-xl rounded-xl"
                                    width={500}
                                    height={700}
                                />
                            </div>
                            <div className="w-full">
                                <Image
                                    src="/clinic/Clinic_1_img_2.jpg"
                                    alt="Clinic Image 2"
                                    className="w-full h-auto aspect-[3/4] object-cover border-2 border-[#0C6170] shadow-xl rounded-xl"
                                    width={500}
                                    height={700}
                                />
                            </div>
                        </div>

                        {/* Horizontal Image Full Width */}
                        <div className="w-full">
                            <Image
                                src="/clinic/Clininc_2.png"
                                alt="Clinic Image 3"
                                className="w-full h-auto aspect-video object-cover border-2 border-[#0C6170] shadow-xl rounded-xl"
                                width={1000}
                                height={500}
                            />
                        </div>
                    </motion.div>
                </section>
            </main>
        </>
    );
};

export default ContactPage;
