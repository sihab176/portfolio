import React from "react";
import AboutImg from "../../assets/about-2.avif";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="">
      <motion.section
        initial={{ opacity: 0, y: 50 }} // শুরুর অবস্থায়
        whileInView={{ opacity: 1, y: 0 }} // যখন viewport-এ আসবে তখন
        transition={{ duration: 0.8, ease: "easeOut" }} // animation speed
        viewport={{ once: true, amount: 0.2 }}
        className="w-11/12 max-w-7xl mx-auto py-16 px-6 grid lg:grid-cols-2 gap-10 items-center"
      >
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <h2 className="text-4xl font-bold  relative inline-block">
            About Me
            <span className="absolute -bottom-1 left-0 w-1/3 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></span>
          </h2>

          <p className="text-gray-400 leading-relaxed">
            Hi, I’m <span className="font-semibold text-blue-600">Shariar</span>
            , a passionate
            <span className="font-semibold"> MERN Stack Developer</span> who
            started programming with nothing but curiosity and the determination
            to bring ideas to life. My journey began with simple HTML & CSS
            pages, but over time, I discovered the excitement of building fully
            functional.
          </p>

          <p className="text-gray-400 leading-relaxed">
            I enjoy creating{" "}
            <span className="font-semibold">
              clean, maintainable, and scalable
            </span>{" "}
            web solutions. Whether it’s designing smooth user interfaces in{" "}
            <span className="font-semibold">React</span> or building powerful
            backends with{" "}
            <span className="font-semibold">Node.js and MongoDB</span>.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Outside of coding, I’m a big fan of{" "}
            <span className="font-semibold">football</span>, love exploring{" "}
            <span className="font-semibold">new technologies</span>, and
            sometimes spend hours tinkering with creative side projects.
          </p>

          <p className="text-gray-400 leading-relaxed">
            My personality is a mix of{" "}
            <span className="font-semibold">
              creativity, discipline, and problem-solving
            </span>
            . I believe every project is an opportunity to learn, improve, and
            make something meaningful.
          </p>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative group">
            <img
              src={AboutImg}
              alt="About Me"
              className="rounded-2xl shadow-lg transform group-hover:scale-105 transition-transform duration-300 w-full max-w-[600px] h-auto object-cover"
            />
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default About;
