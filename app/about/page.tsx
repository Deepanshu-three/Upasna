import React from "react";
import Testimonials from "./_components/Testimonials";
import Reviews from "./_components/Reviews";
import BeforeAfter from "./_components/BeforeAndAfter";

// ✅ SEO metadata export for App Router
export const metadata = {
  title: "Why Choose Us | Upasna Homoeo",
  description:
    "Discover why Upasna Homoeo stands out. Led by Dr. Abhinav Verma with 30+ years of experience, we focus on root-cause healing, personalized care, and lasting wellness through homeopathy.",
  keywords: [
    "Upasna Homoeo",
    "Homeopathy Clinic",
    "Dr. Abhinav Verma",
    "Best Homeopathy Doctor",
    "Chronic Disease Treatment",
    "Holistic Healing",
    "Lifestyle Disorders",
    "Natural Treatment",
    "Alternative Medicine",
  ],
  robots: "index, follow",
  authors: [{ name: "Upasna Homoeo" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Why Choose Us | Upasna Homoeo",
    description:
      "Upasna Homoeo, led by Dr. Abhinav Verma, provides compassionate and personalized homeopathic treatments. Trusted by 100,000+ patients over 30 years.",
    url: "https://upasnahomoeo.com/why-us",
    siteName: "Upasna Homoeo",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "Upasna Homoeo Clinic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Choose Upasna Homoeo",
    description:
      "Trusted by thousands, Upasna Homoeo is where compassion meets homeopathy. Learn why families rely on us for healing.",
    images: ["/og-image.jpg"], // Same as OG image
  },
};

const Page = () => {
  return (
    <main className="min-h-screen flex flex-col items-center mt-20 px-4 md:px-8">
      <div className="max-w-7xl w-full mx-auto">
        {/* Heading */}
        <header className="text-center mb-6">
          <h1 className="text-4xl md:text-5xl font-medium text-[#0C6170]">
            Why Upasna Homoeo?
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mt-4 mb-16">
            At Upasna Homoeo, we take pride in a holistic healing approach. We go
            beyond treating symptoms — we listen, understand, and tailor treatments
            that promote total well-being. Our clinic is built around empathy,
            personal attention, and results that matter to our patients.
          </p>
        </header>

        {/* Doctor Section */}
        <section className="flex flex-col lg:flex-row items-center gap-10 mb-10 p-4 sm:p-8 border border-[#0C6170] shadow-xl rounded-xl mx-auto w-full max-w-7xl">
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="/docVerma.jpeg"
              alt="Dr. Abhinav Verma, Homeopathy Specialist"
              className="w-full max-w-md object-cover border-2 border-[#0C6170] shadow-xl rounded-xl"
            />
          </div>
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-2xl md:text-4xl font-medium text-[#0C6170]">
              Dr. Abhinav Verma
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              With over <strong>30 years</strong> of dedicated service in the field
              of homeopathy, Dr. Abhinav Verma has helped transform the lives of
              over <strong>100,000 patients</strong>. His expertise lies in combining
              traditional methods with deep patient understanding and compassion.
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
        </section>
      </div>

      {/* Testimonials */}
      <section className="w-full border border-[#0C6170] shadow-xl py-16 m-4 rounded-xl mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Testimonials />
        </div>
      </section>

      {/* Reviews */}
      <section className="w-full border border-[#0C6170] shadow-xl rounded-xl mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reviews />
        </div>
      </section>

      {/* Before and After */}
      <section className="w-full border border-[#0C6170] shadow-xl rounded-xl py-16 m-4 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BeforeAfter />
        </div>
      </section>
    </main>
  );
};

export default Page;
