import React, { useEffect, useState } from "react";

const Banner = () => {
  //   const [currentSkill, setCurrentSkill] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  //   const skills = [
  //     "Web Developer",
  //     "UI/UX Designer",
  //     "Full Stack Engineer",
  //     "Creative Problem Solver",
  //   ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const backgroundElements = Array.from({ length: 15 }, (_, i) => (
    <div
      key={i}
      className={`absolute rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 animate-pulse`}
      style={{
        width: `${Math.random() * 100 + 50}px`,
        height: `${Math.random() * 100 + 50}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 2}s`,
        animationDuration: `${Math.random() * 3 + 2}s`,
      }}
    />
  ));
  return (
    <div>
      {/* <div className="flex md:flex-row flex-col justify-around items-center gap-18 py-28 bg-amber-300">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Hi, I'm Shariar </h1>
          <p className="mt-2 text-2xl font-semibold text-teal-600">
            Full Stack Developer
          </p>
          <p className="mt-4 text-lg text-gray-600">
            I build modern, scalable, and user-friendly web applications <br />
            using
            <span className="font-semibold"> React, Node.js, Express,</span> and
            <span className="font-semibold"> MongoDB</span>. Passionate <br />{" "}
            about clean code and problem-solving.
          </p>
          <div className="mt-6 flex gap-4">
            <button
              href="#projects"
              className="px-6 py-3 bg-teal-600 text-white rounded-lg shadow hover:bg-teal-700"
            >
              View My Work
            </button>
            <button
              href="#contact"
              className="px-6 py-3 border border-teal-600 text-teal-600 rounded-lg shadow hover:bg-teal-50"
            >
              Hire Me
            </button>
          </div>
        </div>
        <div>
          <img src="https://i.ibb.co.com/20c4SZpy/profile.jpg" alt="" />
        </div>
      </div> */}

      {/* ai  */}
      <section className="relative min-h-screen w-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {backgroundElements}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 animate-pulse" />
        </div>

        {/* Floating Code Snippets */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 text-green-400/30 font-mono text-sm animate-bounce">
            {"<html>"}
          </div>
          <div
            className="absolute top-40 right-20 text-blue-400/30 font-mono text-sm animate-bounce"
            style={{ animationDelay: "0.5s" }}
          >
            {"function()"}
          </div>
          <div
            className="absolute bottom-40 left-20 text-purple-400/30 font-mono text-sm animate-bounce"
            style={{ animationDelay: "1s" }}
          >
            {"{css}"}
          </div>
          <div
            className="absolute bottom-20 right-10 text-yellow-400/30 font-mono text-sm animate-bounce"
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
                  <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                    Alex Johnson
                  </h1>
                  <div className="h-16 flex items-center">
                    <p className="text-2xl lg:text-3xl text-gray-300 font-light">
                      A passionate{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold transition-all duration-500">
                        {/* {skills[currentSkill]} */}
                        Developer
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
                  <div className="relative z-10 rounded-full overflow-hidden aspect-square max-w-md mx-auto">
                    <img
                      src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20confident%20software%20developer%20in%20modern%20business%20casual%20attire%2C%20sitting%20in%20a%20contemporary%20office%20environment%20with%20soft%20natural%20lighting%2C%20clean%20minimalist%20background%20with%20subtle%20tech%20elements%2C%20high-quality%20portrait%20photography%20style%2C%20warm%20and%20approachable%20expression%2C%20looking%20directly%20at%20camera&width=400&height=400&seq=hero-headshot&orientation=squarish"
                      alt="Professional Headshot"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  {/* Floating Skill Icons */}
                  <div className="absolute top-10 -right-6 w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-float">
                    <i className="ri-reactjs-fill text-blue-400 text-xl"></i>
                  </div>
                  <div
                    className="absolute top-32 -left-8 w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-float"
                    style={{ animationDelay: "0.5s" }}
                  >
                    <i className="ri-nodejs-fill text-green-400 text-xl"></i>
                  </div>
                  <div
                    className="absolute bottom-32 -right-4 w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-float"
                    style={{ animationDelay: "1s" }}
                  >
                    <i className="ri-javascript-fill text-yellow-400 text-xl"></i>
                  </div>
                  <div
                    className="absolute bottom-10 -left-6 w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm animate-float"
                    style={{ animationDelay: "1.5s" }}
                  >
                    <i className="ri-css3-fill text-purple-400 text-xl"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
