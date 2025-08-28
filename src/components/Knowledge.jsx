import React from 'react'
import KnowledgeImg from '../assets/images/KnowledgeImage.png'
import CommonHead from './common/CommonHead'
import { FaCheck } from "react-icons/fa6";

const Knowledge = () => {
  return (
    <>
        <section id='Knowledge' className='mt-[120px]'>
            <div className="container">
                <div id="KnowledgeRow" className='flex items-center justify-between'>
                    <div>
                        <img src={KnowledgeImg} alt="Image" />
                    </div>
                    <div className='w-[520px]'>
                        <CommonHead topText={'Top Popular Course'} BottomText={'Knowledge is power  education is the key'}/>
                        <p className='font-inter text-[17px] leading-[26px] text-secondBK mt-[17px]'>Education is the process of acquiring knowledge, skills, values, and attitudes through various methods such as teaching, training, or research. It plays a crucial role in </p>
                        <div className='flex flex-col gap-[16px] mt-[39px]'>
                            <div className='flex items-center gap-[10px]'>
                                <div className='bg-[#3D64FF] text-white w-[20px] h-[20px] rounded-full flex items-center justify-center'><FaCheck className='text-[12px] w-[30px]'/></div>
                                <p className='text-secondBK font-inter font-normal text-[17px]'>education is the key</p>
                            </div>
                            <div className='flex items-center gap-[10px]'>
                                <div className='bg-[#3D64FF] text-white w-[20px] h-[20px] rounded-full flex items-center justify-center'><FaCheck className='text-[12px] w-[30px]'/></div>
                                <p className='text-secondBK font-inter font-normal text-[17px]'>A Whole Lot of Digital Love for Less</p>
                            </div>
                            <div className='flex items-center gap-[10px]'>
                                <div className='bg-[#3D64FF] text-white w-[20px] h-[20px] rounded-full flex items-center justify-center'><FaCheck className='text-[12px] w-[30px]'/></div>
                                <p className='text-secondBK font-inter font-normal text-[17px]'>Know what your target market wants and needs</p>
                            </div>
                            <div className='flex items-center gap-[10px]'>
                                <div className='bg-[#3D64FF] text-white w-[20px] h-[20px] rounded-full flex items-center justify-center'><FaCheck className='text-[12px] w-[30px]'/></div>
                                <p className='text-secondBK font-inter font-normal text-[17px]'>A Whole Lot of Digital Love for Less</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Knowledge