import React, { useState } from "react";

const Navbar = () => {
  // bg-[#0F172A]
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <h1>Hello</h1>
            </div>

            {/* Desktop Menu */}
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    href="#about"
                    className="text-gray-500 hover:text-gray-700"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#careers"
                    className="text-gray-500 hover:text-gray-700"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#history"
                    className="text-gray-500 hover:text-gray-700"
                  >
                    History
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-500 hover:text-gray-700"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-gray-500 hover:text-gray-700"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#blog" className="text-gray-500 hover:text-gray-700">
                    Blog
                  </a>
                </li>
              </ul>
            </nav>

            {/* Mobile Hamburger */}
            <div className="block md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <nav className="md:hidden bg-white shadow-lg border-t">
            <ul className="flex flex-col items-start gap-4 p-4 text-sm">
              <li>
                <a
                  href="#about"
                  className="block text-gray-700 hover:text-teal-600"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  className="block text-gray-700 hover:text-teal-600"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#history"
                  className="block text-gray-700 hover:text-teal-600"
                >
                  History
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="block text-gray-700 hover:text-teal-600"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="block text-gray-700 hover:text-teal-600"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="block text-gray-700 hover:text-teal-600"
                >
                  Blog
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </div>
  );
};

export default Navbar;
