import React from "react";
import Testimonials from "./_components/Testimonials";
import Reviews from "./_components/Reviews";

const page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center mt-20 px-4 md:px-8">
      <div className="max-w-7xl w-full mx-auto">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 text-center mb-6">
          Why Upasna Homoeo?
        </h1>

        {/* Intro Paragraph */}
        <p className="text-lg md:text-xl text-gray-700 text-center leading-relaxed mb-16">
          At Upasna Homoeo, we take pride in a holistic healing approach. We go
          beyond treating symptoms — we listen, understand, and tailor treatments
          that promote total well-being. Our clinic is built around empathy,
          personal attention, and results that matter to our patients.
        </p>

        {/* Doctor Section */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-10 p-4 sm:p-8 border rounded-xl bg-gradient-to-r from-white via-gray-100 to-blue-50 mx-auto w-full max-w-7xl">
          {/* Doctor Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="/docVerma.jpeg" // Replace with actual image
              alt="Dr. Abhinav Verma"
              className="w-full max-w-md rounded-xl shadow-lg object-cover"
            />
          </div>

          {/* Doctor Info */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-blue-700">
              Dr. Abhinav Verma
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              With over <strong>30 years</strong> of dedicated service in the
              field of homeopathy, Dr. Abhinav Verma has helped transform the
              lives of over <strong>100,000 patients</strong>. His expertise lies
              in combining traditional methods with deep patient understanding
              and compassion.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Specialist in chronic and lifestyle-related disorders</li>
              <li>Trusted by thousands of families for effective homeopathy</li>
              <li>Focus on root-cause healing and lasting relief</li>
              <li>Known for ethical, kind, and honest patient care</li>
            </ul>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Dr. Verma is not only a doctor, but also a compassionate guide who
              stands by his patients through their journey to wellness.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="w-full bg-gradient-to-r from-gray-50 via-gray-100 to-white py-16 m-4 border rounded-xl mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Testimonials />
        </div>
      </div>

      {/* Reviews Section */}
      <div className="w-full bg-gradient-to-r from-white via-gray-50 to-blue-50 py-16 m-4 border rounded-xl mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reviews />
        </div>
      </div>
    </div>
  );
};

export default page;
