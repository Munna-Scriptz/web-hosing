import React, { useEffect, useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import Logo from '../assets/images/PrideAgency.png'
import { Link } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { LangSelected } from '../LangSlice';


const Navbar = () => {
  const dispatch = useDispatch()
  const lang = useSelector((state)=>state.MyRedux.value)

  // ------------Lang Handler--------------
  const handleLang = (e)=>{
    localStorage.setItem('langName' , e.target.value)
    dispatch(LangSelected(localStorage.getItem('langName')))
  }
  
  return (
    <nav className='lg:block hidden'>
      {/* ----------------Header Section----------------- */}
        <header className="py-[12px] bg-[#F3F6FB]">
          <div className="container">
            <div className='flex items-center justify-between'>
              <div className="flex items-center gap-2 text-secondBK font-inter text-[17px]">
                <FaLocationDot />
                <p>Ekrampur CNG Station, Kishoreganj, Dhaka</p>
              </div>
              <div className="flex items-center gap-[31px] font-inter text-[17px] text-secondBK">
                {/* ---------Language Selector-------- */}
                <select id="lang-switch" value={lang || ''} onChange={handleLang} className='cursor-pointer font-inter text-secondBK outline-none'>
                  <option value="en">English</option>
                  <option value="bn">Bangla</option>
                </select>
                {/* -----------Contact info------------ */}
                <p className='flex items-center gap-1'><IoCall />+880 1327-312666</p>
                <p className='flex items-center gap-1'><MdEmail />munnascriptz@gmail.com</p>
              </div>
            </div>
          </div>
        </header>
      {/* ----------------Navbar Section----------------- */}
      <div className="container">
        <nav className="flex items-center justify-between py-4">
          <div className='flex items-center gap-[82px]'>
            <Link to={'/'}><img className='w-[100px]' src={Logo} alt="Logo" /></Link>
            <ul className="flex items-center gap-[24px] font-inter text-base text-secondBK font-medium">
              {lang === 'en' && <li className="hover:text-brand duration-400 cursor-pointer flex items-center gap-1">Home <FaAngleDown className='text-[10px]'/></li>}
              {lang === 'bn' && <li className="hover:text-brand duration-400 cursor-pointer flex items-center gap-1">বাড়ি <FaAngleDown className='text-[10px]'/></li>}
              {lang === 'en' && <li className="hover:text-brand duration-400 cursor-pointer flex items-center gap-1">About Us <FaAngleDown className='text-[10px]'/></li>}
              {lang === 'bn' && <li className="hover:text-brand duration-400 cursor-pointer flex items-center gap-1">আমাদের সম্পর্কে <FaAngleDown className='text-[10px]'/></li>}
              {lang === 'en' && <li className="hover:text-brand duration-400 cursor-pointer flex items-center gap-1">Services <FaAngleDown className='text-[10px]'/></li>}
              {lang === 'bn' && <li className="hover:text-brand duration-400 cursor-pointer flex items-center gap-1">সেবা <FaAngleDown className='text-[10px]'/></li>}
              {lang === 'en' && <li className="hover:text-brand duration-400 cursor-pointer flex items-center gap-1">Contact <FaAngleDown className='text-[10px]'/></li>}
              {lang === 'bn' && <li className="hover:text-brand duration-400 cursor-pointer flex items-center gap-1">যোগাযোগ <FaAngleDown className='text-[10px]'/></li>}
            </ul>
          </div>
          <div className="flex items-center gap-3">
            <input type="text" placeholder="Search domain..." className="w-[293px] h-[50px] outline-none font-inter border-1 border-[#19233533] pl-[20px] rounded-[5px]" />
            <button className="h-[50px] w-[60px] bg-primary rounded-[5px] flex items-center justify-center text-white text-[20px] cursor-pointer hover:bg-secondBK duration-400"><IoSearchSharp /></button>
          </div>
        </nav>
      </div>

    </nav>
  );
};

export default Navbar;