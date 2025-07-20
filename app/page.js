'use client'
import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Education from './Components/Education';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const page = () => {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer/>
    </div>
  );
};

export default page;