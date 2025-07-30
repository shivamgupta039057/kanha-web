import SubHeader from '@/utils/SubHeader'
import React from 'react'
import Banner from '../home/banner/Banner'
import PricesData from '../home/Prices/PricesData'
import HotelFacilities from '../home/hotelFacilities/HotelFacilities'
import MeetOurTeam from './MeetOurTeam'
import Testimonials from '../home/Testimonials/Testimonials'
import About from '../home/about/About'

const AboutPage = () => {
  return (
  <>
  <SubHeader title="About Us" subtitle="Luxury Hotel" rating="5" />
  <About />
  <PricesData />
  <HotelFacilities />
  {/* <MeetOurTeam /> */}
  <Testimonials />
  </>
  )
}

export default AboutPage