import React from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import domain1 from '../assets/images/domain1.png'
import domain2 from '../assets/images/infodomain.svg'
import domain3 from '../assets/images/domain3.webp'
import domain4 from '../assets/images/domain4.webp'
import domain5 from '../assets/images/domain5.png'
import BannerImage from '../assets/images/bannerRightImg.svg'

const Banner = () => {
  return (
    <>
      <section id='Banner' className='mt-[65px]'>
        <div className="container">
          <div id='Banner-Row' className='flex items-center justify-between'>
            {/* --------------Left Side------------ */}
            <div>
              {/* ---------------Row One----------------- */}
              <div>
                <h1 className='font-inter font-bold text-secondBK text-[48px] w-[500px]'>Search For Your Own Unique <span className='text-brand'>Domain !</span></h1>
                <p className='font-inter text-[#969696] mt-5 w-[500px] text-lg'>Searching for that perfect domain? Progressively benchmark turnkey innovation after quality channels.</p>
              </div>
              {/* ---------------Input----------------- */}
              <div className='mt-10'>
                <div className='relative w-[600px] h-[60px]'>
                  <input className='w-full h-full border-1 border-[#19233533] outline-none rounded-[8px] pl-[20px] text-secondBK font-inter' placeholder='Example.com' type="text"/>
                  <button className='absolute top-0 right-0 h-full w-[120px] rounded-r-[8px] cursor-pointer font-inter bg-brand text-white flex items-center justify-center gap-2'><IoSearchOutline className='text-lg'/>Search</button>
                </div>
                {/* -----------Domain Show and starting------------- */}
                <div className='mt-5 flex items-center gap-5'>
                  <div className='flex flex-col items-center'>
                    <img className='w-[70px] h-[30px]' src={domain4} alt="domain" />
                    <p className='font-inter text-[#838383] text-sm font-medium mt-1'>$9.99</p>
                  </div>
                  <div className='flex flex-col items-center'>
                    <img className='w-[90px] h-[30px]' src={domain1} alt="domain" />
                    <p className='font-inter text-[#838383] text-sm font-medium mt-1'>$7.99</p>
                  </div>
                  <div className='flex flex-col items-center'>
                    <img className='w-[90px] h-[30px]' src={domain3} alt="domain" />
                    <p className='font-inter text-[#838383] text-sm font-medium mt-1'>$5.99</p>
                  </div>
                  <div className='flex flex-col items-center'>
                    <img className='w-[60px] h-[30px]' src={domain2} alt="domain" />
                    <p className='font-inter text-[#838383] text-sm font-medium mt-1'>$9.99</p>
                  </div>
                  <div className='flex flex-col items-center'>
                    <img className='w-[70px] h-[30px]' src={domain5} alt="domain" />
                    <p className='font-inter text-[#838383] text-sm font-medium mt-1'>$9.99</p>
                  </div>
                </div>
                <div className='mt-8'>
                  <p className='text-secondBK font-inter font-medium'>Starting At Only</p>
                  <h2 className='text-secondBK font-inter text-3xl mt-2 font-semibold'>$2.78/<span className='text-brand'>mo</span></h2>
                </div>
              </div>
            </div>
            {/* --------------Right Side------------ */}
            <div>
              <img className='w-[550px]' src={BannerImage} alt="Banner Image" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner