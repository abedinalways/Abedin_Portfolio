'use client'
import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import Skills from './Components/Skills';

const page = () => {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills/>
    </div>
  );
};

export default page;