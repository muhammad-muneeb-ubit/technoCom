import React from 'react'
import bannerImage from '../../assets/banner-image.png'

const HeroSection = () => {
  return (
    <div id="hero-section" className='hero-section flex items-center justify-center px-8 pt-12 w-full'>
      <div className='pt-24 left-section w-1/2 flex flex-col gap-6 mx-12 pb-12'>
            <div className='heading text-4xl text-green-600  '>Cloud Book</div>
            <div className='text text-[16px] '>
                <p>Seamless integration of all the information flowing through a company.</p>
                <p>Integrated, secure, self-service process for business.</p>
                <p>Improve productivity and gain control over the business.</p>
                <p>To support business goal Empower Employees. </p>
                <p>Lower costs.</p>
                   </div>
            <div className='button border-2 border-green-500 py-2 px-4 rounded-full flex items-center justify-center text-green-600 hover:bg-green-500 hover:text-white hover:cursor-pointer'  >GET STARTED NOW</div>
        </div>
        <div className='right-section w-1/2 mx-12 '><img src={bannerImage} className='w-full'  alt="" /></div>
    </div>
  )
}

export default HeroSection