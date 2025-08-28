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
        speed: 2000,
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
    <section id='Testimonials' className='mt-[400px] lg:mt-[265px] lg:h-[802px] h-[1050px] w-full relative'>
        <div className="container px-4 lg:px-0">
            {/* ---------Floating div---------- */}
            <div className='bg-[#2F57EF] py-8 lg:py-[56px] px-6 lg:pl-[71px] absolute -top-32 lg:top-[-150px] left-1/2 -translate-x-1/2 w-[95%] lg:w-[1290px] h-auto lg:h-[330px] rounded-[5px] flex flex-col lg:flex-row items-center lg:items-start'>
            <div className='flex-1 text-center lg:text-left'>
                <h2 className='font-inter font-bold text-white text-2xl md:text-3xl lg:text-[42px] lg:w-[446px]'>
                We made passion our raw material
                </h2>
                <div className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-6 lg:mt-[50px]'>
                <Link to={'/'}>
                    <img src={TestimonialPlay} alt="Play" className="w-10 sm:w-auto"/>
                </Link>
                <div>
                    <p className='text-white text-sm md:text-base lg:text-[17px]'>Call us now</p>
                    <p className='font-inter font-bold text-lg md:text-xl lg:text-[21px] text-white'>+880 1327-312666</p>
                </div>
                </div>
            </div>
            <div className='mt-6 lg:mt-0 lg:absolute lg:right-0 lg:top-0 lg:h-full w-full lg:w-auto'>
                <img className='w-full lg:w-[494px] h-[200px] lg:h-full object-cover rounded-md lg:rounded-none' src={TestimonialImage} alt="Image" />
            </div>
            </div>

            {/* ---------Testimonial Slider---------- */}
            <div className='pt-[400px] lg:pt-[302px] flex flex-col lg:flex-row items-center justify-between gap-10'>
            {/* -------Left side-------- */}
            <div className='text-center lg:text-left'>
                <p className='text-white font-inter font-bold text-base lg:text-[18px]'>Client's Testimonials</p>
                <h2 className='font-inter font-bold text-2xl md:text-3xl lg:text-[42px] leading-snug lg:leading-[54px] text-white mt-4 lg:mt-[18px] lg:w-[410px]'>
                Advanced Engine Services
                </h2>
                <p className='text-white font-inter font-normal text-sm md:text-base lg:text-[17px] mt-4 lg:mt-[20px] lg:w-[410px]'>
                Education is the process of acquiring knowledge, skills, values, and attitudes through various methods such as teaching,
                </p>
            </div>

            {/* -------Right side (Slider)-------- */}
            <div id='SliderBoxShadow' className="slider-container w-full lg:w-[636px] shrink-0">
                <Slider {...settings}>
                {MyReviews.map((item, e) => (
                    <div key={e} className='p-6 lg:p-[48px] bg-white rounded-[8px]'>
                        <div id='Quote' className='bg-brand w-12 h-12 rounded-[6px] text-white flex items-center justify-center text-xl lg:text-2xl'>
                            <FaQuoteLeft />
                        </div>
                        <p className='text-gray700 text-sm md:text-base lg:text-lg leading-relaxed mt-6 lg:mt-8'>
                            {item.message}
                        </p>
                        <div className='mt-6 lg:mt-[32px] flex items-center gap-4 pb-8 lg:pb-[48px]'>
                            <img src={pfp1} alt="Pfp" className="w-10 h-10 rounded-full"/>
                            <div className='text-left'>
                            <h2 className='text-gray900 text-sm md:text-base font-manrope font-extrabold'>Annette Black</h2>
                            <p className='text-gray600 text-xs md:text-sm font-manrope'>Marketing Specialist at Createx Studio</p>
                            </div>
                        </div>
                    </div>
                ))}
                </Slider>
            </div>
            </div>
        </div>
    </section>

    </>
  )
}

export default Testimonials