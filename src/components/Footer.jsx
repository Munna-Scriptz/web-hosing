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
        <footer className='mt-[120px] bg-[#F3F6FB]'>
            <div className='container'>
              <div id="FooterRow" className='flex items-start justify-between py-[95px]'>
                {/* ----------------Column 1---------------- */}
                <div>
                  <Link to={'/'}><img className='w-[150px]' src={Logo} alt="Logo" /></Link>
                  <p className='font-inter text-[18px] leading-[36px] w-[300px] text-secondBK'>Lorem Ipsum is simply dummy texis the printing Lorem Ips is simply dummy text</p>
                  <div className='flex items-center gap-[10px] mt-[42px]'>
                    <Link to={'/'} className='border-1 border-[#2f55ef3f] w-[35px] h-[35px] rounded-full flex items-center justify-center hover:text-[#2F57EF] duration-[.3s] cursor-pointer'>
                      <FaTwitter className='text-[15px]'/>
                    </Link>
                    <Link to={'/'} className='border-1 border-[#2f55ef3f] w-[35px] h-[35px] rounded-full flex items-center justify-center hover:text-[#2F57EF] duration-[.3s] cursor-pointer'>
                      <FaFacebookF className='text-[15px]'/>
                    </Link>
                    <Link to={'/'} className='border-1 border-[#2f55ef3f] w-[35px] h-[35px] rounded-full flex items-center justify-center hover:text-[#2F57EF] duration-[.3s] cursor-pointer'>
                      <IoLogoInstagram className='text-[15px]'/>
                    </Link>
                    <Link to={'/'} className='border-1 border-[#2f55ef3f] w-[35px] h-[35px] rounded-full flex items-center justify-center hover:text-[#2F57EF] duration-[.3s] cursor-pointer'>
                      <FaPinterestP className='text-[15px]'/>
                    </Link>
                  </div>
                </div>
                {/* ----------------Column 2---------------- */}
                <div>
                    <h2 className='font-inter font-bold text-[21px] text-secondBK mb-[26px]'>Domains</h2>
                    <div className='flex flex-col gap-[12px]'>
                      <div className='font-inter text-secondBK text-[17px] flex items-center gap-[20px]'>
                        <FaArrowRight />
                        <Link to={'/'}>Domain Name Search</Link>
                      </div>
                      <div className='font-inter text-secondBK text-[17px] flex items-center gap-[20px]'>
                        <FaArrowRight />
                        <Link to={'/'}>Domain Transfer</Link>
                      </div>
                      <div className='font-inter text-secondBK text-[17px] flex items-center gap-[20px]'>
                        <FaArrowRight />
                        <Link to={'/'}>Domain Privacy</Link>
                      </div>
                      <div className='font-inter text-secondBK text-[17px] flex items-center gap-[20px]'>
                        <FaArrowRight />
                        <Link to={'/'}>Website Security</Link>
                      </div>
                    </div>
                </div>
                {/* ----------------Column 3---------------- */}
                <div>
                    <h2 className='font-inter font-bold text-[21px] text-secondBK mb-[26px]'>More Servicve</h2>
                    <div className='flex flex-col gap-[12px]'>
                      <div className='font-inter text-secondBK text-[17px] flex items-center gap-[20px]'>
                        <FaArrowRight />
                        <Link to={'/'}>Ui Design</Link>
                      </div>
                      <div className='font-inter text-secondBK text-[17px] flex items-center gap-[20px]'>
                        <FaArrowRight />
                        <Link to={'/'}>Ux Design</Link>
                      </div>
                      <div className='font-inter text-secondBK text-[17px] flex items-center gap-[20px]'>
                        <FaArrowRight />
                        <Link to={'/'}>Digital Marketing</Link>
                      </div>
                      <div className='font-inter text-secondBK text-[17px] flex items-center gap-[20px]'>
                        <FaArrowRight />
                        <Link to={'/'}>Video Editing</Link>
                      </div>
                      <div className='font-inter text-secondBK text-[17px] flex items-center gap-[20px]'>
                        <FaArrowRight />
                        <Link to={'/'}>Pc Repairs</Link>
                      </div>
                    </div>
                </div>
                {/* ----------------Column 4---------------- */}
                <div>
                    <h2 className='font-inter font-bold text-[21px] text-secondBK mb-[26px]'>Get In Touch</h2>
                    <div className='flex flex-col gap-[12px]'>
                      <div className='font-inter text-secondBK text-[17px] flex items-center gap-[20px]'>
                        <Link to={'/'}>munnascriptz@gmail.com</Link>
                      </div>
                      <div className='font-inter text-secondBK text-[17px] flex items-center gap-[20px]'>
                        <Link to={'/'}>Call: +880 1327-312666</Link>
                      </div>
                      <div className='font-inter text-secondBK text-[17px] flex items-center gap-[20px]'>
                        <Link to={'/'}>Location: Dhaka , Bangladesh</Link>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            {/* ---------Bottom Section--------- */}
            <div className='border-t-1 border-[#19233559]'>
              <div className="container flex items-center justify-between py-[30px]">
                <h2 className='font-inter text-secondBK text-[16px]'>© Yoursitename  2023 | All Rights Reserved</h2>
                <div className='font-inter text-secondBK text-[16px] flex items-center gap-[43px]'>
                  <Link to={'/'}>Trams & Condition</Link>
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