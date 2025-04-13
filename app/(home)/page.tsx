import React from 'react'
import HeroSection from './_components/HeroSection'
import Testimonials from '../about/_components/Testimonials'
import { Separator } from '@/components/ui/separator'
import Treatments from './_components/Treatments'
import OurDoctor from './_components/OurDoctor'
import WhyChooseSection from './_components/WhyChooseSection'
import Reviews from '../about/_components/Reviews'
import BeforeAfter from './_components/BeforeAndAfter'
import FAQs from './_components/Faq'
import HomePopup from '@/components/HomePopUp'

const Home = () => {
  return (
    <div className='space-y-10'>
      {/* <HomePopup /> */}
      <HeroSection />
      <Treatments />
      <WhyChooseSection />
      <BeforeAfter />
    </div>
  )
}

export default Home