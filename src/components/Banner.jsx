import React from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import domain1 from '../assets/images/domain1.png'
import domain2 from '../assets/images/infodomain.svg'
import domain3 from '../assets/images/domain3.webp'
import domain4 from '../assets/images/domain4.webp'
import domain5 from '../assets/images/domain5.png'
import BannerImage from '../assets/images/bannerRightImg.svg'

const Banner = () => {
  const lang = localStorage.getItem('langName')
  return (
    <>
      <section id='Banner' className='mt-[65px]'>
        <div className="container">
          <div id='Banner-Row' className='flex items-center justify-between'>
            {/* --------------Left Side------------ */}
            <div>
              {/* ---------------Row One----------------- */}
              <div>
                {lang === 'en' && <h1 className='font-inter font-bold text-secondBK lg:text-[48px] text-[36px] lg:w-[500px]'>Search For Your Own Unique <span className='text-brand'>Domain !</span></h1>}
                {lang === 'bn' && <h1 className='font-inter font-bold text-secondBK lg:text-[48px] text-[36px] lg:w-[500px]'>আমরা প্রস্তুত আপনার ব্যবসায়িক সফলতা নিশ্চিত <span className='text-brand'>করতে</span></h1>}
                {lang === 'en' && <p className='font-inter text-[#969696] mt-5 lg:w-[500px] lg:text-lg text-base'>Searching for that perfect domain? Progressively benchmark turnkey innovation after quality channels.</p>}
                {lang === 'bn' && <p className='font-inter text-[#969696] mt-5 lg:w-[500px] lg:text-lg text-base'>সেই নিখুঁত ডোমেন খুঁজছেন? ধীরে ধীরে মানসম্পন্ন চ্যানেলের পরে টার্নকি উদ্ভাবনের মানদণ্ড তৈরি করছেন।</p>}
              </div>
              {/* ---------------Input----------------- */}
              <div className='mt-10'>
                <div className='relative lg:w-[600px] h-[60px]'>
                  <input className='w-full h-full border-1 border-[#19233533] outline-none rounded-[8px] pl-[20px] text-secondBK font-inter' placeholder='Example.com' type="text"/>
                  <button className='absolute top-0 right-0 h-full lg:w-[120px] w-[100px]  rounded-r-[8px] cursor-pointer font-inter bg-brand text-white flex items-center justify-center gap-2 hover:bg-secondBK duration-400'><IoSearchOutline className='text-lg'/>Search</button>
                </div>
                {/* -----------Domain Show and starting------------- */}
                <div className='mt-6 flex flex-wrap justify-center items-center gap-5'>
                  <div className='flex flex-col items-center cursor-pointer'>
                    <img className='w-[70px] h-[28px]' src={domain4} alt="domain" />
                    <p className='font-inter text-[#838383] text-sm font-medium mt-1'>$9.99</p>
                  </div>
                  <div className='flex flex-col items-center cursor-pointer'>
                    <img className='w-[90px] h-[35px]' src={domain1} alt="domain" />
                    <p className='font-inter text-[#838383] text-sm font-medium mt-1'>$7.99</p>
                  </div>
                  <div className='flex flex-col items-center cursor-pointer'>
                    <img className='w-[90px] h-[35px]' src={domain3} alt="domain" />
                    <p className='font-inter text-[#838383] text-sm font-medium mt-1'>$5.99</p>
                  </div>
                  <div className='flex flex-col items-center cursor-pointer'>
                    <img className='w-[60px] h-[28px]' src={domain2} alt="domain" />
                    <p className='font-inter text-[#838383] text-sm font-medium mt-1'>$9.99</p>
                  </div>
                  <div className='flex flex-col items-center cursor-pointer'>
                    <img className='w-[70px] h-[28px]' src={domain5} alt="domain" />
                    <p className='font-inter text-[#838383] text-sm font-medium mt-1'>$9.99</p>
                  </div>
                </div>
                <div className='mt-8'>
                {lang === 'en' && <p className='text-secondBK font-inter font-medium'>Starting At Only</p>}
                {lang === 'bn' && <p className='text-secondBK font-inter font-medium'>শুধুমাত্র শুরু</p>}
                {lang === 'en' && <h2 className='text-secondBK font-inter text-3xl mt-2 font-semibold'>$2.78/<span className='text-brand'>mo</span></h2>}
                {lang === 'bn' && <h2 className='text-secondBK font-inter text-3xl mt-2 font-semibold'>339.18৳/<span className='text-brand'>মাস</span></h2>}
                </div>
              </div>
            </div>
            {/* --------------Right Side------------ */}
            <div className='md:block hidden'>
              <img className='w-[550px]' src={BannerImage} alt="Banner Image" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner