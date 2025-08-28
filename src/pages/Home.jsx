import React from 'react'
import Banner from '../components/Banner'
import Services from '../components/Services'
import Process from '../components/Process'
import GetInTouch from '../components/GetInTouch'
import Brands from '../components/Brands'
import Testimonials from '../components/Testimonials'
import VpsAbout from '../components/VpsAbout'
import Article from '../components/Article'
import Pricing from '../components/Pricing'

const Home = () => {
  return (
    <>
      <Banner/>
      <Services/>
      <Process/>
      <Pricing/>
      <GetInTouch/>
      <Brands/>
      <VpsAbout/>
      <Testimonials/>
      <Article/>
    </>
  )
}

export default Home