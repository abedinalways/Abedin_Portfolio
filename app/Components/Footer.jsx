import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div className="mt-6 flex justify-center">
      <span className="flex items-center mx-30">
        <hr className='text-gray-900' />
        <Image src={assets.logo} alt="logo" className="w-8 cursor-pointer" />
        <h1 className="font-[SUSE] text-xl font-bold text-[#6246EC]">
          ABEDIN.
        </h1>
      </span>
      <div className='flex text-md'>
        <p>@2025 ABEDIN.    All rights reserved.</p>
        
      </div>
    </div>
  );
};

export default Footer;
