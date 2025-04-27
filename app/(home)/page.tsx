import React from 'react';
import HeroSection from './_components/HeroSection';
import Treatments from './_components/Treatments';
import WhyChooseSection from './_components/WhyChooseSection';
import HomePopup from '@/components/HomePopUp';

// SEO metadata for the home page
export const metadata = {
  title: "Upasna Homoeo - Best Homeopathy Clinic in Ajmer",
  description:
    "Welcome to Upasna Homoeo, Ajmer’s trusted homeopathy clinic. Over 30+ years of natural healing experience and 500K+ satisfied patients. Book your consultation today.",
  keywords: [
    "Homeopathy Clinic Ajmer",
    "Upasna Homoeo",
    "Natural Healing",
    "Chronic Disease Treatment",
    "Homeopathic Doctor in Ajmer",
    "Best Homeopathy in Rajasthan",
    "500K+ Patients Treated",
  ],
  openGraph: {
    title: "Upasna Homoeo - Trusted Homeopathic Healing in Ajmer",
    description:
      "Upasna Homoeo provides expert, personalized homeopathic treatments. With 30+ years of experience and 500K+ happy patients, we’re here to help you heal naturally.",
    url: "https://upasanahomoeo.com", // Replace with actual domain
    siteName: "Upasna Homoeo",
    images: [
      {
        url: "https://upasanahomoeo.com/og-home.jpg", // Replace with hosted image
        width: 1200,
        height: 630,
        alt: "Upasna Homoeo Clinic",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const Home = () => {
  return (
    <main className="space-y-16 pb-10">
      <HomePopup />
      <HeroSection />
      <Treatments />
      <WhyChooseSection />
    </main>
  );
};

export default Home;
