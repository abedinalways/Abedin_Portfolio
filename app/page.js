'use client'
import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';

const page = () => {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <Header/>
    </div>
  );
};

export default page;