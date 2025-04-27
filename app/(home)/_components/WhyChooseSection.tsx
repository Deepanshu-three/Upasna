// app/why-choose/page.tsx
import React from "react";

export const metadata = {
    title: "Why Choose Upasna Homoeo - Best Homeopathy Clinic in Ajmer",
    description:
        "Discover why Upasna Homoeo is Ajmer's trusted homeopathy clinic with 30+ years of experience, expert doctors, and 500K+ happy patients.",
    keywords: [
        "Homeopathy Clinic Ajmer",
        "Upasna Homoeo",
        "Best Homeopathy in Rajasthan",
        "Natural Healing Ajmer",
        "Homeopathy Treatment India",
    ],
    openGraph: {
        title: "Upasna Homoeo - Natural Healing in Ajmer",
        description:
            "Expert homeopathic treatment with 30+ years of experience. Treating 500K+ patients naturally at Upasna Homoeo.",
        url: "https://yourdomain.com/why-choose", // Replace with actual domain
        siteName: "Upasna Homoeo",
        images: [
            {
                url: "https://yourdomain.com/og-image.jpg", // Replace with actual hosted image
                width: 1200,
                height: 630,
                alt: "Upasna Homoeo Clinic",
            },
        ],
        locale: "en_US",
        type: "website",
    },
};

const WhyChoosePage = () => {
    return (
        <div className="px-4 sm:px-6 lg:px-8 py-16 border border-[#0C6170] shadow-xl rounded-xl p-4 m-10 w-full mx-auto">
            <div className="flex flex-col items-center space-y-8 sm:space-y-10 text-center max-w-6xl mx-auto">
                {/* Heading */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#37BEB0]">
                    We Listen. We Understand. We Treat.
                </h1>

                {/* Subheading */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#0C6170]">
                    Why Choose Upasna Homoeo® Clinic?
                </h2>

                {/* Description */}
                <div>
                    <h3 className="text-xl  sm:text-2xl md:text-3xl font-bold text-[#37BEB0]">
                        {" "}
                        Expert Care
                    </h3>
                    <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-4xl">
                        With over 30 years of clinical experience, Upasna
                        Homoeo® Clinic has been providing natural, effective,
                        and side-effect-free treatments to patients.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#37BEB0]">
                        {" "}
                        Holistic Approach
                    </h3>

                    <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-4xl">
                        The clinic focuses on treating the whole person,
                        addressing physical, emotional, and mental well-being.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#37BEB0]">
                        {" "}
                        Personalized Treatment Plans{" "}
                    </h3>
                    <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-4xl">
                        Each treatment is customized to meet the specific needs
                        of the individual, ensuring more targeted and effective
                        healing.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#37BEB0]">
                        {" "}
                        Proven Success{" "}
                    </h3>
                    <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-4xl">
                        Over 200,000 satisfied patients have experienced the
                        clinic's care across 20+ states in India.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#37BEB0]">
                        {" "}
                        Convenient Locations{" "}
                    </h3>
                    <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-4xl">
                        Multiple clinic locations within Ajmer and other parts
                        of India ensure easy access to services.{" "}
                    </p>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full pt-10">
                    <div className="flex flex-col items-center">
                        <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0C6170]">
                            30+
                        </span>
                        <p className="text-base sm:text-lg text-gray-700 mt-2">
                            Years of Clinical Experience
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0C6170]">
                            200K+
                        </span>
                        <p className="text-base sm:text-lg text-gray-700 mt-2 text-center">
                            Patients Treated 
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0C6170]">
                            2+
                        </span>
                        <p className="text-base sm:text-lg text-gray-700 mt-2 text-center">
                            Clinics in Multiple Cities
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChoosePage;
