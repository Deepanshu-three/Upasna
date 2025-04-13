import React from "react";

const WhyChooseSection = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-16 border rounded-xl bg-gradient-to-r from-blue-50 via-gray-100 to-white p-4 m-10 w-full mx-auto">
      <div className="flex flex-col items-center space-y-8 sm:space-y-10 text-center max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-600">
          We Listen. We Understand. We Treat.
        </h1>

        {/* Subheading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
          Why Choose Afecto Homeopathy® Clinic?
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-4xl">
          Afecto Homeopathy Clinic is the leading homeopathic clinic for all types of diseases.
          Choosing Afecto Homeopathy gives patients access to a comprehensive healing method
          that prioritizes their mental, physical, and spiritual health. We constantly focus on
          individualized treatment programs catered to the specific needs of each patient.
        </p>

        <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-4xl">
          At Afecto Homeopathy, we support people in their health journeys and help them achieve
          the highest levels of balance. Get 100% safe and natural homeopathy treatment today
          from our expert homeopathic doctors in India.
        </p>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full pt-10">
          {/* Years of Experience */}
          <div className="flex flex-col items-center">
            <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-600">30+</span>
            <p className="text-base sm:text-lg text-gray-700 mt-2">
              Years of Clinical Experience
            </p>
          </div>

          {/* Patients Treated */}
          <div className="flex flex-col items-center">
            <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-600">500K+</span>
            <p className="text-base sm:text-lg text-gray-700 mt-2 text-center">
              Patients Treated across 56+ countries
            </p>
          </div>

          {/* Clinics Across Cities */}
          <div className="flex flex-col items-center">
            <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-600">8+</span>
            <p className="text-base sm:text-lg text-gray-700 mt-2 text-center">
              Our clinics are spread across 8+ cities
            </p>
          </div>

          {/* Doctors and Staff */}
          <div className="flex flex-col items-center">
            <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-600">70+</span>
            <p className="text-base sm:text-lg text-gray-700 mt-2 text-center">
              Doctors and specialized staff across clinics
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSection;
