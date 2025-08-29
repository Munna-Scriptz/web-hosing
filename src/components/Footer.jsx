import React from 'react'
import { Link } from 'react-router'
import Logo from '../assets/images/PrideAgency.png'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaPinterestP } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
    <footer className='mt-20 lg:mt-[120px] bg-[#F3F6FB]'>
  <div className='container px-4 lg:px-0'>
    <div id="FooterRow" className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-12 lg:py-[95px]'>
      {/* ----------------Column 1---------------- */}
      <div>
        <Link to={'/'}><img className='w-[120px] lg:w-[150px]' src={Logo} alt="Logo" /></Link>
        <p className='font-inter text-sm md:text-base lg:text-[18px] leading-relaxed lg:leading-[36px] max-w-xs mt-4 text-secondBK'>
          Lorem Ipsum is simply dummy texis the printing Lorem Ips is simply dummy text
        </p>
        <div className='flex items-center gap-3 lg:gap-[10px] mt-6 lg:mt-[42px] flex-wrap'>
          <Link to={'/'} className='border border-[#2f55ef3f] w-9 h-9 rounded-full flex items-center justify-center hover:text-[#2F57EF] duration-300 cursor-pointer'>
            <FaTwitter className='text-sm'/>
          </Link>
          <Link to={'/'} className='border border-[#2f55ef3f] w-9 h-9 rounded-full flex items-center justify-center hover:text-[#2F57EF] duration-300 cursor-pointer'>
            <FaFacebookF className='text-sm'/>
          </Link>
          <Link to={'/'} className='border border-[#2f55ef3f] w-9 h-9 rounded-full flex items-center justify-center hover:text-[#2F57EF] duration-300 cursor-pointer'>
            <IoLogoInstagram className='text-sm'/>
          </Link>
          <Link to={'/'} className='border border-[#2f55ef3f] w-9 h-9 rounded-full flex items-center justify-center hover:text-[#2F57EF] duration-300 cursor-pointer'>
            <FaPinterestP className='text-sm'/>
          </Link>
        </div>
      </div>

      {/* ----------------Column 2---------------- */}
      <div>
        <h2 className='font-inter font-bold text-lg lg:text-[21px] text-secondBK mb-5 lg:mb-[26px]'>Domains</h2>
        <div className='flex flex-col gap-3 lg:gap-[12px]'>
          {["Domain Name Search","Domain Transfer","Domain Privacy","Website Security"].map((item,i)=>(
            <div key={i} className='font-inter text-secondBK text-sm md:text-base lg:text-[17px] flex items-center gap-3 lg:gap-[20px]'>
              <FaArrowRight className='shrink-0'/>
              <Link to={'/'}>{item}</Link>
            </div>
          ))}
        </div>
      </div>

      {/* ----------------Column 3---------------- */}
      <div>
        <h2 className='font-inter font-bold text-lg lg:text-[21px] text-secondBK mb-5 lg:mb-[26px]'>More Service</h2>
        <div className='flex flex-col gap-3 lg:gap-[12px]'>
          {["Ui Design","Ux Design","Digital Marketing","Video Editing","Pc Repairs"].map((item,i)=>(
            <div key={i} className='font-inter text-secondBK text-sm md:text-base lg:text-[17px] flex items-center gap-3 lg:gap-[20px]'>
              <FaArrowRight className='shrink-0'/>
              <Link to={'/'}>{item}</Link>
            </div>
          ))}
        </div>
      </div>

      {/* ----------------Column 4---------------- */}
      <div>
        <h2 className='font-inter font-bold text-lg lg:text-[21px] text-secondBK mb-5 lg:mb-[26px]'>Get In Touch</h2>
        <div className='flex flex-col gap-3 lg:gap-[12px]'>
          <p className='font-inter text-secondBK text-sm md:text-base lg:text-[17px]'><span className='font-bold'>Email:</span> munnascriptz@gmail.com</p>
          <p className='font-inter text-secondBK text-sm md:text-base lg:text-[17px]'><span className='font-bold'>Call:</span> +880 1327-312666</p>
          <p className='font-inter text-secondBK text-sm md:text-base lg:text-[17px]'><span className='font-bold'>Location:</span> Ekrampur CNG Station, Kishoreganj, Dhaka, Bangladesh </p>
        </div>
      </div>
    </div>
  </div>

  {/* ---------Bottom Section--------- */}
  <div className='border-t border-[#19233559]'>
    <div className="container px-4 lg:px-0 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 py-6 lg:py-[30px]">
      <h2 className='font-inter text-secondBK text-sm md:text-base'>© Yoursitename 2023 | All Rights Reserved</h2>
      <div className='font-inter text-secondBK text-sm md:text-base flex flex-wrap items-center gap-4 lg:gap-[43px]'>
        <Link to={'/'}>Terms & Condition</Link>
        <Link to={'/'}>Privacy Policy</Link>
        <Link to={'/'}>Contact Us</Link>
      </div>
    </div>
  </div>
</footer>

    </>
  )
}

export default Footer