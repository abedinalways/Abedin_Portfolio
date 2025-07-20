
import { assets } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';


const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();
  const openMenu = () => {
   sideMenuRef.current.style.transform='translateX(-16rem)'
  }
  const closeMenu = () => {
   sideMenuRef.current.style.transform='translateX(16rem)'
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (scrollY > 50) {
        setIsScroll(true)
      }
      else {
        setIsScroll(false)
      }
    })
  },[])
  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-100 ${
          isScroll ? 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm' : ''
        }`}
      >
        <Link href="#top">
          <span className="flex items-center">
            <Image
              src={assets.logo}
              alt="logo"
              className="w-10 cursor-pointer"
            />
            <h1 className="font-[SUSE] text-2xl font-bold text-[#6246EC]">
              ABEDIN <span className='text-purple-800 font-bold'>.</span>
            </h1>
          </span>
        </Link>
        <ul
          className={`hidden md:flex items-center gap-10 font-semibold  px-10 py-2 rounded-2xl ${
            isScroll ? '' : 'bg-white shadow-sm bg-opacity-50'
          }`}
        >
          <li className="hover:text-[#6246EC]">
            <a href="#project">Project</a>
          </li>
          <li className="hover:text-[#6246EC]">
            <a href="#skills">Skill</a>
          </li>
          <li className="hover:text-[#6246EC]">
            <a href="#about">About Me</a>
          </li>
          <li className="hover:text-[#6246EC]">
            <a href="#education">Education</a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          
          
          <button className="hidden md:flex  cursor-pointer items-center px-8 py-2 border-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white gap-2 font-semibold">
            <a href="#contact">Contact Me</a>
          </button>

          <button
            className="cursor-pointer block md:hidden ml-3"
            onClick={openMenu}
          >
            <Image src={assets.menu_black} alt="" className="w-4" />
          </button>
        </div>
        {/* mobile menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-purple-50 transition duration-500"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt=""
              className="w-2 cursor-pointer"
            />
          </div>
          <li>
            <a href="#project" onClick={closeMenu}>
              Project
            </a>
          </li>
          <li>
            <a href="#skills" onClick={closeMenu}>
              Skill
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>
              About Me
            </a>
          </li>
          <li>
            <a href="#education" onClick={closeMenu}>
              Education
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;