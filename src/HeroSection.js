import React from 'react'
import img from './Assets/home1.png'
// import Particles from 'react-particles-js';


const HeroSection = () => {
  return (
    <>
    <div className='flex lg:flex-row flex-col w-auto mt-[20px] lg:mt-[75px]'>
      {/* <Particles/> */}
      
        <div className='flex lg:w-full w-1/2'>
<p className='text-white'>new chanes in thus</p>
        </div>
        <div className='flex lg:w-full w-1/2 bg-yellow-300'>
          <div className='flex'>
          <img src={img} alt='img' className='rounded-lg ml-0px'/>

          </div>
</div>


    </div>
    </>
  )
}

export default HeroSection