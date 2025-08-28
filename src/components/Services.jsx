import React from 'react'
import CommonHead from './common/CommonHead'
import pfp from '../assets/images/ServicesProfile.png'
import SliderImg from '../assets/images/ServiceSliderImg.png'
import { FaRegUser } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router';
import { FaArrowRight } from "react-icons/fa";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Services = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
    };

    const SliderData = [
        {
            SliderPfp: pfp,
            reviewCount: 15,
            SliderImg: SliderImg,
            title: 'The Power of Personal Branding',
        },
        {
            SliderPfp: pfp,
            reviewCount: 15,
            SliderImg: SliderImg,
            title: 'The Power of Personal Branding',
        },
        {
            SliderPfp: pfp,
            reviewCount: 15,
            SliderImg: SliderImg,
            title: 'The Power of Personal Branding',
        },
        {
            SliderPfp: pfp,
            reviewCount: 15,
            SliderImg: SliderImg,
            title: 'The Power of Personal Branding',
        },
        {
            SliderPfp: pfp,
            reviewCount: 15,
            SliderImg: SliderImg,
            title: 'The Power of Personal Branding',
        },
        {
            SliderPfp: pfp,
            reviewCount: 15,
            SliderImg: SliderImg,
            title: 'The Power of Personal Branding',
        },
    ]
  return (
    <>
        <section id='Services' className='mt-[120px]'>
            <div className="container">
                {/* -------------Header----------------- */}
                <div className='w-[434px]'>
                    <CommonHead topText={'Services we’re offering'} BottomText={'Navigating your path to success'}/>
                </div>
                {/* -------------Services Slider----------------- */}
                <div className="slider-container">
                    <Slider {...settings}>
                        {
                            SliderData.map((item)=>{
                                return (
                                    <div className='mt-[40px] w-[410px] p-[30px]'>
                                    {/* ---------Pfp Image and Slider Image--------- */}
                                    <div className='flex items-center justify-between mb-[18px]'>
                                        <div className='flex items-center gap-[10px]'>
                                            <img src={pfp} alt="Review Imag" />
                                            <p className='text-secondBK font-inter text-[13px]'>By leonardo</p>
                                        </div>
                                        <div className='flex items-center gap-[10px]'>
                                            <FaRegUser className='text-[#2F57EF]'/>
                                            <p className='text-secondBK font-inter text-[13px]'>50 Students</p>
                                        </div>
                                    </div>
                                    {/* ---------Slider Image And label--------- */}
                                    <div className='relative'>
                                        <img src={SliderImg} alt="Slider Image" />
                                        <div className='bg-[#2F57EF] w-[113px] h-[40px] absolute bottom-[10px] right-[10px] text-center rounded-[5px] flex items-center justify-center text-white font-inter font-medium text-[14px]'>
                                            <p>Development</p>
                                        </div>
                                    </div>
                                    {/* ---------Slider Reviews--------- */}
                                    <div className='mt-[22px] flex items-center gap-[7px]'>
                                        <div className='flex items-center gap-[2px] text-[#FF9747]'>
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </div>
                                        <p className='text-secondBK font-inter font-medium text-[12px]'>(15 Reviews)</p>
                                    </div>
                                    {/* ---------Slider bottom text--------- */}
                                    <div className='mt-[16px]'>
                                        <h2 className='font-inter font-bold text-secondBK text-[25px] w-[330px] leading-[33px]'>The Power of Personal Branding</h2>
                                        <Link className='flex items-center gap-[8px] text-[#2F57EF] font-inter font-bold mt-[14px]' to={'/'}>Enroll Now <FaArrowRight /></Link>
                                    </div>
                             </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </section>
    </>
  )
}

export default Services