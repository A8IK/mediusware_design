import React from "react";

const SubscriptionBanner = () => {
  return (
    <div className="bg-white py-12 mt-14">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-blue-900 rounded-lg py-8 px-4 md:px-12 flex flex-col md:flex-row items-center justify-between">
          <div className="text-white mb-6 md:mb-0">
            <h2 className="text-xl md:text-2xl font-semibold">
              Want to know what we are up to?
            </h2>
            <p className="text-sm md:text-base">Subscribe to our newsletter.</p>
          </div>
          <div className="flex w-full md:w-auto gap-2 rounded-lg">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-auto py-2 px-4 rounded-lg border-none focus:outline-none text-gray-900"/>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-r-md md:rounded-full border-l-0 border-blue-600  w-[132px] h-[48px] opacity-100">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionBanner;

