import React from 'react'
import Banner from '../components/Banner'
import Services from '../components/Services'
import Process from '../components/Process'
import GetInTouch from '../components/GetInTouch'
import Brands from '../components/Brands'
import Testimonials from '../components/Testimonials'
import Knowledge from '../components/Knowledge'
import Article from '../components/Article'

const Home = () => {
  return (
    <>
      <Banner/>
      <Services/>
      <Process/>
      <GetInTouch/>
      <Brands/>
      <Testimonials/>
      <Knowledge/>
      <Article/>
    </>
  )
}

export default Home