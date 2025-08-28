import React from 'react'
import Wrincle from '../assets/images/wrincle.png'
import smile from '../assets/images/smile.png'
import beaming from '../assets/images/beaming.png'
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { FaRegStar } from "react-icons/fa";

const Pricing = () => {
  return (
    <>
        <section id='Pricing' className='mt-[112px]'>
            <div className="container">
                <div id="Pricing-Row">
                    {/* ------------Header-------------- */}
                    <div><h2 className='text-[#131022] lg:text-[40px] text-[32px] font-extrabold text-center font-manrope'>Transparent Pricing for You</h2></div>
                    <div className='flex items-center justify-center mt-10'>
                        <div className='flex items-center gap-[16px]'>
                            <p className='font-manrope font-semibold text-[#585C7B]'>Bill Monthly</p>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer"/>
                                <div className="group peer ring-0 bg-brand  rounded-full outline-none duration-300 after:duration-300 w-[46px] h-[26px]  shadow-md peer-checked:bg-emerald-500  peer-focus:outline-none  after:content-[''] after:rounded-full after:absolute after:bg-gray-50 after:outline-none after:h-[20px] after:w-[20px] after:top-1 after:left-1 after:flex after:justify-center after:items-center peer-checked:after:translate-x-5 peer-hover:after:scale-95">
                                </div>
                            </label>
                            <p className='font-manrope font-semibold text-[#585C7B] peer-checked:text-brand'>Bill Annualy</p>
                        </div>
                    </div>
                    {/* ------------Pricing Card-------------- */}
                    <div className='flex lg:flex-row flex-col lg:gap-y-0 gap-y-5 items-center justify-between mt-10'>
                        {/* -------------First Card------------- */}
                        <div className='lg:w-[400px] w-full lg:p-10 p-7 border-1 border-[#E2E5F1] rounded-[8px] flex items-center flex-col duration-[.3s] hover:shadow-lg shadow-[#6366F159]'>
                            <div><img src={Wrincle} alt="Emoji" /></div>
                            <div>
                                <p className='text-[#9397AD] text-lg mb-1'>Medium traffic personal sites</p>
                                <h2 className='text-[#131022] text-[32px] font-extrabold font-manrope flex items-start justify-center gap-[2px]'>$ 69 <span className='text-lg'>99</span></h2>
                            </div>
                            {/* ---------Border---------- */}
                            <span className='w-full h-[1px] bg-[#E2E5F1] my-4'></span>
                            {/* ---------Border---------- */}
                            <div className='w-full'>
                                <ul className='flex flex-col gap-2'>
                                    <li className='text-[#585C7B] text-sm font-normal flex items-center md:gap-[4px] gap-[10px]'>
                                        <FaCheck className='text-brand text-lg'/>
                                        <p>10 Hosted Domains</p>
                                    </li>
                                    <li className='text-[#585C7B] text-sm font-normal flex items-center md:gap-[4px] gap-[10px]'>
                                        <FaCheck className='text-brand text-lg'/>
                                        <p>50 GB RAID 3 Storage</p>
                                    </li>
                                    <li className='text-[#585C7B] text-sm font-normal flex items-center md:gap-[4px] gap-[10px]'>
                                        <FaCheck className='text-brand text-lg'/>
                                        <p>500 GB Bandwidth</p>
                                    </li>
                                    <li className='text-[#585C7B] text-sm font-normal flex items-center md:gap-[4px] gap-[10px]'>
                                        <FaCheck className='text-brand text-lg'/>
                                        <p>1 Free Domain included</p>
                                    </li>
                                    <li className='text-[#585C7B] text-sm font-normal flex items-center md:gap-[4px] gap-[10px]'>
                                        <FaCheck className='text-brand text-lg'/>
                                        <p>Fast SSD Storage</p>
                                    </li>
                                    <li className='text-[#585C7B] text-sm font-normal flex items-center md:gap-[4px] gap-[10px]'>
                                        <RxCross2 className='text-[#585C7B] text-lg'/>
                                        <p>Free SSL Certificate</p>
                                    </li>
                                    <li className='text-[#585C7B] text-sm font-normal flex items-center md:gap-[4px] gap-[10px]'>
                                        <RxCross2 className='text-[#585C7B] text-lg'/>
                                        <p>99.95% Uptime</p>
                                    </li>
                                    <li className='text-[#585C7B] text-sm font-normal flex items-center md:gap-[4px] gap-[10px]'>
                                        <RxCross2 className='text-[#585C7B] text-lg'/>
                                        <p>24/7 Phone Support</p>
                                    </li>
                                </ul>
                                <div className='mt-13'>
                                    <button className='py-[12px] w-full text-brand border-1 border-[#6366F159] rounded-[6px] font-semibold text-sm hover:bg-brand hover:text-white duration-[.3s] cursor-pointer'>Purchase Now</button>
                                </div>
                            </div>
                        </div>
                        {/* -------------Second Card------------- */}
                        <div className='relative lg:w-[400px] w-full lg:p-10 p-7 border-1 border-[#E2E5F1] rounded-[8px] flex items-center flex-col duration-[.3s] hover:shadow-lg shadow-[#6366F159]'>
                            <div><img src={smile} alt="Emoji" /></div>
                            {/* ------------Status------------- */}
                            <div className='absolute top-[16px] left-0 drop-shadow-md drop-shadow-success bg-success py-[6px] px-[8px] text-white text-sm font-semibold rounded-r-[4px] flex items-center gap-1'><FaRegStar className='text-[14px]'/><p>Popular</p></div>
                            {/* ------------Status------------- */}
                            <div>
                                <p className='text-[#9397AD] text-lg mb-1'>High traffic corporate sites</p>
                                <h2 className='text-[#131022] text-[32px] font-extrabold flex items-start justify-center font-manrope gap-[2px]'>$ 169 <span className='text-lg'>99</span></h2>
                            </div>
                            {/* ---------Border---------- */}
                            <span className='w-full h-[1px] bg-[#E2E5F1] my-4'></span>
                            {/* ---------Border---------- */}
                            <div className='w-full'>
                                <ul className='flex flex-col gap-2'>
                                    <li className='text-[#585C7B] text-sm font-normal flex items-center md:gap-[4px] gap-[10px]'>
                                        <FaCheck className='text-brand text-lg'/>
                                        <p>30 Hosted Domains</p>
                                    </li>
                                    <li className='text-[#585C7B] text-sm font-normal flex items-center md:gap-[4px] gap-[10px]'>
                                        <FaCheck className='text-brand text-lg'/>
                                        <p>100 GB RAID 5 Storage</p>
                                    </li>
                                    <li className='text-[#585C7B] text-sm font-normal flex items-center md:gap-[4px] gap-[10px]'>
                                        <FaCheck className='text-brand text-lg'/>
                                        <p>1000 GB Bandwidth</p>
                                    </li>
                                    <li className='text-[#585C7B] text-sm font-normal flex items-center md:gap-[4px] gap-[10px]'>
                                        <FaCheck className='text-brand text-lg'/>
                                        <p>3 Free Domain included</p>
                                    </li>
                                    <li className='text-[#585C7B] text-sm font-normal flex items-center md:gap-[4px] gap-[10px]'>
                                        <FaCheck className='text-brand text-lg'/>
                                        <p>Super Fast SSD Storage</p>
                                    </li>
                                    <li className='text-[#585C7B] text-sm font-normal flex items-center md:gap-[4px] gap-[10px]'>
                                        <FaCheck className='text-brand text-lg'/>
                                        <p>Free SSL Certificate</p>
                                    </li>
                                    <li className='text-[#585C7B] text-sm font-normal flex items-center md:gap-[4px] gap-[10px]'>
                                        <RxCross2 className='text-[#585C7B] text-lg'/>
                                        <p>99.95% Uptime</p>
                                    </li>
                                    <li className='text-[#585C7B] text-sm font-normal flex items-center md:gap-[4px] gap-[10px]'>
                                        <RxCross2 className='text-[#585C7B] text-lg'/>
                                        <p>24/7 Phone Support</p>
                                    </li>
                                </ul>
                                <div className='mt-13'>
                                    <button className='py-[12px] w-full text-brand border-1 border-[#6366F159] rounded-[6px] font-semibold text-sm hover:bg-brand hover:text-white duration-[.3s] cursor-pointer'>Purchase Now</button>
                                </div>
                            </div>
                        </div>
                        {/* -------------Third Card------------- */}
                        <div className='lg:w-[400px] w-full lg:p-10 p-7 border-1 border-[#E2E5F1] rounded-[8px] flex items-center flex-col duration-[.3s] hover:shadow-lg shadow-[#6366F159]'>
                            <div><img src={beaming} alt="Emoji" /></div>
                            <div>
                                <p className='text-[#9397AD] text-lg mb-1'>Enterprise content management</p>
                                <h2 className='text-[#131022] text-[32px] font-extrabold font-manrope flex items-start justify-center gap-[2px]'>$ 269 <span className='text-lg'>99</span></h2>
                            </div>
                            {/* ---------Border---------- */}
                            <span className='w-full h-[1px] bg-[#E2E5F1] my-4'></span>
                            {/* ---------Border---------- */}
                            <div className='w-full'>
                                <ul className='flex flex-col gap-2'>
                                    <li className='text-[#585C7B] text-sm font-normal flex items-center md:gap-[4px] gap-[10px]'>
                                        <FaCheck className='text-brand text-lg'/>
                                        <p>60 Hosted Domains</p>
                                    </li>
                                    <li className='text-[#585C7B] text-sm font-normal flex items-center md:gap-[4px] gap-[10px]'>
                                        <FaCheck className='text-brand text-lg'/>
                                        <p>175 GB RAID 10 Storage</p>
                                    </li>
                                    <li className='text-[#585C7B] text-sm font-normal flex items-center md:gap-[4px] gap-[10px]'>
                                        <FaCheck className='text-brand text-lg'/>
                                        <p>1500 GB Bandwidth</p>
                                    </li>
                                    <li className='text-[#585C7B] text-sm font-normal flex items-center md:gap-[4px] gap-[10px]'>
                                        <FaCheck className='text-brand text-lg'/>
                                        <p>6 Free Domain included</p>
                                    </li>
                                    <li className='text-[#585C7B] text-sm font-normal flex items-center md:gap-[4px] gap-[10px]'>
                                        <FaCheck className='text-brand text-lg'/>
                                        <p>Super Fast SSD Storage</p>
                                    </li>
                                    <li className='text-[#585C7B] text-sm font-normal flex items-center md:gap-[4px] gap-[10px]'>
                                        <FaCheck className='text-brand text-lg'/>
                                        <p>Free SSL Certificate</p>
                                    </li>
                                    <li className='text-[#585C7B] text-sm font-normal flex items-center md:gap-[4px] gap-[10px]'>
                                        <FaCheck className='text-brand text-lg'/>
                                        <p>99.95% Uptime</p>
                                    </li>
                                    <li className='text-[#585C7B] text-sm font-normal flex items-center md:gap-[4px] gap-[10px]'>
                                        <FaCheck className='text-brand text-lg'/>
                                        <p>24/7 Phone Support</p>
                                    </li>
                                </ul>
                                <div className='mt-13'>
                                    <button className='py-[12px] w-full text-brand border-1 border-[#6366F159] rounded-[6px] font-semibold text-sm hover:bg-brand hover:text-white duration-[.3s] cursor-pointer'>Purchase Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Pricing