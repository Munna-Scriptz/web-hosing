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
                <div id="CourseRow" className='flex items-center gap-[80px]'>
                    {/* ----------Left Side-------- */}
                    <div className='w-[770px]'>
                        <div className='relative'>
                            <img className='w-[450px]' src={ProcessImg} alt="Image" />
                        </div>
                        <div className='flex items-center gap-20'>
                            <div className='mt-[66px] flex items-center gap-[37px]'>
                                <img src={CourseICon1} alt="Icon" />
                                <div>
                                    <h2 className='font-inter text-[#6864ED] font-bold text-[46px]'>529+</h2>
                                    <p className='font-inter text-[#151718] font-medium text-[21px]'>Domains</p>
                                </div>
                            </div>
                            <div className='mt-[66px] flex items-center gap-[37px]'>
                                <img src={CourseICon2} alt="Icon" />
                                <div>
                                    <h2 className='font-inter text-[#6864ED] font-bold text-[46px]'>200+</h2>
                                    <p className='font-inter text-[#151718] font-medium text-[21px]'>Hosting</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* ----------Left Side-------- */}
                    <div className='w-[540px]'>
                        <CommonHead topText={'Our Process'} BottomText={' Spread the words out. We’re Giving away free domains'}/>
                        <p className='font-inter text-[17px] leading-[26px] text-secondBK mt-[17px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        <div className='mt-[43px] flex items-start gap-[20px]'>
                            <div className='bg-[#3D64FF] text-white w-[30px] h-[30px] rounded-full flex items-center justify-center'><FaCheck className='text-[15px] w-[30px]'/></div>
                            <div>
                                <h2 className='text-secondBK font-inter font-bold text-[21px]'>About Our Domain</h2>
                                <p className='text-secondBK font-inter font-normal text-[17px] mt-3'>Ecologists use a variety of methods, such as field observa tions, experiments</p>
                            </div>
                        </div>
                        <div className='mt-[43px] flex items-start gap-[20px]'>
                            <div className='bg-[#3D64FF] text-white w-[30px] h-[30px] rounded-full flex items-center justify-center'><FaCheck className='text-[15px] w-[30px]'/></div>
                            <div>
                                <h2 className='text-secondBK font-inter font-bold text-[21px]'>Our Hosting</h2>
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

export default Process