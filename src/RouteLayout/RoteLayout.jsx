import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Banner from '../components/Banner/Banner';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

const RoteLayout = () => {
    return (
         <div className="max-w-7xl mx-auto lora-font">
        <Navbar />
        <Banner />
        <div id='about'>
          <About />
        </div>
        <div id='skill'>
          <Skills />
        </div>
        <div id='projects'>
          <Projects />
        </div>
        <div id='contact'>
          <Contact />
        </div>
        <Footer />
      </div>
    );
};

export default RoteLayout;