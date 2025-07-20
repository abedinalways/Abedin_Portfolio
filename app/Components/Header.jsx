import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
// import profile from '../../assets/profile-pic.png'
import profilePic from '../../assets/profile.jpg'
import DecryptedText from '../textAnimation/DecryptedText/DecryptedText';
import { LiaDownloadSolid } from 'react-icons/lia';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="mt-28 mx-auto">
      <div>
        <Image
          src={profilePic}
          alt=""
          className="rounded-full w-32 mx-auto"
        ></Image>
      </div>
      <h1 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-[Ovo] text-center justify-center">
        Hi! I'm Sheikh Minhajul Abedin{' '}
        <Image src={assets.hand_icon} alt="" className="w-6" />{' '}
      </h1>
      <h1 className="text-3xl sm:mx-auto lg:text-[50px] font-[SUSE] flex items-center justify-center">
        <DecryptedText
          text="A Full Stack Web Developer"
          speed={150}
          maxIterations={20}
          characters="ABCDEFHIJKLMNOPQRSTUVWXYZ!!?"
          className="revealed"
          parentClassName="all-letters"
          encryptedClassName="encrypted"
          animateOn="view"
          revealDirection="center"
        />
      </h1>
      <p className="font-[Raleway] text-center text-md md:w-1/2 mx-auto mt-4">
        I build performant, scalable web applications and APIs, combining
        seamless frontend experiences with powerful backend engineering.{' '}
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 justify-center">
        <Link href="https://github.com/abedinalways">
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/material-outlined/24/github.png"
            alt="github"
            target='_blank'
          />
        </Link>
        <Link href="https://www.linkedin.com/in/sheikh-minhajul-abedin/">
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/color/48/linkedin.png"
            alt="linkedin"
            target='_blank'
          />
        </Link>

        <a
          href="/Sheikh Minhajul Abedin-Full Stack Developer.pdf"
          download
          className="px-8 py-2 border-2 rounded-full text-purple-600 text-lg hover:bg-purple-600 hover:text-white border-purple-600 flex items-center gap-2 font-semibold"
        >
          <span className="flex items-center">
            {' '}
            My Resume <LiaDownloadSolid />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Header;