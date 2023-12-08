import React from "react";
import img from "./Assets/about-me.webp";
import CV from "./Assets/CV.pdf";

const About = () => {
  return (
    <>
      <div className="flex lg:flex-row flex-col w-auto mt-8">
        <p className="text-[#05C7AE] w-full flex text-center justify-center font-bold text-4xl">
          About Me
        </p>
      </div>
      <div className="flex lg:flex-row flex-col gap-x-0 w-auto mx-8 mt-8">
        <div className="lg:w-1/2 w-full">
          <img src={img} alt="img" className="h-72 lg:ml-20 mx-2  rounded-lg" />
        </div>
        <div className="lg:w-1/2 w-full">
          <p className="text-white lg:mr-24 text-sm flex text-justify lg:mt-0 mt-4">
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
          <button className="text-white bg-[#05C7AE] py-2 px-3 rounded-md mt-6 hover:shadow-white shadow-white transition duration-300 ease-in-out">
            {/* <button className="text-white bg-[#05C7AE] py-2 px-3 rounded-md mt-6 hover:shadow-2xl shadow-[#bfefe8] transition duration-300 ease-in-out"> */}
              Download Resume
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
