import React from 'react';

const ProjectShowcase = () => {
  return (
    <section className="p-6 md:p-10">
      <div className="text-left lg:text-left mb-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold">
          Projects We’d Hang on <span className="text-green-500">Our Refrigerator</span>
        </h2>
      </div>
      {/* Description and Button */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-5 md:space-y-0 max-w-5xl mx-auto">
        <p className="text-gray-600 text-left max-w-2xl">
          Discover our latest work, showcasing innovative solutions and successful collaborations that highlight our expertise in
          delivering high-quality software development projects.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          See All →
        </button>
      </div>

      {/* Project Cards */}
      <div className="grid md:grid-cols-3 lg:gap-6 mt-8 max-w-5xl mx-auto">

        <div className="bg-gray-100 p-4 rounded-tl-lg shadow-md hover:shadow-lg transition w-[464px] h-[540px] flex flex-col">
          <img src="/pro1.jpeg" alt="GoThruhike Website Redesign" className="w-full h-[60%] rounded-md mb-4 object-cover" />
          <h3 className="text-xl font-semibold">GoThruhike Website Redesign</h3>
          <p className="text-gray-600 text-sm mt-2 flex-grow">
          Thruhike is the ultimate platform for discovering and sharing your favorite places and products...
          </p>
          <a href="#" className="text-blue-500 mt-4 inline-block self-end">View Project →</a>
        </div>

        <div className="bg-gray-100 p-4 rounded-tl-lg shadow-md hover:shadow-lg transition w-[464px] h-[540px] flex flex-col">
            <img src="/pro2.jpeg" alt="Gamezone Game Launcher" className="w-full h-[60%] rounded-md mb-4 object-cover" />
            <h3 className="text-xl font-semibold">Gamezone Game Launcher</h3>
            <p className="text-gray-600 text-sm mt-2 flex-grow">
              Game Launcher is a sleek desktop application designed exclusively for gamers...
            </p>
            <a href="#" className="text-blue-500 mt-4 inline-block self-end">View Project →</a>
      </div>

      <div className="bg-gray-100 p-4 rounded-tl-lg shadow-md hover:shadow-lg transition w-[464px] h-[540px] flex flex-col">
          <img src="/pro3.jpeg" alt="Learn Here" className="w-full h-[60%] rounded-md mb-4 object-cover" />
          <h3 className="text-xl font-semibold">Learn Here</h3>
          <p className="text-gray-600 text-sm mt-2 flex-grow">
          LearnHere is the platform that presents all the lessons from Beginner to Expert Level with live...
          </p>
          <a href="#" className="text-blue-500 mt-4 inline-block self-end">View Project →</a>
      </div>
</div>
    </section>
  );
};

export default ProjectShowcase;
