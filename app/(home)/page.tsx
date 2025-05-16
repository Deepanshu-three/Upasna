import React from 'react';
import HeroSection from './_components/HeroSection';
import Treatments from './_components/Treatments';
import WhyChooseSection from './_components/WhyChooseSection';
import HomePopup from '@/components/HomePopUp';

// SEO metadata for the home page
export const metadata = {
  title: "Upasna Homoeo – Best Homeopathy Clinic in Ajmer for Natural Healing",
  description:
    "Get expert homeopathic care at Upasna Homoeo, Ajmer. 30+ years of experience, 500K+ patients healed. Book an appointment today for natural, personalized treatment.",
  keywords: [
    "Homeopathy Clinic Ajmer",
    "Upasna Homoeo",
    "Natural Healing Ajmer",
    "Homeopathy Rajasthan",
    "Homeopathic Doctor Ajmer",
    "Chronic Disease Homeopathy",
    "Trusted Homeopathy India",
  ],
  openGraph: {
    title: "Upasna Homoeo | Ajmer’s Leading Homeopathy Clinic for Chronic Healing",
    description:
      "Join 500K+ patients who trust Upasna Homoeo in Ajmer for effective, compassionate homeopathic treatment backed by 30+ years of healing experience.",
    url: "https://www.upasanahomoeo.com",
    siteName: "Upasna Homoeo",
    images: [
      {
        url: "https://www.upasanahomoeo.com/images/og-home.jpg", // ✅ Make sure this is hosted
        width: 1200,
        height: 630,
        alt: "Upasna Homoeo - Homeopathy Clinic in Ajmer",
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
