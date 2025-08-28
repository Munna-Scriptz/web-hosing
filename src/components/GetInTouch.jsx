import React from 'react';
import BgImage from '../assets/images/contactImage.png';

const GetInTouch = () => {
  return (
    <>
      <section id="Get-In-Touch" className="mt-[128px]">
        <div className="container px-4 mx-auto">
          <div
            id="GetInTouchRow"
            className="flex flex-col lg:flex-row items-center justify-between gap-8"
          >
            <div className="w-full lg:w-1/2">
              <img
                src={BgImage}
                alt="Image"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <div>
                <p className="text-[#2F57EF] font-inter font-bold text-[18px] text-center lg:text-left">
                  GET IN TOUCH
                </p>
                <h2 className="font-inter font-bold text-[32px] lg:text-[42px] leading-[40px] lg:leading-[54px] text-secondBK mt-[7px] text-center lg:text-left">
                  Bringing your <span className="text-[#2F57EF]">vision</span> to life
                </h2>
              </div>
              <div className="mt-[40px] lg:mt-[60px]">
                <div className="flex flex-col lg:flex-row items-center gap-[20px] lg:gap-[30px]">
                  <input
                    className="w-full lg:w-[301px] h-[50px] lg:h-[70px] border border-[#E3E3E3] outline-none rounded-[5px] pl-[20px] font-inter text-secondBK text-[15px] lg:text-[17px]"
                    type="text"
                    placeholder="Your Name"
                  />
                  <input
                    className="w-full lg:w-[301px] h-[50px] lg:h-[70px] border border-[#E3E3E3] outline-none rounded-[5px] pl-[20px] font-inter text-secondBK text-[15px] lg:text-[17px]"
                    type="text"
                    placeholder="Your Email"
                  />
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-[20px] lg:gap-[30px] my-[20px]">
                  <input
                    className="w-full lg:w-[301px] h-[50px] lg:h-[70px] border border-[#E3E3E3] outline-none rounded-[5px] pl-[20px] font-inter text-secondBK text-[15px] lg:text-[17px]"
                    type="text"
                    placeholder="Phone Number"
                  />
                  <input
                    className="w-full lg:w-[301px] h-[50px] lg:h-[70px] border border-[#E3E3E3] outline-none rounded-[5px] pl-[20px] font-inter text-secondBK text-[15px] lg:text-[17px]"
                    type="text"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <textarea
                    className="w-full h-[100px] lg:h-[150px] border border-[#E3E3E3] outline-none rounded-[5px] pl-[20px] pt-[10px] font-inter text-secondBK text-[15px] lg:text-[17px]"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>
              {/* ------------Submit Button---------- */}
              <button className="mt-[20px] lg:mt-[30px] bg-[#2F57EF] text-white w-full py-[15px] lg:py-[22px] text-[15px] lg:text-[17px] font-inter rounded-[5px] cursor-pointer px-8 z-30 font-semibold relative after:-z-20 after:absolute after:h-1 after:w-1 after:bg-secondBK after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md hover:after:scale-[300] hover:after:transition-all hover:after:duration-700 after:transition-all after:duration-700 transition-all duration-700">
                Hover Me
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetInTouch;