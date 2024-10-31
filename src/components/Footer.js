import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-gray-300 py-10 px-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-14">
        
        {/* Logo and Social Media */}
        <div className="space-y-4 mt-4">
          <img src="/Layer_1.png" alt="Mediusware Logo" className="w-32 mb-4" />
          <div className="flex space-x-4">
            <img src="/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
            <img src="/Twitter.png" alt="Xing" className="w-6 h-6" />
            <img src="/facebook.png" alt="Facebook" className="w-6 h-6" />
            <img src="/youtube.png" alt="YouTube" className="w-6 h-6" />
          </div>

          {/* Social Proof Section */}
          <div className="flex space-x-4 mt-4 ">
            <div className="bg-gray-900 p-5 rounded-lg flex items-start space-x-4">
              <img src="/clutch2.png" alt="Clutch" className="" />
            </div>
            <div className="bg-gray-900 p-5 rounded-lg flex items-start space-x-4">
              <img src="/google2.png" alt="Google" className="" />
            </div>
            <div className="bg-gray-900 p-5 rounded-lg flex items-start space-x-4">
              <img src="/upwork2.png" alt="Upwork" className="" />
            </div>
          </div>
        </div>

        {/* Company and Services Links */}
        <div className="md:col-span-2 flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
          <div className="space-y-2 pl-2">
            <h3 className="font-semibold text-white">Company</h3>
            <ul className="space-y-1">
              <li>Home</li>
              <li>Services</li>
              <li>Projects</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* <div className = "grid grid-cols-2 gap-x-8"> */}
          <div className="space-y-2 pr-16 mr-16">
            <h3 className="font-semibold text-white">Services</h3>
            <div className = "grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ul className="space-y-1">
              <li>Software Development</li>
              <li>UI/UX Design & Dev</li>
              <li>Web Development</li>
              <li>API Integration</li>
              <li>Mobile App Design</li>
              <li>E-commerce Solutions</li>
              </ul>
              <ul className="space-y-1">
              <li>Mobile App Development</li>
              <li>Enterprise Solution</li>
              <li>SQA Solution</li>
            </ul>
          </div>
        </div>
        </div>
      </div>

      {/* Office Info */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-7 mt-8">
        <div className="bg-blue-900 p-5 rounded-lg flex items-start space-x-4">
          <img src="/world.png" alt="USA Office" className="w-24 h-24" />
          <div>
            <h4 className="text-lg font-semibold text-white">USA Office</h4>
            <div className="flex items-center space-x-2">
                <img src="/location.png" alt="Location Icon" className="w-4 h-4" />
                <p>1903 Commonwealth St, Houston TX 77006, USA</p>
            </div>
            <div className="flex items-center space-x-2">
                <img src="/telephone.png" alt="Telephone" className="w-4 h-4" />
                <p>+1 (978) 431-0122</p>
            </div>
            <div className="flex items-center space-x-2">
                <img src="/mail.png" alt="Mail" className="w-4 h-4" />
                <p>info@mediusware.com</p>
            </div>
          </div>
        </div>
        <div className="bg-blue-900 p-5 rounded-lg flex items-start space-x-4">
          <img src="/bd.png" alt="Bangladesh Office" className="w-24 h-24 rounded-lg" />
          <div>
            <h4 className="text-lg font-semibold text-white">Bangladesh Office</h4>
            <div className="flex items-center space-x-2">
                <img src="/location.png" alt="Location Icon" className="w-4 h-4" />
                <p>1903 Commonwealth St, Houston TX 77006, USA</p>
            </div>
            <div className="flex items-center space-x-2">
                <img src="/telephone.png" alt="Location Icon" className="w-4 h-4" />
                <p>+880 1750-020408</p>
            </div>
            <div className="flex items-center space-x-2">
                <img src="/mail.png" alt="Location Icon" className="w-4 h-4" />
                <p>info@mediusware.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 my-8 mx-16"></div>
      <div className="text-center text-slate-100 text-sm">
        © 2015-2024 Mediusware Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
