import React from 'react'
import HeroSection from './_components/HeroSection'
import Testimonials from './_components/Testimonials'
import { Separator } from '@/components/ui/separator'
import Treatments from './_components/Treatments'
import OurDoctor from './_components/OurDoctor'
import WhyChooseSection from './_components/WhyChooseSection'
import Reviews from './_components/Reviews'
import BeforeAfter from './_components/BeforeAndAfter'
import FAQs from './_components/Faq'

const Home = () => {
  return (
    <div className='space-y-10'>
      <HeroSection />
      <Treatments />
      <Testimonials />
      <OurDoctor />
      <WhyChooseSection />
      <Reviews />
      <BeforeAfter />
      <FAQs />
    </div>
  )
}

export default Home