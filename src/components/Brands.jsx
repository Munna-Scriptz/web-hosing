import React from 'react'
import brand1 from '../assets/images/Brand1.png'
import brand2 from '../assets/images/Brand2.png'
import brand3 from '../assets/images/Brand3.png'
import brand4 from '../assets/images/Brand4.png'
import brand5 from '../assets/images/Brand5.png'
const Brands = () => {
  return (
    <>
        <section id='Brands' className='mt-[120px]'>
            <div className="container">
                <div id="BrandsRow" className='flex flex-wrap gap-y-5 items-center justify-between'>
                  <img src={brand1} alt="Brands" />
                  <img src={brand2} alt="Brands" />
                  <img src={brand3} alt="Brands" />
                  <img src={brand4} alt="Brands" />
                  <img src={brand5} alt="Brands" />
                </div>
            </div>
        </section>
    </>
  )
}

export default Brands