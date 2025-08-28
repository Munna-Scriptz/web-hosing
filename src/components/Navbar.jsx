import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";

import Logo from '../assets/images/domainHostingLogo.png'
import { Link } from 'react-router';
const Navbar = () => {
  return (
    <header>
      {/* ----------------Header Section----------------- */}
        <div className="py-[12px] bg-[#F3F6FB]">
          <div className="container">
            <div className='flex items-center justify-between'>
              <div className="flex items-center gap-2 text-secondBK font-inter text-[17px]">
                <FaLocationDot />
                <p>Dhaka , Bangladesh</p>
              </div>
              <div className="flex items-center gap-[31px] font-inter text-[17px] text-secondBK">
                <p className='flex items-center gap-1'><IoCall /> (629) 555-0129</p>
                <p className='flex items-center gap-1'><MdEmail />munnascriptz@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      {/* ----------------Navbar Section----------------- */}
      <div className="container">
        <nav className="flex items-center justify-between py-4">
          <div className='flex items-center gap-[82px]'>
            <Link to={'/'}><img className='w-[100px]' src={Logo} alt="Logo" /></Link>
            <ul className="flex items-center gap-[24px] font-inter text-base text-secondBK font-medium">
              <li className="hover:text-blue-600 cursor-pointer flex items-center gap-1">Home <FaAngleDown className='text-[10px]'/></li>
              <li className="hover:text-blue-600 cursor-pointer flex items-center gap-1">About Us <FaAngleDown className='text-[10px]'/></li>
              <li className="hover:text-blue-600 cursor-npm run devointer flex items-center gap-1">Services <FaAngleDown className='text-[10px]'/></li>
              <li className="hover:text-blue-600 cursor-pointer flex items-center gap-1">Contact <FaAngleDown className='text-[10px]'/></li>
            </ul>
          </div>
          <div className="flex items-center gap-3">
            <input type="text" placeholder="Search domain..." className="w-[293px] h-[50px] outline-none font-inter border-1 border-[#19233533] pl-[20px] rounded-[5px]" />
            <button className="h-[50px] w-[60px] bg-primary rounded-[5px] flex items-center justify-center text-white text-[20px] cursor-pointer"><IoSearchSharp /></button>
          </div>
        </nav>
      </div>

    </header>
  );
};

export default Navbar;