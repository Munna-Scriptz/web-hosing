import React from 'react'
import Teaches1 from '../assets/images/Teaches1.png'
import Teaches2 from '../assets/images/Teaches2.png'
import Teaches3 from '../assets/images/Teaches3.png'   
import Teaches4 from '../assets/images/Teaches4.png'
const Teaches = () => {
  return (
    <>
        <section id="teaches" className='mt-[186px]'>
            <div className="container">
                <div id="TeachesRow" className='flex items-center justify-between'>
                    {/* --------------Card 1-------------- */}
                    <div className='w-[300px] p-[30px] flex flex-col items-center justify-center bg-white rounded-[10px]'>
                        <img src={Teaches1} alt="Icon" />
                        <h2 className='text-secondBK font-inter font-bold text-[21px] mt-[20px]'>Future Focus</h2>
                        <p className='text-secondBK font-inter font-normal text-[17px] text-center mt-[15px]'>Lorem ipsum dolor sit amet consectetur. Nibh viverra dolor diam </p>
                    </div>
                    {/* --------------Card 1-------------- */}
                    <div className='w-[300px] p-[30px] flex flex-col items-center justify-center bg-white rounded-[10px] mt-[40px]'>
                        <img src={Teaches2} alt="Icon" />
                        <h2 className='text-secondBK font-inter font-bold text-[21px] mt-[20px]'>Smart Scholars</h2>
                        <p className='text-secondBK font-inter font-normal text-[17px] text-center mt-[15px]'>Lorem ipsum dolor sit amet consectetur. Nibh viverra dolor diam </p>
                    </div>
                    {/* --------------Card 1-------------- */}
                    <div className='w-[300px] p-[30px] flex flex-col items-center justify-center bg-white rounded-[10px]'>
                        <img src={Teaches3} alt="Icon" />
                        <h2 className='text-secondBK font-inter font-bold text-[21px] mt-[20px]'>Knowledge Hub</h2>
                        <p className='text-secondBK font-inter font-normal text-[17px] text-center mt-[15px]'>Lorem ipsum dolor sit amet consectetur. Nibh viverra dolor diam </p>
                    </div>
                    {/* --------------Card 1-------------- */}
                    <div className='w-[300px] p-[30px] flex flex-col items-center justify-center bg-white rounded-[10px] mt-[40px]'>
                        <img src={Teaches4} alt="Icon" />
                        <h2 className='text-secondBK font-inter font-bold text-[21px] mt-[20px]'> Learning Pathways</h2>
                        <p className='text-secondBK font-inter font-normal text-[17px] text-center mt-[15px]'>Lorem ipsum dolor sit amet consectetur. Nibh viverra dolor diam </p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Teaches