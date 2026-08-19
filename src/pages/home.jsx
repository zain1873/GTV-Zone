import React from 'react'
import HeroSection from '../components/Herosection/HeroSection'
import ChannelSlider from '../components/ChannelSlider/ChannelSlider'
import Footer from '../components/Footer/Footer'
import PricingPlans from '../components/Pricing/Pricingplans'
import WhyChooseUs from '../components/Whychooseus/Whychooseus'
import SportsPromo from '../components/SidebySection/Sportspromo'
import FamilyPromo from '../components/Familypromo/Familypromo'
import FaqSection from '../components/Faqs/Faqsection'

function home() {
  return (
    <div>
      <HeroSection/>
      <ChannelSlider/>
      <WhyChooseUs/>
      <SportsPromo/>
      <PricingPlans/>
      <FamilyPromo/>
      <FaqSection/>
      <Footer/>
      
    </div>
  )
}

export default home
