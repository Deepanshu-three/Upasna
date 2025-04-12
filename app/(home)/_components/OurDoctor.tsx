import React from "react";

const OurDoctor = () => {
  return (
    <div className="px-4 sm:px-6 md:px-12 py-12 flex flex-col items-center space-y-10 my-10">
      {/* Main Heading */}
      <h1 className="text-2xl sm:text-3xl text-blue-600 font-extrabold text-center">Our Doctor</h1>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-6xl">
        {/* Left Section - Description */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600">
            Dr. Abhinav Verma
          </h2>
          <p className="text-base sm:text-lg text-gray-700">
            Dr. Abhinav Verma is a highly experienced homeopathy specialist with
            years of practice in treating various health conditions. His
            expertise lies in personalized homeopathic treatments, ensuring safe
            and effective recovery without side effects.
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            Specializing in allergies, skin & hair problems, hormonal imbalance,
            and lifestyle disorders, Dr. Abhinav Verma provides expert
            consultations tailored to each patient's needs.
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/home/doctor.png"
            alt="Dr. Abhinav Verma"
            className="w-64 sm:w-80 md:w-[450px] h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default OurDoctor;
