import React from "react";
import AboutImg from "../../assets/about-2.avif";

const About = () => {
  return (
    <div className="">
      {/* <section className="w-11/12 max-w-7xl mx-auto py-16 px-6 grid lg:grid-cols-2 gap-10 items-center">
    
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-900 relative inline-block">
            About Me
            <span className="absolute -bottom-1 left-0 w-1/3 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></span>
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Hi, I’m{" "}
            <span className="font-semibold text-blue-600">Your Name</span>, a
            passionate
            <span className="font-semibold"> MERN Stack Developer</span> with a
            love for crafting intuitive and high-performing web applications. I
            thrive on turning complex problems into elegant solutions with
            clean, maintainable code.
          </p>

          <p className="text-gray-700 leading-relaxed">
            With experience in{" "}
            <span className="font-semibold">
              React, Node.js, Tailwind CSS, and MongoDB
            </span>
            , I focus on creating seamless user experiences that are visually
            engaging and functional. My goal is to build applications that make
            a positive impact.
          </p>

         
        </div>

        
        <div className="flex justify-center">
          <div className="relative group">
            <img
              src={AboutImg}
              alt="About Me"
              className="rounded-2xl shadow-lg transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section> */}
      <section className="w-11/12 max-w-7xl mx-auto py-16 px-6 grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Text Content */}
        <div className="space-y-3">
          <h2 className="text-4xl font-bold text-gray-900 relative inline-block">
            About Me
            <span className="absolute -bottom-1 left-0 w-1/3 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></span>
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Hi, I’m <span className="font-semibold text-blue-600">Shariar</span>
            , a passionate
            <span className="font-semibold"> MERN Stack Developer</span> who
            started programming with nothing but curiosity and the determination
            to bring ideas to life. My journey began with simple HTML & CSS
            pages, but over time, I discovered the excitement of building fully
            functional.
          </p>

          <p className="text-gray-700 leading-relaxed">
            I enjoy creating{" "}
            <span className="font-semibold">
              clean, maintainable, and scalable
            </span>{" "}
            web solutions. Whether it’s designing smooth user interfaces in{" "}
            <span className="font-semibold">React</span> or building powerful
            backends with{" "}
            <span className="font-semibold">Node.js and MongoDB</span>.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Outside of coding, I’m a big fan of{" "}
            <span className="font-semibold">football</span>, love exploring{" "}
            <span className="font-semibold">new technologies</span>, and
            sometimes spend hours tinkering with creative side projects. 
          </p>

          <p className="text-gray-700 leading-relaxed">
            My personality is a mix of{" "}
            <span className="font-semibold">
              creativity, discipline, and problem-solving
            </span>
            . I believe every project is an opportunity to learn, improve, and
            make something meaningful.
          </p>

          {/* <div className="flex gap-4">
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium shadow-lg hover:scale-105 transition-transform"
            >
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              className="px-6 py-3 rounded-lg border border-gray-400 text-gray-700 font-medium hover:bg-gray-100 transition-colors"
            >
              Download Resume
            </a>
          </div> */}
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <div className="relative group">
            <img
              src={AboutImg}
              alt="About Me"
              className="rounded-2xl shadow-lg transform group-hover:scale-105 transition-transform duration-300 w-full max-w-[600px] h-auto object-cover"
            />
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
