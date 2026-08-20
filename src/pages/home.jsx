import React from 'react'
import HeroSection from '../components/Herosection/HeroSection'
import ChannelSlider from '../components/ChannelSlider/ChannelSlider'
import Footer from '../components/Footer/Footer'
import PricingPlans from '../components/Pricing/Pricingplans'
import WhyChooseUs from '../components/Whychooseus/Whychooseus'
import SportsPromo from '../components/SidebySection/Sportspromo'
import FamilyPromo from '../components/Familypromo/Familypromo'
import FaqSection from '../components/Faqs/Faqsection'
import MovieSlider from '../components/Movieslider/Movieslider'
import ChannelsNetworkslider from '../components/channelsNetworkslider/channelsNetworkslider'

function home() {
  return (
    <div>
      <HeroSection/>
      <ChannelSlider/>
      <ChannelsNetworkslider/>
      <WhyChooseUs/>
      <MovieSlider/>
      <SportsPromo/>
      <PricingPlans/>
      <FamilyPromo/>
      <FaqSection/>
      <Footer/>
      
    </div>
  )
}

export default home
