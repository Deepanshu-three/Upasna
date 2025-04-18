"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import React from "react";

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const HeroSection = () => {
    return (
        <section
            className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-20 py-10 min-h-[90vh] gap-8 md:gap-16"
            aria-label="Upasna Homoeo Hero Section"
        >
            {/* Left Section */}
            <motion.div
                className="flex-1 text-center md:text-left space-y-6"
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
                    className="text-4xl sm:text-5xl md:text-6xl font-medium text-[#37BEB0] leading-tight"
                    variants={fadeInUp}
                >
                    Welcome to{" "}
                    <span className="text-[#0C6170] font-bold dark:text-white">
                        Upasna Homoeo
                    </span>
                </motion.h1>

                <motion.h2
                    className="text-xl sm:text-2xl text-gray-500 font-semibold"
                    variants={fadeInUp}
                >
                    Trusted Homeopathy Clinic in Ajmer, Rajasthan
                </motion.h2>

                <motion.p
                    className="text-base sm:text-lg text-[#0C6170] max-w-xl mx-auto md:mx-0"
                    variants={fadeInUp}
                >
                    Experience holistic healing with natural remedies. At Upasna
                    Homoeo, we provide gentle, effective, and long-lasting
                    homeopathic treatments that stimulate your body's natural
                    defenses—without side effects.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row items-center gap-4"
                    variants={fadeInUp}
                >
                    <Button
                        variant={"secondary"}
                        className="h-12 px-6 sm:px-8 text-base sm:text-lg rounded-lg shadow-md bg-[#0C6170]  text-white hover:bg-[#04363d] cursor-pointer"
                        aria-label="Book online appointment with Upasna Homoeo in Ajmer"
                    >
                        Book Appointment Online
                    </Button>
                    <span className="hidden sm:inline text-gray-500">OR</span>
                    <Button
                        variant={"outline"}
                        className="h-12 px-6 sm:px-8 text-base sm:text-lg rounded-lg shadow-md border border-[#0C6170] text-[#0C6170] hover:bg-[#0C6170] hover:text-white transition"
                        aria-label="Call Upasna Homoeo Clinic"
                    >
                        Call
                    </Button>
                </motion.div>
            </motion.div>

            {/* Right Section - Hero Image Carousel */}
            <motion.div
                className="flex-1 flex justify-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <Carousel
                    plugins={[Autoplay({ delay: 2000 })]}
                    className="w-full max-w-lg"
                >
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <Image
                                                src={`/carousel/clinic${
                                                    index + 1
                                                }.jpg`}
                                                alt={`Upasna Homoeo Clinic - Image ${
                                                    index + 1
                                                }`}
                                                width={300}
                                                height={300}
                                                className="rounded-md object-cover"
                                            />
                                        </CardContent>
                                    </Card>
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
