import React from 'react'
import TestimonialImage from '../assets/images/TestimonialImage.jpg'
import TestimonialPlay from '../assets/images/TestimonialPLay.png'
import { Link } from 'react-router'
import { FaQuoteLeft } from "react-icons/fa";
import pfp1 from '../assets/images/SliderPfp.png'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
const Testimonials = () => {
    const settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            speed: 2500,
            autoplaySpeed: 4000,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <FaAngleRight />,
            prevArrow: <FaAngleLeft />
        };
    
        const MyReviews = [
            {
                image: pfp1,
                message: 'Vestibulum nunc lectus auctor quis. Natoque lectus tortor lacus, eu. Nunc feugiat nisl maecenas nulla hac morbi. Vitae, donec facilisis sed nunc netus. Venenatis posuere faucibus enim est. Vel dignissim morbi blandit morbi tellus. Arcu ullamcorper quis enim.',
            },
            {
                image: pfp1,
                message: 'Vestibulum nunc lectus auctor quis. Natoque lectus tortor lacus, eu. Nunc feugiat nisl maecenas nulla hac morbi. Vitae, donec facilisis sed nunc netus. Venenatis posuere faucibus enim est. Vel dignissim morbi blandit morbi tellus. Arcu ullamcorper quis enim.',
            },
            {
                image: pfp1,
                message: 'Vestibulum nunc lectus auctor quis. Natoque lectus tortor lacus, eu. Nunc feugiat nisl maecenas nulla hac morbi. Vitae, donec facilisis sed nunc netus. Venenatis posuere faucibus enim est. Vel dignissim morbi blandit morbi tellus. Arcu ullamcorper quis enim.',
            },
            {
                image: pfp1,
                message: 'Vestibulum nunc lectus auctor quis. Natoque lectus tortor lacus, eu. Nunc feugiat nisl maecenas nulla hac morbi. Vitae, donec facilisis sed nunc netus. Venenatis posuere faucibus enim est. Vel dignissim morbi blandit morbi tellus. Arcu ullamcorper quis enim.',
            },
        ]
  return (
    <>
        <section id='Testimonials' className='mt-[265px] h-[802px] w-full relative'>
            <div className="container">
                {/* ---------Floating div---------- */}
                <div className='bg-[#2F57EF] py-[56px] pl-[71px] absolute top-[-150px] left-[50%] translate-x-[-50%] w-[1290px] h-[330px] rounded-[5px]'>
                    <div>
                        <h2 className='font-inter font-bold text-white text-[42px] w-[446px]'>We made passion our raw material</h2>
                        <div className='flex items-center gap-[14px] mt-[50px]'>
                            <Link to={'/'}><img src={TestimonialPlay} alt="Play" /></Link>
                            <div>
                                <p className='text-white text-[17px]'>Call us now</p>
                                <p className='font-inter font-bold text-[21px] text-white'>+880 1327-312666</p>
                            </div>
                        </div>
                    </div>
                    <div className='absolute right-0 top-0 h-full'>
                        <img className='w-[494px] h-full' src={TestimonialImage} alt="Image" />
                    </div>
                </div>
                {/* ---------Testimonial Slider---------- */}
                <div className='pt-[302px] flex items-center  justify-between'>
                    {/* -------Let side-------- */}
                    <div>
                        <p className='text-white font-inter font-bold text-[18px]'>Client's Testimonials</p>
                        <h2 className='font-inter font-bold text-[42px] leading-[54px] text-white mt-[18px] w-[410px]'>Advanced Engine Services</h2>
                        <p className='text-white font-inter font-normal text-[17px] w-[410px] mt-[20px]'>Education is the process of acquiring knowledge, skills, values, and attitudes through various methods such as teaching, </p>
                    </div>
                    <div id='SliderBoxShadow' className="slider-container lg:w-[636px] w-full shrink-0">
                        <Slider {...settings}>
                            {
                                MyReviews.map((item , e)=>(
                                    <div key={e} className='lg:p-[48px] p-[38px] bg-white rounded-[8px]'>
                                        <div id='Quote' className='bg-brand w-[52px] h-[52px] rounded-[6px] text-white flex items-center justify-center text-2xl'>
                                            <FaQuoteLeft />
                                        </div>
                                        <p className='text-gray700 lg:text-lg text-sm leading-[160%] mt-8'>Vestibulum nunc lectus auctor quis. Natoque lectus tortor lacus, eu. Nunc feugiat nisl maecenas nulla hac morbi. Vitae, donec facilisis sed nunc netus. Venenatis posuere faucibus enim est. Vel dignissim morbi blandit morbi tellus. Arcu ullamcorper quis enim.</p>
                                        <div className='mt-[32px] flex items-center gap-4 pb-[48px]'>
                                            <img src={pfp1} alt="Pfp" />
                                            <div>
                                                <h2 className='text-gray900 text-base font-manrope font-extrabold'>Annette Black</h2>
                                                <p className='text-gray600 text-sm font-manrope '>Marketing Specialist at Createx Studio</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Testimonials