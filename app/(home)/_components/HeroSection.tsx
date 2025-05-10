"use client";

import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const treatmentResults = [
    {
        before: "/beforeAndAfter/Psoriasis_Before_1.JPG",
        after: "/beforeAndAfter/Psoriasis_After_1.JPG",
        condition: "Psoriasis",
    },
    {
        before: "/beforeAndAfter/Psoriasis_Before_2.jpeg",
        after: "/beforeAndAfter/Psoriasis_After_2.JPG",
        condition: "Psoriasis",
    },
    {
        before: "/beforeAndAfter/Sebaceous_Before.JPG",
        after: "/beforeAndAfter/Sebaceous_acne.JPG",
        condition: "Sebaceous Acne",
    },
];

const HeroSection = () => {
    const router = useRouter();
    const [isMobile, setIsMobile] = useState(false);
    const [showNumber, setShowNumber] = useState(false);

    useEffect(() => {
        const ua = navigator.userAgent.toLowerCase();
        const mobile =
            /iphone|ipod|android|blackberry|mini|windows\sce|palm/i.test(ua);
        setIsMobile(mobile);
    }, []);

    return (
        <section
            className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 lg:px-20 py-10 min-h-[90vh] gap-8 lg:gap-16"
            aria-label="Upasana Homoeo Hero Section"
        >
            {/* Left Section */}
            <motion.div
                className="flex-1 text-center lg:text-left space-y-6"
                initial="hidden"
                animate="show"
                variants={{
                    hidden: {},
                    show: {
                        transition: {
                            staggerChildren: 0.2,
                        },
                    },
                }}
            >
                <motion.h1
                    className="text-4xl sm:text-5xl lg:text-6xl font-medium text-[#37BEB0] leading-tight"
                    variants={fadeInUp}
                >
                    Welcome to{" "}
                    <span className="text-[#0C6170] font-bold dark:text-white">
                        Upasana Homoeo
                    </span>
                </motion.h1>

                <motion.h2
                    className="text-xl sm:text-2xl text-gray-500 font-semibold"
                    variants={fadeInUp}
                >
                    Trusted Homeopathy Clinic in Ajmer, Rajasthan
                </motion.h2>

                <motion.p
                    className="text-base sm:text-lg text-[#0C6170] max-w-xl mx-auto lg:mx-0"
                    variants={fadeInUp}
                >
                    Experience holistic healing with natural remedies. At Upasana
                    Homoeo, we provide gentle, effective, and long-lasting
                    homeopathic treatments that stimulate your body&apos;s natural
                    defenses—without side effects.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    className="flex flex-col justify-center  sm:flex-row items-center gap-4"
                    variants={fadeInUp}
                >
                    <Button
                        variant={"secondary"}
                        className="h-12 px-6 sm:px-8 text-base sm:text-lg rounded-lg shadow-md bg-[#0C6170] text-white hover:bg-[#04363d] cursor-pointer"
                        aria-label="Book online appointment with Upasana Homoeo in Ajmer"
                        onClick={() => {
                            router.push("/appointment");
                        }}
                    >
                        Book Appointment Online
                    </Button>
                    <span className="hidden sm:inline text-gray-500">OR</span>
                    {isMobile ? (
                        <a
                            href="tel:+919468811004"
                            className="h-12 px-6 sm:px-8 text-base sm:text-lg rounded-lg shadow-md border border-[#0C6170] text-[#0C6170] hover:bg-[#0C6170] hover:text-white transition flex items-center justify-center min-w-[220px]"
                            aria-label="Call Upasana Homoeo Clinic"
                        >
                            Call Now
                        </a>
                    ) : (
                        <motion.button
                            onClick={() => setShowNumber(!showNumber)}
                            className="cursor-pointer h-12 px-6 text-base sm:text-lg rounded-lg shadow-md border border-[#0C6170] text-[#0C6170] hover:bg-[#0C6170] hover:text-white transition flex items-center justify-center min-w-[220px] relative overflow-hidden"
                            aria-label="Reveal phone number"
                            whileTap={{ scale: 0.97 }}
                            whileHover={{ scale: 1.03 }}
                        >
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={showNumber ? "shownumber" : "call"}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute"
                                >
                                    {showNumber
                                        ? "+91 9468811004"
                                        : "Call"}
                                </motion.span>
                            </AnimatePresence>
                        </motion.button>
                    )}
                </motion.div>
            </motion.div>

            {/* Right Section - Hero Image Carousel */}
            <motion.div
                className="flex-1 flex justify-center items-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <Carousel
                    plugins={[Autoplay({ delay: 2000 })]}
                    className="w-full max-w-[400px] sm:max-w-xl mx-auto"
                >
                    <CarouselContent className="flex">
                        {treatmentResults.map((result, index) => (
                            <CarouselItem key={index} className="flex justify-center space-x-4">
                                <div className="flex items-center space-x-4">
                                    {/* Before Image */}
                                    <div className="flex flex-col items-center">
                                        <figcaption className="text-sm text-gray-500 mt-2 text-center">Before</figcaption>
                                        <div className="relative h-[400px] w-[180px]  md:w-[240px] md:h-[480px] overflow-hidden shadow-sm border">
                                            <Image
                                                src={result.before}
                                                alt=""
                                                layout="fill"
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>

                                    {/* After Image */}
                                    <div className="flex flex-col items-center">
                                        <figcaption className="text-sm text-gray-500 mt-2 text-center">After</figcaption>
                                        <div className="relative h-[400px] w-[180px] md:w-[240px] md:h-[480px] overflow-hidden shadow-sm border">
                                            <Image
                                                src={result.after}
                                                alt={`${result.condition} - After`}
                                                layout="fill"
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </motion.div>
        </section>
    );
};

export default HeroSection;
