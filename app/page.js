'use client'
import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import About from './Components/About';

const page = () => {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <Header />
      <About/>
    </div>
  );
};

export default page;