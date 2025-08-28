import React from 'react'
import TestimonialImage from '../assets/images/TestimonialImage.png'
import TestimonialPlay from '../assets/images/TestimonialPLay.png'
import { Link } from 'react-router'
const Testimonials = () => {
  return (
    <>
        <section id='Testimonials' className='mt-[265px] h-[662px] w-full relative'>
            <div className="container">
                {/* ---------Floating div---------- */}
                <div className='bg-[#2F57EF] py-[56px] pl-[71px] absolute top-[-150px] left-[50%] translate-x-[-50%] w-[1290px] h-[330px] rounded-[5px]'>
                    <div>
                        <h2 className='font-inter font-bold text-white text-[42px] w-[446px]'>We made passion our raw material</h2>
                        <div className='flex items-center gap-[14px] mt-[50px]'>
                            <Link to={'/'}><img src={TestimonialPlay} alt="Play" /></Link>
                            <div>
                                <p className='text-white text-[17px]'>Call us now</p>
                                <p className='font-inter font-bold text-[21px] text-white'>+44 7700 900217</p>
                            </div>
                        </div>
                    </div>
                    <div className='absolute right-0 top-0'>
                        <img src={TestimonialImage} alt="Image" />
                    </div>
                </div>
                {/* ---------Testimonial Slider---------- */}
                <div className='pt-[352px]'>
                    {/* -------Let side-------- */}
                    <div>
                        <p className='text-white font-inter font-bold text-[18px]'>testimonials</p>
                        <h2 className='font-inter font-bold text-[42px] leading-[54px] text-white mt-[18px] w-[410px]'>Advanced Engine Services</h2>
                        <p className='text-white font-inter font-normal text-[17px] w-[410px] mt-[20px]'>Education is the process of acquiring knowledge, skills, values, and attitudes through various methods such as teaching, </p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Testimonials