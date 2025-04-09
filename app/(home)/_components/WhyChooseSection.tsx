import React from "react";

const WhyChooseSection = () => {
  return (
    <div>
      <div className="p-10 flex flex-col items-center space-y-10 text-center my-20">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-blue-600">
          We Listen. We Understand. We Treat.
        </h1>

        {/* Subheading */}
        <h2 className="text-5xl font-bold text-gray-900">
          Why Choose Afecto Homeopathy® Clinic?
        </h2>

        {/* Description */}
        <p className="text-2xl text-gray-700 max-w-4xl">
          Afecto Homeopathy Clinic is the leading homeopathic clinic for all
          types of diseases. Choosing Afecto Homeopathy gives patients access to
          a comprehensive healing method that prioritizes their mental,
          physical, and spiritual health. We constantly focus on individualized
          treatment programs catered to the specific needs of each patient.
        </p>

        <p className="text-2xl text-gray-700 max-w-4xl">
          At Afecto Homeopathy, we support people in their health journeys and
          help them achieve the highest levels of balance. Get 100% safe and
          natural homeopathy treatment today from our expert homeopathic doctors
          in India.
        </p>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 w-full max-w-6xl">
          {/* Years of Experience */}
          <div className="flex flex-col items-center">
            <span className="text-6xl font-bold text-blue-600">30+</span>
            <p className="text-xl text-gray-700">
              Years of Clinical Experience
            </p>
          </div>

          {/* Patients Treated */}
          <div className="flex flex-col items-center">
            <span className="text-6xl font-bold text-blue-600">500K+</span>
            <p className="text-xl text-gray-700">
              Patients Treated across 56+ countries
            </p>
          </div>

          {/* Clinics Across Cities */}
          <div className="flex flex-col items-center">
            <span className="text-6xl font-bold text-blue-600">8+</span>
            <p className="text-xl text-gray-700">
              Our clinics are spread across 8+ cities
            </p>
          </div>

          {/* Doctors and Staff */}
          <div className="flex flex-col items-center">
            <span className="text-6xl font-bold text-blue-600">70+</span>
            <p className="text-xl text-gray-700">
              Doctors and specialized staff across clinics
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSection;
