import React, { useState } from "react";
import img from "./Assets/about-me.webp";
import CV from "./Assets/CV.pdf";
import Arrow from "./Assets/arrow-down.gif";

const About = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const handleAnimation = () => {
    setIsAnimating(true);
    // Your animation logic or any other functionality
    setTimeout(() => {
      setIsAnimating(false);
    }, 3000); // Set the duration after which you want to stop the animation (in milliseconds)
  };
  return (
    <>
      <div className="flex lg:flex-row flex-col w-auto mt-8">
        <p className="text-[#05C7AE] w-full flex text-center justify-center font-bold text-4xl">
          About Me
        </p>
      </div>
      <div className="flex lg:flex-row flex-col gap-x-0 w-auto  mt-8">
        <div className="lg:w-1/2 w-full">
          <img src={img} alt="img" className="h-72  rounded-lg" />
        </div>
        <div className="lg:w-1/2 w-full">
          <p className="text-white  text-sm flex text-justify lg:mt-0 mt-4">
            Hi! I'm Asma Ismail with having a 1.5 years of experince in
            development of responsive and pixel perfect design from figma,
            having in depth knowledge in React JS .
          </p>
          <span className="flex flex-row gap-x-2 mt-4">
            <p className="text-[#05C7AE]">Name:</p>
            <p className="text-white">Asma Ismail</p>
          </span>
          <span className="flex flex-row gap-x-2">
            <p className="text-[#05C7AE]">Email:</p>
            <p className="text-white">asmaismail202020@gmail.com</p>
          </span>
          <a href={CV} download={CV}>
            <button
              className="text-white bg-[#05C7AE] py-2 px-3 rounded-md mt-6 hover:shadow-white shadow-white transition duration-300 ease-in-out"
              onClick={handleAnimation}
            >
              <span className="flex flex-row gap-x-2">
                <img
                  className={`h-5 mt-1 ${isAnimating ? "animate-spin" : ""}`}
                  src={Arrow}
                  alt="Arrow"
                />
                Download Resume
              </span>
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
