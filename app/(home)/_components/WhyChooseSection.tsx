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
    <div className="px-4 sm:px-6 lg:px-8 py-16 border rounded-xl bg-gradient-to-r from-blue-50 via-gray-100 to-white p-4 m-10 w-full mx-auto">
      <div className="flex flex-col items-center space-y-8 sm:space-y-10 text-center max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-600">
          We Listen. We Understand. We Treat.
        </h1>

        {/* Subheading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
          Why Choose Upasna Homoeo® Clinic?
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-4xl">
          Upasna Homoeo Clinic is a trusted homeopathic clinic for a wide range of chronic and acute conditions. 
          Our approach emphasizes holistic healing, focusing on the patient’s physical, emotional, and mental well-being. 
          We craft personalized treatment plans based on each individual’s needs.
        </p>

        <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-4xl">
          Our expert homeopaths in Ajmer and across India are committed to providing natural, effective, 
          and side-effect-free care to over 500K+ satisfied patients. Begin your wellness journey with 
          Upasna Homoeo today.
        </p>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full pt-10">
          <div className="flex flex-col items-center">
            <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-600">30+</span>
            <p className="text-base sm:text-lg text-gray-700 mt-2">Years of Clinical Experience</p>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-600">500K+</span>
            <p className="text-base sm:text-lg text-gray-700 mt-2 text-center">
              Patients Treated Across 56+ Countries
            </p>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-600">2+</span>
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
