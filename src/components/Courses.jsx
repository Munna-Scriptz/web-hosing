import React from 'react'
import CourseImg from '../assets/images/CoursesImg.png'
import CourseICon1 from '../assets/images/CourseIcon1.png'
import CourseICon2 from '../assets/images/CourseIcon2.png'
import CourseICon3 from '../assets/images/CourseIcon3.png'
import CommonHead from './common/CommonHead'
import { FaCheck } from "react-icons/fa6";

const Courses = () => {
  return (
    <>
        <section id="Courses" className='mt-[120px]'>
            <div className="container">
                <div id="CourseRow" className='flex items-center gap-[80px]'>
                    {/* ----------Left Side-------- */}
                    <div className='w-[770px]'>
                        <div className='relative'>
                            <img src={CourseImg} alt="Image" />
                            <div className='bg-white w-[268px] absolute top-[15px] left-[15px] flex items-center gap-[15px] p-[12px] rounded-[5px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                                <img src={CourseICon3} alt="icon" />
                                <div>
                                    <h1 className='text-secondBK font-inter font-bold text-[21px]'>Daily Activity</h1>
                                    <p className='text-secondBK font-inter font-normal text-[17px]'>Loream is ispam</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-around'>
                            <div className='mt-[66px] flex items-center gap-[37px]'>
                                <img src={CourseICon1} alt="Icon" />
                                <div>
                                    <h2 className='font-inter text-[#6864ED] font-bold text-[46px]'>200+</h2>
                                    <p className='font-inter text-[#151718] font-medium text-[21px]'>Courses</p>
                                </div>
                            </div>
                            <div className='mt-[66px] flex items-center gap-[37px]'>
                                <img src={CourseICon2} alt="Icon" />
                                <div>
                                    <h2 className='font-inter text-[#6864ED] font-bold text-[46px]'>200+</h2>
                                    <p className='font-inter text-[#151718] font-medium text-[21px]'>Courses</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* ----------Left Side-------- */}
                    <div className='w-[440px]'>
                        <CommonHead topText={'Top Popular Course'} BottomText={'Knowledge is power  education is the key'}/>
                        <p className='font-inter text-[17px] leading-[26px] text-secondBK mt-[17px]'>Education is the process of acquiring knowledge, skills, values, and attitudes through various methods such as teaching, training</p>
                        <div className='mt-[43px] flex items-start gap-[20px]'>
                            <div className='bg-[#3D64FF] text-white w-[30px] h-[30px] rounded-full flex items-center justify-center'><FaCheck className='text-[15px] w-[30px]'/></div>
                            <div>
                                <h2 className='text-secondBK font-inter font-bold text-[21px]'>Knowledge Hub</h2>
                                <p className='text-secondBK font-inter font-normal text-[17px] mt-3'>Ecologists use a variety of methods, such as field observa tions, experiments</p>
                            </div>
                        </div>
                        <div className='mt-[43px] flex items-start gap-[20px]'>
                            <div className='bg-[#3D64FF] text-white w-[30px] h-[30px] rounded-full flex items-center justify-center'><FaCheck className='text-[15px] w-[30px]'/></div>
                            <div>
                                <h2 className='text-secondBK font-inter font-bold text-[21px]'>Smart Scholars</h2>
                                <p className='text-secondBK font-inter font-normal text-[17px] mt-3'>The goal of ecology is to understand how organisms interact with each other </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Courses