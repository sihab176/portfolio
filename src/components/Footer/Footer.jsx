import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h2 className="text-lg font-semibold mb-4">About Me</h2>
            <p className="text-sm leading-6">
              I’m a passionate web developer specializing in building responsive
              and user-friendly websites. Always eager to learn new
              technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Follow Me</h2>
            <div className="flex space-x-4 text-xl">
              <a
                href="https://github.com"
                target="_blank"
                className="hover:text-white transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                className="hover:text-white transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                className="hover:text-white transition"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
