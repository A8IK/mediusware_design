import React from 'react';

const About = () => {
  return (
    <section className="bg-blue-50 py-16 px-4 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center relative">

        <div className="lg:w-1/2 mb-8 lg:mb-0 relative z-10">
          <img
            src="/about.png"
            alt="Team working"
            className="rounded-xl shadow-lg w-full object-cover"/>
        </div>

        {/* Content with Overlap */}
        <div className="lg:w-1/2 bg-white p-8 rounded-xl shadow-lg lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:-translate-x-12 z-20 space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            A Little Bit <span className="text-green-500">About Us</span>
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Incepted in 2015, Mediusware Ltd. has been serving as a leading IT
            Solution provider in USA & Bangladesh. Our aim is to help businesses
            all around the world by providing the digital solutions according to
            their need. Serving a number of renowned companies from the USA, UK,
            and many other countries, we have already created a wide range of
            satisfied clients!</p>
          <div className="flex space-x-8 mb-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-800">800+</p>
              <p className="text-gray-500">Projects Completed</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-800">100+</p>
              <p className="text-gray-500">Team Members</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-800">1,000+</p>
              <p className="text-gray-500">Happy Customers</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <button className="flex items-center bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition shadow-md">
              <img src="/telephone.png" alt="Contact Us Icon" className="w-5 h-5 mr-2" />
              Contact Us
            </button>
            <button className="flex items-center justify-between bg-gray-100 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-200 transition shadow-md">
              Company Deck
              <img src="/download.png" alt="Company Deck Icon" className="w-4 h-4 ml-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
