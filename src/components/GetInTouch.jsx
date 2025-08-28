import React from 'react'
import BgImage from '../assets/images/contactImage.png'

const GetInTouch = () => {
  return (
    <>
        <section id='Get-In-Touch' className='mt-[128px]'>
            <div className="container">
                <div id="GetInTouchRow" className='flex items-center justify-between'>
                    <div><img src={BgImage} alt="Image" /></div>
                    <div>
                        <div>
                            <p className='text-[#2F57EF] font-inter font-bold text-[18px]'>GET IN TOUCH</p>
                            <h2 className='font-inter font-bold text-[42px] leading-[54px] text-secondBK mt-[7px]'>Bringing your <span className='text-[#2F57EF]'>vision</span> to life</h2>
                        </div>
                        <div className='mt-[60px]'>
                            <div className='flex items-center gap-[30px]'>
                                <input className='w-[301px] h-[70px] border-1 border-[#E3E3E3] outline-none rounded-[5px] pl-[20px] font-inter text-secondBK text-[17px] ' type="text" placeholder='Your Name'/>
                                <input className='w-[301px] h-[70px] border-1 border-[#E3E3E3] outline-none rounded-[5px] pl-[20px] font-inter text-secondBK text-[17px] ' type="text" placeholder='Your Email'/>
                            </div>
                            <div className='flex items-center gap-[30px] my-[20px]'>
                                <input className='w-[301px] h-[70px] border-1 border-[#E3E3E3] outline-none rounded-[5px] pl-[20px] font-inter text-secondBK text-[17px] ' type="text" placeholder='Phone Number'/>
                                <input className='w-[301px] h-[70px] border-1 border-[#E3E3E3] outline-none rounded-[5px] pl-[20px] font-inter text-secondBK text-[17px] ' type="text" placeholder='Subject'/>
                            </div>
                            <div>
                                <input className='w-full pt-[20px] pb-[83px] border-1 border-[#E3E3E3] outline-none rounded-[5px] pl-[20px] font-inter text-secondBK text-[17px] ' type="text" placeholder='Subject'/>
                            </div>
                        </div>
                        {/* ------------Submit Button---------- */}
                        <button className='mt-[30px] bg-[#2F57EF] text-white w-full py-[22px] text-[17px] font-inter rounded-[5px] cursor-pointer'>Submit Now</button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default GetInTouch