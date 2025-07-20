import { assets, toolsData } from '@/assets/assets';
import Image from 'next/image';
import { motion } from 'motion/react';
const About = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{duration:1}}
        id="about"
        className="scroll-mt-20 py-6 sm:py-10 px-4 sm:px-6 md:px-[12%]"
      >
        <small className="text-purple-600 font-semibold tracking-wider uppercase text-xs text-center flex justify-center mt-4">
          Programming Journey
        </small>
        <h2 className="text-center  md:text-5xl text-3xl sm:text-4xl lg:text-5xl font-bold font-[SUSE] mt-2 mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="flex w-full flex-col lg:flex-row items-center my-6 sm:my-10 gap-6 lg:gap-12">
          <div className="flex-1 w-full lg:w-auto lg:max-w-md">
            <Image
              src={assets.picture}
              alt=""
              className="w-55 md:mr-5 sm:w-62 lg:w-80 rounded-4xl mx-auto"
            />
          </div>
          <div className="flex-1 w-full lg:max-w-2xl">
            <h2 className="text-lg sm:text-xl font-bold font-[Ovo] text-center lg:text-left mb-3 lg:mb-4">
              Passionate Full-Stack Developer from Bangladesh
            </h2>
            <p className="text-xs font-light text-gray-600 mt-2 font-[Raleway] text-center lg:text-left leading-relaxed lg:leading-loose">
              I'm a skilled full-stack MERN developer passionate about creating
              responsive and scalable web applications. I thrive on solving
              complex problems, mastering new technologies, and translating
              ideas into practical digital solutions. Beyond coding, I enjoy
              reading, playing football, and exploring Islamic history.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 max-w-2xl mt-4 sm:mt-2">
              <li className="border-[0.5px] border-gray-400 rounded-xl p-3 sm:p-4 lg:p-5 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:drop-shadow-[0_0px_15px_rgba(0,0,0,0.25)] text-xs text-center">
                <span className="text-lg">🎨</span>
                <h3 className="font-bold text-sm ">HTML & CSS</h3>

                <h3 className="my-1 font-semibold text-gray-700 text-[7px] sm:text-[8px]">
                  April 2024
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Started my journey with HTML and CSS. Built many design
                  projects and learned the basics of web development.
                </p>
              </li>
              <li className="border-[0.5px] border-gray-400 rounded-xl p-3 sm:p-4 lg:p-5 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:drop-shadow-[0_0px_15px_rgba(0,0,0,0.25)] text-xs text-center">
                <span className="text-lg">🚀</span>
                <h3 className="font-bold text-sm">Javascript</h3>

                <h3 className="my-1 font-semibold text-gray-700 text-[7px] sm:text-[8px] ">
                  August 2024
                </h3>
                <p className="text-gray-600 text-xs  leading-relaxed">
                  Discovered my passion for web, started learning Javascript. My
                  strong fundamentals made it easy and fun!
                </p>
              </li>
              <li className="border-[0.5px] border-gray-400 rounded-xl p-3 sm:p-4 lg:p-5 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:drop-shadow-[0_0px_15px_rgba(0,0,0,0.25)] text-xs text-center sm:col-span-2 lg:col-span-1">
                <span className="">
                  <img
                    width="18"
                    height="18"
                    src="https://img.icons8.com/office/40/react.png"
                    alt="react"
                    className="mx-auto mb-2"
                  />
                </span>
                <h3 className="font-bold text-md">React & MERN</h3>

                <h3 className="my-1 font-semibold text-gray-700 text-[7px] sm:text-[8px] ">
                  December 2024
                </h3>
                <p className="text-gray-600 text-[10px] sm:text-xs leading-relaxed">
                  Learned React, joined Programming Hero, and built projects
                  like Book Recipes ,Tutor Booking Platform, Dragon News, Bistro
                  Boss Restaurant.
                </p>
              </li>
            </ul>
            <h4 className="my-3 sm:my-4 mx-2 text-gray-700 font-[Ovo] font-bold text-sm sm:text-base lg:text-lg text-center lg:text-left">
              Tools I Use
            </h4>
            <ul className="flex items-center justify-center lg:justify-start gap-2 sm:gap-4 lg:gap-5 flex-wrap">
              {toolsData.map((tool, index) => (
                <li
                  className="flex items-center justify-center sm:w-10 p-2 aspect-square border border-gray-400 rounded-xl cursor-pointer hover:-translate-y-1 duration-500"
                  key={index}
                >
                  <Image src={tool} alt="" className="w-4 sm:w-5 lg:w-8" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default About;
