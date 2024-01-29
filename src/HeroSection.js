import React from "react";
import img from "./Assets/home1.png";
// import Particles from 'react-particles-js';

const HeroSection = () => {
  return (
    <>
      <div className="flex lg:gap-x-32 lg:flex-row flex-col w-auto mt-[20px] lg:mt-[75px]">
        {/* <Particles/> */}

        <div className="flex lg:w-full w-1/2">
          {/* <p className='text-white'>new chanes in thus</p>
           */}
          <p className="text-white  text-sm flex text-justify lg:mt-0 mt-4">
            Hi! I'm Asma Ismail with having a 1.5 years of experince in
            development of responsive and pixel perfect design from figma,
            having in depth knowledge in React JS .
          </p>
        </div>
        <div className="flex lg:w-full w-1/2">
          <div className="flex">
            <img src={img} alt="img" className="rounded-lg ml-0px" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
