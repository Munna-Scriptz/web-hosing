import React from 'react'
import lock from '../assets/images/lockIcon.png'
import database from '../assets/images/storageIcon.png'
import customize from '../assets/images/customize.png'   
import Teaches4 from '../assets/images/Teaches4.png'
const Services = () => {
  return (
    <>
        <section id="teaches" className='mt-[152px]'>
            <div className="container">
                <div id="TeachesRow" className='flex items-center justify-between'>
                    {/* --------------Card 1-------------- */}
                    <div className='w-[300px] p-[30px] flex flex-col items-center justify-center bg-white rounded-[10px]'>
                        <img className='w-[70px]' src={lock} alt="Icon" />
                        <h2 className='text-secondBK font-inter font-bold text-[21px] mt-[20px]'>100% Secure</h2>
                        <p className='text-secondBK font-inter font-normal text-[17px] text-center mt-[15px]'>Lorem ipsum dolor sit amet consectetur. Nibh viverra dolor diam </p>
                    </div>
                    {/* --------------Card 1-------------- */}
                    <div className='w-[300px] p-[30px] flex flex-col items-center justify-center bg-white rounded-[10px] mt-[40px]'>
                        <img className='w-[70px]' src={database} alt="Icon" />
                        <h2 className='text-secondBK font-inter font-bold text-[21px] mt-[20px]'>Unlimited Storage</h2>
                        <p className='text-secondBK font-inter font-normal text-[17px] text-center mt-[15px]'>Lorem ipsum dolor sit amet consectetur. Nibh viverra dolor diam </p>
                    </div>
                    {/* --------------Card 1-------------- */}
                    <div className='w-[300px] p-[30px] flex flex-col items-center justify-center bg-white rounded-[10px]'>
                        <img className='w-[70px]' src={customize} alt="Icon" />
                        <h2 className='text-secondBK font-inter font-bold text-[21px] mt-[20px]'>SImple Customization</h2>
                        <p className='text-secondBK font-inter font-normal text-[17px] text-center mt-[15px]'>Lorem ipsum dolor sit amet consectetur. Nibh viverra dolor diam </p>
                    </div>
                    {/* --------------Card 1-------------- */}
                    <div className='w-[300px] p-[30px] flex flex-col items-center justify-center bg-white rounded-[10px] mt-[40px]'>
                        <img className='w-[70px]' src={Teaches4} alt="Icon" />
                        <h2 className='text-secondBK font-inter font-bold text-[21px] mt-[20px]'> Learning Pathways</h2>
                        <p className='text-secondBK font-inter font-normal text-[17px] text-center mt-[15px]'>Lorem ipsum dolor sit amet consectetur. Nibh viverra dolor diam </p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Services