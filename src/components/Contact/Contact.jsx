import React from "react";
import { AiTwotoneMail } from "react-icons/ai";
import { FaFacebook, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
import { IoLocation } from "react-icons/io5";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <section className="py-20 ">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center space-y-4 mb-16">
            <p className="text-blue-600 font-semibold text-sm tracking-wide uppercase">
              Get In Touch
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold ">
              Let's Work Together
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"></div>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it and discuss how
              we can bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-[#0b2545] rounded-2xl shadow-lg p-8 ">
                <h3 className="text-2xl font-bold  mb-6">Send Message</h3>

                <form
                  id="contact-form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        //   value={}
                        //   onChange={}
                        required
                        className="w-full px-4 py-3   border border-[#9f45f3]  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        //   value={}
                        //   onChange={}
                        required
                        className="w-full px-4 py-3 border border-[#9f45f3] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      // value={formData.subject}
                      // onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-[#9f45f3] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm"
                      placeholder="Project inquiry, collaboration, etc."
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      // value={formData.message}
                      // onChange={handleChange}
                      required
                      rows={6}
                      maxLength={500}
                      className="w-full px-4 py-3 border border-[#9f45f3] rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm resize-none"
                      placeholder="Tell me about your project or how I can help you..."
                    ></textarea>
                    <p className="text-xs text-gray-500 mt-1">
                      {/* {formData.message.length}/500 characters */}
                    </p>
                  </div>

                  <button className="w-full py-4 px-6  bg-gradient-to-r from-[#007ea7] to-[#5a189a] text-white font-semibold  hover:from-[#007ea7] hover:to-[#5a189a] transform hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer">
                    submit
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="rounded-2xl shadow-lg p-8  bg-[#0b2545]">
                <h3 className="text-2xl font-bold  mb-6">Contact Info</h3>
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg flex-shrink-0">
                      <i className={` text-orange-400 text-lg`}>
                        <AiTwotoneMail />{" "}
                      </i>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-200 mb-1">
                        Email Address
                      </p>
                      <a
                        href="mailto:shariar2739@gmail.com"
                        className="text-gray-400 hover:text-blue-600 transition-colors duration-300 cursor-pointer"
                      >
                        shariar2739@gmail.com
                      </a>
                    </div>
                  </div>
                  {/*whatsApp  */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg flex-shrink-0">
                      <i className={` text-sky-500 text-lg`}>
                        <FaPhoneAlt />{" "}
                      </i>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-200 mb-1">Phone</p>
                      <a
                        href="tel:+8801873589869"
                        className="text-gray-400 hover:text-blue-600 transition-colors duration-300 cursor-pointer"
                      >
                        +8801873589869
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg flex-shrink-0">
                      <i className={` text-green-600 text-lg`}>
                        <ImWhatsapp />{" "}
                      </i>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-200 mb-1">
                        WhatsApp
                      </p>
                      <a
                        href="tel:+8801873589869"
                        className="text-gray-400 hover:text-blue-600 transition-colors duration-300 cursor-pointer"
                      >
                        +8801873589869
                      </a>
                    </div>
                  </div>
                  {/*Address  */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg flex-shrink-0">
                      <i className={` text-red-600 text-lg`}>
                        <IoLocation />{" "}
                      </i>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-200 mb-1">
                        Location
                      </p>
                      <a
                        href="tel:+8801873589869"
                        className="text-gray-400 hover:text-blue-600 transition-colors duration-300 cursor-pointer"
                      >
                        +8801873589869
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-[#0b2545] rounded-2xl shadow-lg p-8 ">
                <h3 className="text-2xl font-bold  mb-6 ">Follow Me</h3>
                <ul className="flex gap-7 pl-8">
                  <a href="https://github.com/sihab176" target="_blank">
                    {" "}
                    <li className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg flex-shrink-0 text-xl text-black hover:text-blue-700">
                      <FaGithub />
                    </li>
                  </a>

                  <a
                    href="https://www.facebook.com/md.shahariyar.787622"
                    target="_blank"
                  >
                    {" "}
                    <li className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg flex-shrink-0 text-xl text-sky-600 hover:text-blue-700">
                      <FaFacebook />
                    </li>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/shahab-bin-shariar-web/"
                    target="_blank"
                  >
                    {" "}
                    <li className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg flex-shrink-0 text-xl text-blue-600 hover:text-blue-700">
                      <FaLinkedin />
                    </li>
                  </a>
                </ul>
                <div className="flex space-x-4"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
