'use client'
import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';

const page = () => {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <Header />
      <About />
      <Projects/>
    </div>
  );
};

export default page;