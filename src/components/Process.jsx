import React from 'react'
import ProcessImg from '../assets/images/WebProccess.png'
import CourseICon1 from '../assets/images/CourseIcon1.png'
import CourseICon2 from '../assets/images/CourseIcon2.png'
import CommonHead from './common/CommonHead'
import { FaCheck } from "react-icons/fa6";

const Process = () => {
  return (
    <>
        <section id="Courses" className='mt-[120px]'>
            <div className="container">
                <div id="CourseRow" className='flex lg:flex-row flex-col items-center gap-[80px]'>
                    {/* ----------Left Side-------- */}
                    <div className='lg:w-[770px]'>
                        <div className='relative'>
                            <img className='lg:w-[450px]' src={ProcessImg} alt="Image" />
                        </div>
                        <div className='flex items-center md:justify-start justify-between lg:gap-20'>
                            <div className='mt-[66px] flex items-center lg:gap-[37px] gap-[20px]'>
                                <img className='lg:w-full w-[50px]' src={CourseICon1} alt="Icon" />
                                <div>
                                    <h2 className='font-inter text-[#6864ED] font-bold lg:text-[46px] text-[24px]'>529+</h2>
                                    <p className='font-inter text-[#151718] font-medium lg:text-[21px] text-[16px]'>Domains</p>
                                </div>
                            </div>
                            <div className='mt-[66px] flex items-center lg:gap-[37px] gap-[20px]'>
                                <img className='lg:w-full w-[50px]' src={CourseICon2} alt="Icon" />
                                <div>
                                    <h2 className='font-inter text-[#6864ED] font-bold lg:text-[46px] text-[24px]'>200+</h2>
                                    <p className='font-inter text-[#151718] font-medium lg:text-[21px] text-[16px]'>Hosting</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* ----------Left Side-------- */}
                    <div className='lg:w-[540px]'>
                        <CommonHead topText={'Our Process'} BottomText={' Spread the words out. We’re Giving away free domains'}/>
                        <p className='font-inter text-[17px] leading-[26px] text-secondBK mt-[17px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        <div className='mt-[43px] flex items-start gap-[20px]'>
                            <div className='bg-[#3D64FF] text-white lg:w-[30px] w-[25px] lg:h-[30px] h-[25px] rounded-full flex items-center justify-center'><FaCheck className='text-[15px] w-[30px]'/></div>
                            <div>
                                <h2 className='text-secondBK font-inter font-bold lg:text-[21px] text-[18px]'>About Our Domain</h2>
                                <p className='text-secondBK font-inter font-normal lg:text-[17px] text-[15px] mt-3'>Ecologists use a variety of methods, such as field observa tions, experiments</p>
                            </div>
                        </div>
                        <div className='mt-[43px] flex items-start gap-[20px]'>
                            <div className='bg-[#3D64FF] text-white lg:w-[30px] w-[25px] lg:h-[30px] h-[25px] rounded-full flex items-center justify-center'><FaCheck className='text-[15px] w-[30px]'/></div>
                            <div>
                                <h2 className='text-secondBK font-inter font-bold lg:text-[21px] text-[18px]'>Our Hosting</h2>
                                <p className='text-secondBK font-inter font-normal lg:text-[17px] text-[15px] mt-3'>The goal of ecology is to understand how organisms interact with each other </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Process