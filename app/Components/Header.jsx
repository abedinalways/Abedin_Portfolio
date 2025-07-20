import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
// import profile from '../../assets/profile-pic.png'
import profilePic from '../../assets/profile.jpg';
import DecryptedText from '../textAnimation/DecryptedText/DecryptedText';
import { LiaDownloadSolid } from 'react-icons/lia';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="mt-16 sm:mt-20 lg:mt-28 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-4 sm:mb-6">
        <Image
          src={profilePic}
          alt="Sheikh Minhajul Abedin"
          className="rounded-full w-24 sm:w-28 lg:w-32 mx-auto"
        />
      </div>

      <h1 className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-4 font-[Ovo] text-center">
        <span className="flex items-center gap-1 sm:gap-2">
          Hi! I'm Sheikh Minhajul Abedin
          <Image
            src={assets.hand_icon}
            alt="hand wave"
            className="w-5 sm:w-6"
          />
        </span>
      </h1>

      <div className="text-2xl sm:text-3xl lg:text-[50px] font-[SUSE] flex items-center justify-center mb-4 sm:mb-6">
        <DecryptedText
          text="A Full Stack Web Developer"
          speed={150}
          maxIterations={20}
          characters="!!erpoleved lluf kcats bew!!"
          className="revealed"
          parentClassName="all-letters"
          encryptedClassName="encrypted"
          animateOn="view"
          revealDirection="center"
        />
      </div>

      <p className="font-[Raleway] text-center text-sm sm:text-base lg:text-lg w-full sm:w-3/4 lg:w-1/2 mx-auto mt-4 px-4 sm:px-0 leading-relaxed text-gray-700">
        I build performant, scalable web applications and APIs, combining
        seamless frontend experiences with powerful backend engineering.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-6 sm:mt-8 justify-center">
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/abedinalways"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/material-outlined/24/github.png"
              alt="github"
              className="w-6 h-6 sm:w-7 sm:h-7 hover:scale-110 transition-transform duration-300"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/sheikh-minhajul-abedin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/color/48/linkedin.png"
              alt="linkedin"
              className="w-6 h-6 sm:w-7 sm:h-7 hover:scale-110 transition-transform duration-300"
            />
          </Link>
        </div>

        <a
          href="/Sheikh Minhajul Abedin-Full Stack Developer.pdf"
          download
          className="px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 border-2 rounded-full text-purple-600 text-sm sm:text-base lg:text-lg hover:bg-purple-600 hover:text-white border-purple-600 flex items-center gap-2 font-semibold transition-all duration-300 hover:shadow-lg"
        >
          <span className="flex items-center gap-1 sm:gap-2">
            My Resume
            <LiaDownloadSolid className="text-base sm:text-lg" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Header;
