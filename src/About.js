import React from "react";
import img from "./Assets/about-me.webp";

const About = () => {
  return (
    <>
      <div className="flex lg:flex-row flex-col w-auto mt-8">
        <p className="text-[#05C7AE] w-full flex text-center justify-center font-bold text-4xl">
          About Me
        </p>
        </div>
        <div className="flex lg:flex-row flex-col w-auto mt-8 bg-yellow-300">
          <div className="lg:w-1/2 w-full">
            <img src={img} alt="img" className="h-72 lg:ml-10  rounded-lg" />
          </div>
          <div className="lg:w-1/2 w-full bg-white">
            <p className="text-[#05C7AE]">As a dedicated React.js web developer, I thrive on crafting dynamic and immersive digital experiences. 
                Proficient in leveraging React.js to create responsive, high-performance web applications, I possess a strong 
                foundation in front-end development. My expertise lies in translating design mock-ups into interactive interfaces, 
                ensuring seamless user experiences across various platforms. With a keen eye for detail and a passion for clean,
                 maintainable code, I contribute innovative solutions while collaborating within cross-functional teams. Continuously 
                 staying abreast of emerging technologies and best practices, I am committed to delivering robust, scalable solutions that 
                 exceed client expectations, driving impactful results in the ever-evolving realm of web development.</p>
          </div>
        </div>
    </>
  );
};

export default About;
