import { assets, toolsData } from '@/assets/assets';
import Image from 'next/image';



const About = () => {
  return (
    <div id="about" className="scroll-mt-20 py-10 px-[12%]">
      <small className="flex items-center text-center text-xs justify-center">
        Programming Journey
      </small>
      <h2 className="text-center text-3xl md:text-5xl font-[SUSE] mt-2">
        About Me
      </h2>
      <div className="flex w-full flex-col lg:flex-row items-center my-10">
        <div className="flex-1">
          <Image
            src={assets.picture}
            alt=""
            className="w-62 sm:w-70 rounded-4xl mx-auto"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-bold font-[Ovo]">
            Passionate Full-Stack Developer from Bangladesh
          </h2>
          <p className="text-sm font-light  text-gray-600 mt-2 font-[Raleway] ">
            I’m a skilled full-stack MERN developer passionate about creating
            responsive and scalable web applications. I thrive on solving
            complex problems, mastering new technologies, and translating ideas
            into practical digital solutions. Beyond coding, I enjoy reading,
            playing football, and exploring Islamic history.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mt-3">
            <li className="border-[0.5px] border-gray-400 rounded-xl p-4 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:drop-shadow-[0_0px_15px_rgba(0,0,0,0.25)] text-xs text-center">
              <span className="text-lg">🎨</span>
              <h3 className="font-bold text-md">HTML & CSS</h3>

              <h3 className=" my-1 font-semibold text-gray-700 text-[8px]">
                April 2024
              </h3>
              <p className="text-gray-600">
                Started my journey with HTML and CSS. Built many design projects
                and learned the basics of web development.
              </p>
            </li>
            <li className="border-[0.5px] border-gray-400 rounded-xl p-4 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:drop-shadow-[0_0px_15px_rgba(0,0,0,0.25)] text-xs text-center">
              <span className="text-lg">🚀</span>
              <h3 className="font-bold text-md">Javascript</h3>

              <h3 className=" my-1 font-semibold text-gray-700 text-[8px]">
                August 2024
              </h3>
              <p className="text-gray-600">
                Discovered my passion for web, started learning Javascript. My
                strong fundamentals made it easy and fun!
              </p>
            </li>
            <li className="border-[0.5px] border-gray-400 rounded-xl p-4 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:drop-shadow-[0_0px_15px_rgba(0,0,0,0.25)] text-xs text-center">
              <span className="">
                <img
                  width="22"
                  height="22"
                  src="https://img.icons8.com/office/40/react.png"
                  alt="react"
                  className="mx-auto"
                />
              </span>
              <h3 className="font-bold text-md">React & MERN</h3>

              <h3 className=" my-1 font-semibold text-gray-700 text-[8px]">
                December 2024
              </h3>
              <p className="text-gray-600">
                Learned React, joined Programming Hero, and built projects like
                Book Recipes ,Tutor Booking Platform, Dragon News, Bistro Boss Restaurant.
              </p>
            </li>
          </ul>
          <h4 className="my-4 text-gray-700 font-[Ovo] font-bold">Tools I Use</h4>
          <ul className="flex items-center gap-2 sm:gap-4">
            {toolsData.map((tool, index) => (
              <li
                className="flex items-center justify-center w-10 sm:w-12 aspect-square border border-gray-400 rounded-xl cursor-pointer hover:-translate-y-1 duration-500"
                key={index}
              >
                <Image src={tool} alt="" className="w-5 sm:w-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;