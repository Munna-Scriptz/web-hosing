import React from 'react'

const CommonHead = ({topText , BottomText}) => {
  return (
    <div>
        <p className='text-[#2F57EF] font-inter font-bold text-[18px]'>{topText}</p>
        <h2 className='font-inter font-bold text-[36px] leading-[45px] text-[#333333] mt-[18px]'>{BottomText}</h2>
    </div>
  )
}

export default CommonHead