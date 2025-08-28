import React from 'react'
import VpsIMg from '../assets/images/vpsImage.png'
import CommonHead from './common/CommonHead'
import { FaCheck } from "react-icons/fa6";

const VpsAbout = () => {
  return (
    <>
        <section id='Knowledge' className='mt-[120px]'>
            <div className="container">
                <div id="KnowledgeRow" className='flex items-center justify-between'>
                    <div className='w-[540px]'>
                        <CommonHead topText={'About Our VPS Hosting'} BottomText={'Next Gen VPS Hosting'}/>
                        <p className='font-inter text-[17px] leading-[26px] text-secondBK mt-[17px]'>A Virtual Private Server (VPS) is a type of web hosting that offers a private, dedicated portion of a larger physical server. It is an upgrade from shared hosting, providing more control and better performance without the higher cost of a fully dedicated server. </p>
                        <div className='flex flex-col gap-[16px] mt-[39px]'>
                            <div className='flex items-center gap-[10px]'>
                                <div className='bg-[#3D64FF] text-white w-[20px] h-[20px] rounded-full flex items-center justify-center'><FaCheck className='text-[12px] w-[30px]'/></div>
                                <p className='text-secondBK font-inter font-normal text-[17px]'>offers many benefits of a server at affordable price</p>
                            </div>
                            <div className='flex items-center gap-[10px]'>
                                <div className='bg-[#3D64FF] text-white w-[20px] h-[20px] rounded-full flex items-center justify-center'><FaCheck className='text-[12px] w-[30px]'/></div>
                                <p className='text-secondBK font-inter font-normal text-[17px]'>You can easily upgrade your resources your website grows</p>
                            </div>
                            <div className='flex items-center gap-[10px]'>
                                <div className='bg-[#3D64FF] text-white w-[20px] h-[20px] rounded-full flex items-center justify-center'><FaCheck className='text-[12px] w-[30px]'/></div>
                                <p className='text-secondBK font-inter font-normal text-[17px]'>Full access lets you tailor the server to your exact specifications</p>
                            </div>
                            <div className='flex items-center gap-[10px]'>
                                <div className='bg-[#3D64FF] text-white w-[20px] h-[20px] rounded-full flex items-center justify-center'><FaCheck className='text-[12px] w-[30px]'/></div>
                                <p className='text-secondBK font-inter font-normal text-[17px]'>Isolated environments prevent security vulnerabilities on server</p>
                            </div>
                        </div>
                        {/* ----------------Buttons--------------- */}
                        <div className='mt-10 flex items-center gap-8'>
                            <button className='bg-brand px-[30px] py-[12px] text-white font-inter rounded-[8px] cursor-pointer'>Get A Plan</button>
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