import React, { useState } from "react";
import img from "./Assets/about-me.webp";
import CV from "./Assets/CV.pdf";
import Arrow from "./Assets/arrow-down.gif";
import {motion} from "framer-motion"
// import { Link, animateScroll as scroll } from 'react-scroll';

const About = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const handleAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 3000);
  };
  return (
    <>
      <div className="flex lg:flex-row flex-col w-auto mt-8">
        {/* <p className="text-blue w-full flex text-center justify-center font-bold text-4xl">
          About Me
        </p> */}
      </div>
      <div className="flex lg:flex-row flex-col gap-x-20 w-auto mt-8">
        <div className="lg:w-1/2 w-full">
          <p className="text-white text-sm flex text-justify lg:mt-5">
            Hi! I'm Asma Ismail with having a 1.5 years of experince in
            development of responsive and pixel perfect design from figma,
            having in depth knowledge in React JS crafting seamless, dynamic user experiences. Passionate about creating
             responsive, high-performance web applications, I thrive on the challenges of modern web development. From building interactive
              UI components to optimizing performance,</p>
          <span className="flex flex-row gap-x-2 mt-4">
            <p className="text-blue">Name:</p>
            <p className="text-white">Asma Ismail</p>
          </span>
          <span className="flex flex-row gap-x-2">
            <p className="text-blue">Email:</p>
            <p className="text-white">asmaismail202020@gmail.com</p>
          </span>
          <motion.a href={CV} download={CV}
             initial={{ x: '-20vw'}}
            animate={{ x:0}}
            // transition={{ type:'spring', }}
         
          >
            <button
              className="text-white bg-blue py-2 px-3 rounded-md mt-6 hover:shadow-white shadow-white transition duration-300 ease-in-out"
              onClick={handleAnimation}
            >
              <span className="flex flex-row gap-x-2">
                <img
                  className={`h-5 mt-1 ${isAnimating ? "animate-spin" : ""}`}
                  src={Arrow}
                  alt="Arrow"
                />
                Download Resume here
              </span>
            </button>
          </motion.a>
        </div>
        <div className="lg:w-1/2 w-full">
          <img src={img} alt="img" className="h-72 w-full rounded-lg" />
        </div>
      </div>
    </>
  );
};

export default About;
