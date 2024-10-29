import React, { useState } from 'react';
import { FaBars, FaCalendarAlt, FaChevronDown } from 'react-icons/fa'; 

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/simple.mp4"></video>

      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center text-white px-4 md:px-6">

        <header className="absolute top-0 left-0 w-full flex justify-between items-center p-4 md:px-8 lg:px-12">
          <a href="#">
            <img src="/Layer_1.png" alt="Mediusware Logo" className="h-8 md:h-10 ml-14 mr-14" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4 font-inter">
            <a href="#services" className="font-inter font-medium text-[18px] leading-[26px] hover:text-gray-300 underline">Home</a>
            {/* <a href="#projects" className="hover:text-gray-300">Services</a> */}
            <div className="relative">
              <button 
                onClick={() => setServicesOpen(!servicesOpen)} 
                className="font-inter font-medium text-[18px] leading-[26px] flex items-center hover:text-gray-300">
                Services <FaChevronDown className="ml-1" />
              </button>
              {servicesOpen && (
                <div className=" absolute left-0 mt-2 bg-black text-white rounded shadow-lg">
                  <a href="#web-development" className="block px-4 py-2 hover:bg-gray-700">Web Development</a>
                  <a href="#mobile-app-development" className="block px-4 py-2 hover:bg-gray-700">Mobile App Development</a>
                  <a href="#ui-ux-design" className="block px-4 py-2 hover:bg-gray-700">UI/UX Design</a>
                </div>
              )}
            </div>
            <a href="#about" className="font-inter font-medium text-[18px] leading-[26px] hover:text-gray-300">Projects</a>
            <a href="#contact" className="font-inter font-medium text-[18px] leading-[26px] hover:text-gray-300">About Us</a>
            <a href="#contact" className="font-inter font-medium text-[18px] leading-[26px] hover:text-gray-300">Contact Us</a>
          </nav>

          {/* Schedule Button */}
          <button className="hidden md:flex items-center border-2 border-white text-white px-4 py-2 rounded-lg hover:bg-blue-500 mr-16 ml-16">
            <FaCalendarAlt className="mr-2" />
            Get a Schedule
          </button>
          <div className="md:hidden flex items-center space-x-4">
            {/* Schedule button for Tablet */}
            <button className="hidden sm:flex items-center border-2 border-white text-white px-4 py-2 rounded-lg hover:bg-blue-500">
              <FaCalendarAlt className="mr-2" />
              Get a Schedule
            </button>

            <button onClick={() => setMenuOpen(!menuOpen)}>
              <FaBars size={24} className="text-white" />
            </button>
          </div>
        </header>

        {/* Tablet/Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-black bg-opacity-90 flex flex-col items-center space-y-4 py-4 md:hidden">
            <a href="#services" className="text-white hover:text-gray-300 underline">Home</a>
            {/* <a href="#projects" className="text-white hover:text-gray-300">Services</a> */}
            <div className="relative">
              <button 
                onClick={() => setServicesOpen(!servicesOpen)} 
                className="flex items-center hover:text-gray-300">
                Services <FaChevronDown className="ml-1" />
              </button>
              {servicesOpen && (
                <div className="absolute left-0 mt-2 bg-black text-white rounded shadow-lg">
                  <a href="#web-development" className="block px-4 py-2 hover:bg-gray-700">Web Development</a>
                  <a href="#mobile-app-development" className="block px-4 py-2 hover:bg-gray-700">Mobile App Development</a>
                  <a href="#ui-ux-design" className="block px-4 py-2 hover:bg-gray-700">UI/UX Design</a>
                </div>
              )}
            </div>
            <a href="#about" className="text-white hover:text-gray-300">Projects</a>
            <a href="#contact" className="text-white hover:text-gray-300">About Us</a>
            <a href="#contact" className="text-white hover:text-gray-300">Contact Us</a>
            <button className="mt-2 flex items-center border-2 border-white text-white px-4 py-2 rounded-lg hover:bg-blue-500">
              <FaCalendarAlt className="mr-2" />
              Get a Schedule
            </button>
          </div>
        )}

        {/* Hero Section */}
        <div className="flex flex-col items-center mt-16 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Transforming Your Ideas into <span className="text-green-400">Digital Outcomes</span>
          </h1>
          <p className="max-w-lg text-base sm:text-lg md:text-xl mb-6">
            Our global journey needs your expertise. Align with our brand ethos and help us reach new heights across the world.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-sora font-bold text-lg py-3 px-6 rounded-[12px] flex items-center tracking-wide">
            <span className="mr-2"><img src="/telephone.png" alt="Talk Icon" className="h-5 w-5" /></span> Talk to Someone
          </button>
        </div>
      </div>

      {/* Services Section */}
      <section className="relative bg-gray-100 pt-20 pb-10 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">
          Things We're <span className="text-green-500">Good At</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-8 lg:px-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold">Software Development</h3>
            <p>We deliver the future of software development and project management.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold">Web Development</h3>
            <p>Our experts offer world-class web development solutions for all businesses.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold">Mobile App Development</h3>
            <p>Get scalable, user-friendly mobile apps that transform user experience.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold">E-commerce Solution</h3>
            <p>Build attractive and efficient e-commerce platforms with us.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold">UI/UX Design</h3>
            <p>Create visually engaging and user-centered experiences.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold">API Integration</h3>
            <p>Ensure a smooth flow between services with our API solutions.</p>
          </div>
        </div>
        <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg">
          See All
        </button>
      </section>
    </div>
  );
};

export default Home;
