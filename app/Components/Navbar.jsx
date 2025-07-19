
import { assets } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import Button from './Button';
const Navbar = () => {
  const sideMenuRef = useRef();
  const openMenu = () => {
   sideMenuRef.current.style.transform='translateX(-16rem)'
  }
  const closeMenu = () => {
   sideMenuRef.current.style.transform='translateX(16rem)'
  }
  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>
      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-100">
        <Link href="#top">
          <span className="flex items-center">
            <Image
              src={assets.logo}
              alt="logo"
              className="w-10 cursor-pointer"
            />
            <h1 className="font-[SUSE] text-2xl font-bold text-purple-900">
              ABEDIN.
            </h1>
          </span>
        </Link>
        <ul className="hidden md:flex items-center gap-10 font-semibold bg-white shadow-sm bg-opacity-50 px-10 py-2 rounded-2xl ">
          <li className='hover:text-purple-600'>
            <a href="#project">Project</a>
          </li>
          <li className='hover:text-purple-600'>
            <a href="#skill">Skill</a>
          </li>
          <li className='hover:text-purple-600'>
            <a href="#about">About Me</a>
          </li>
          <li className='hover:text-purple-600'>
            <a href="#education">Education</a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button className="cursor-pointer">
            <Image src={assets.moon_icon} alt="" className="w-4" />
          </button>
          <Button />
          <button className="cursor-pointer block md:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu_black} alt="" className="w-4" />
          </button>
        </div>
        {/* mobile menu */}
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-purple-50 transition duration-500'>
          <div className='absolute right-6 top-6' onClick={closeMenu}>
            <Image src={assets.close_black} alt='' className='w-2 cursor-pointer'/>
          </div>
          <li>
            <a href="#project" onClick={closeMenu}>Project</a>
          </li>
          <li>
            <a href="#skill" onClick={closeMenu}>Skill</a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>About Me</a>
          </li>
          <li>
            <a href="#education" onClick={closeMenu}>Education</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;