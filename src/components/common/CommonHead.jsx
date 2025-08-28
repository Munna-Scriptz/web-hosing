import React from 'react'

const CommonHead = ({topText , BottomText}) => {
  return (
    <div>
        <p className='text-[#2F57EF] font-inter font-bold lg:text-[18px] text-[16px]'>{topText}</p>
        <h2 className='font-inter font-bold lg:text-[36px] text-[30px] lg:leading-[45px] leading-[42px] text-[#333333] mt-[18px]'>{BottomText}</h2>
    </div>
  )
}

export default CommonHead