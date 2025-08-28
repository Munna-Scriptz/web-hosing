
import React from 'react'
import { Link } from 'react-router'
import { FaAngleDown } from "react-icons/fa6";
import Graph1 from '../assets/images/BannerGraph1.png'
import Graph2 from '../assets/images/BannerGraph2.png'
import ScholarShip from '../assets/images/BannerImg.png'
import Percentage from '../assets/images/Percentage.png'

const Banner = () => {
  return (
    <>
      <section id='Banner' className='mt-[65px]'>
        <div className="container">
          {/* ---------------Row One----------------- */}
          <div id="BannerRowOne" className='flex items-center justify-between'>
            <h1 className='font-inter font-bold text-secondBK text-[75px] w-[857px]'>Expand Your Horizons through <span className='text-[#2F57EF]'>Education</span></h1>
            <div>
              <p className='font-inter text-[21px] text-secondBK mb-[49px]'>Education for a Better Tomorrow.</p>
              <Link className='py-[25px] px-[45px] border-1 rounded-[5px] border-primary font-inter font-medium text-[15px] text-secondBK' to={'/'}>Contact Us</Link>
            </div>
          </div>
          {/* ---------------Row One----------------- */}
          <div id='BannerRowTwo' className='flex items-center justify-between mt-[78px]'>
            <div className='flex flex-col items-center gap-[30px]'>
              <img src={Graph1} alt="Graph" />
              <img src={Graph2} alt="Graph" />
            </div>
            <div className='rounded-b-[20px]'>
              <img src={ScholarShip} alt="ScholarShip IMage" />
            </div>
            <div className='flex flex-col '>
              <div>
                <h2 className='text-[#233A45] text-[18px] font-inter font-medium'>Lorem ipsum</h2>
                <p className='text-[#7C7D93] font-inter text-base mb-[20px]'>Lorem ipsum dolor sit amet</p>
              </div>
              <div> 
                <img src={Percentage} alt="Image" />
              </div>
              <div>
                <p className='text-[#7C7D93] font-inter text-base w-[210px] my-[24px]'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                <Link className='bg-[#FFD465] w-[192px] h-[39px] flex items-center justify-center rounded-full text-[#233A45] font-medium' to={'/'}>Subscription</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner