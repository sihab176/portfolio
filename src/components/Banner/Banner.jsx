import React, { useEffect, useState } from "react";
import Image from "../../assets/image.jpeg";
import { SiExpress, SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  //   const [currentSkill, setCurrentSkill] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div>
      <section className="relative min-h-screen w-full bg-gradient-to-r from-[#000000] via-[#] to-[#003049] overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* {backgroundElements} */}
          <div className="absolute inset-0 " />
        </div>

        {/* Floating Code Snippets */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-12 left-10 text-green-400/30 font-mono text-sm animate-bounce">
            {"<html>"}
          </div>
          <div
            className="absolute top-20 left-72 text-blue-400/30 font-mono text-sm animate-bounce"
            style={{ animationDelay: "0.5s" }}
          >
            {"function()"}
          </div>

          <div
            className="absolute bottom-20 left-20 text-purple-400/30 font-mono text-sm animate-bounce"
            style={{ animationDelay: "1s" }}
          >
            {"{css}"}
          </div>
          <div
            className="absolute bottom-20 left-96 text-yellow-400/30 font-mono text-sm animate-bounce"
            style={{ animationDelay: "1.5s" }}
          >
            {"React"}
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div
                className={`space-y-8 transition-all duration-1000 ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-20 opacity-0"
                }`}
              >
                <div className="space-y-4">
                  <p className="text-blue-300 font-medium tracking-wide">
                    Hello, I'm
                  </p>
                  <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                    Shahab bin shariar
                  </h1>
                  <div className="h-16 flex items-center">
                    <p className="text-2xl lg:text-3xl text-gray-300 font-light">
                      <span style={{ color: "#14b8a6" /* teal-500 */ }}>
                        <Typewriter
                          words={[
                            "Frontend Developer",
                            "React Developer",
                            "Mern Stack Developer",
                            "JavaScript Ninja",
                          ]}
                          loop={0} // 0 = infinite
                          cursor
                          cursorStyle="|"
                          typeSpeed={70}
                          deleteSpeed={50}
                          delaySpeed={1500}
                        />
                      </span>
                    </p>
                  </div>
                  <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
                    Creating exceptional digital experiences with modern
                    technologies and innovative design solutions that bring
                    ideas to life.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer">
                    View My Work
                  </button>
                  <button className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:border-white/40 hover:bg-white/10 transition-all duration-300 whitespace-nowrap cursor-pointer">
                    Get In Touch
                  </button>
                </div>

                {/* Social Links */}
                <div className="flex space-x-6 pt-4">
                  <div className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer">
                    <i className="ri-github-fill text-xl"></i>
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer">
                    <i className="ri-linkedin-fill text-xl"></i>
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer">
                    <i className="ri-twitter-fill text-xl"></i>
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer">
                    <i className="ri-dribbble-fill text-xl"></i>
                  </div>
                </div>
              </div>

              {/* Right Content  */}
              <div
                className={`relative transition-all duration-1000 delay-300 ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-20 opacity-0"
                }`}
              >
                <div className="relative">
                  {/* Profile Image */}
                  <div className="relative z-10  overflow-hidden lg:left-16">
                    <img
                      src={Image}
                      alt="Professional Headshot"
                      className="w-full max-w-[680px] h-[420px] md:h-[620px] object-cover object-top 
                                 rounded-full md:rounded-full lg:rounded-none mx-auto"
                    />
                  </div>

                  {/* Floating Skill Icons */}
                  {/* MongoDB */}
                  <div
                    className="absolute top-32 -left-8 w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-float "
                    style={{ animationDelay: "0.5s" }}
                  >
                    <i className="ri-nodejs-fill text-green-400 text-xl">
                      <SiMongodb color="#4DB33D" />
                    </i>
                  </div>
                  {/* Node js */}
                  <div
                    className="absolute bottom-10 -left-28 w-12 h-12 bg-purple-400/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-float"
                    style={{ animationDelay: "1.5s" }}
                  >
                    <i className="ri-css3-fill  text-xl">
                      <FaNodeJs color="#68A063" />
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
