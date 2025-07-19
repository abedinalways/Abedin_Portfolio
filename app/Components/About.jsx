import { assets, infoList } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { HiBriefcase } from 'react-icons/hi';

const About = () => {
  return (
    <div id="about" className="scroll-mt-20 py-10 px-[12%]">
      <small className="flex items-center text-center gap-1 bg-purple-400 text-white text-xs border border-fuchsia-300 justify-center w-46 rounded-2xl mx-auto">
        Programming Journey <HiBriefcase />{' '}
      </small>
      <h2 className="text-center text-3xl md:text-5xl font-[SUSE] mt-4">
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
            Hello! I’m Sheikh Minhaul Abedin, a skilled full-stack MERN
            developer passionate about creating responsive and scalable web
            applications. I thrive on solving complex problems, mastering new
            technologies, and translating ideas into practical digital
            solutions. Beyond coding, I enjoy reading, playing football, and
            exploring Islamic history.
            <br /> Let’s connect and build something remarkable together.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl text-xs mt-3">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                key={index}
                className="border-[0.5px] border-gray-400 rounded-xl p-4 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:drop-shadow-[4px 4px 0 #000]"
              >
                <Image src={icon} alt="" className="w-6 mt-3" />
                <h3 className=" w-20 my-4 font-semibold text-gray-700 text-sm">
                  {title}
                </h3>
                <p className="text-gray-600">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;