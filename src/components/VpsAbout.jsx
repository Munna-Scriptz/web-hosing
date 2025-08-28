import React from 'react'
import VpsIMg from '../assets/images/vpsImage.png'
import CommonHead from './common/CommonHead'
import { FaCheck } from "react-icons/fa6";

const VpsAbout = () => {
  return (
    <>
        <section id='Knowledge' className='mt-[120px]'>
            <div className="container">
                <div id="KnowledgeRow" className='flex lg:flex-row flex-col-reverse items-center justify-between'>
                    <div className='lg:w-[540px] w-full lg:mt-0 mt-10'>
                        <CommonHead topText={'About Our VPS Hosting'} BottomText={'Next Gen VPS Hosting'}/>
                        <p className='font-inter text-[17px] leading-[26px] text-secondBK mt-[17px]'>A Virtual Private Server (VPS) is a type of web hosting that offers a private, dedicated portion of a larger physical server. It is an upgrade from shared hosting, providing more control and better performance without the higher cost of a fully dedicated server. </p>
                        <div className='flex flex-col gap-[16px] mt-[39px]'>
                            <div className='flex items-center gap-[10px]'>
                                <div className='bg-[#3D64FF] text-white w-[20px] h-[20px] rounded-full flex items-center justify-center'><FaCheck className='text-[12px] w-[30px]'/></div>
                                <p className='text-secondBK font-inter font-normal lg:text-[17px] text-[15px]'>offers many benefits of a server at affordable price</p>
                            </div>
                            <div className='flex items-center gap-[10px]'>
                                <div className='bg-[#3D64FF] text-white w-[20px] h-[20px] rounded-full flex items-center justify-center'><FaCheck className='text-[12px] w-[30px]'/></div>
                                <p className='text-secondBK font-inter font-normal lg:text-[17px] text-[15px]'>You can easily upgrade your resources your website grows</p>
                            </div>
                            <div className='flex items-center gap-[10px]'>
                                <div className='bg-[#3D64FF] text-white w-[20px] h-[20px] rounded-full flex items-center justify-center'><FaCheck className='text-[12px] w-[30px]'/></div>
                                <p className='text-secondBK font-inter font-normal lg:text-[17px] text-[15px]'>Full access lets you tailor the server to your exact specifications</p>
                            </div>
                            <div className='flex items-center gap-[10px]'>
                                <div className='bg-[#3D64FF] text-white w-[20px] h-[20px] rounded-full flex items-center justify-center'><FaCheck className='text-[12px] w-[30px]'/></div>
                                <p className='text-secondBK font-inter font-normal lg:text-[17px] text-[15px]'>Isolated environments prevent security vulnerabilities on server</p>
                            </div>
                        </div>
                        {/* ----------------Buttons--------------- */}
                        <div className='mt-10 flex lg:justify-start justify-between items-center gap-8'>
                            <button class="bg-[#2F57EF] text-white py-[12px] lg:px-[30px] px-[20px] lg:text-lg text-base font-inter rounded-[5px] cursor-pointer z-30 relative font-semibold after:-z-20 after:absolute after:h-1 after:w-1 after:bg-secondBK after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md hover:after:scale-[300] hover:after:transition-all hover:after:duration-700 after:transition-all after:duration-700 transition-all duration-700">Purchase Now</button>
                            <div>
                                <h2 className='text-secondBK text-2xl font-manrope font-bold'>Starting at</h2>
                                <p className='text-brand font-medium font-inter text-lg'>$19.99/mo*</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={VpsIMg} alt="Image" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default VpsAbout