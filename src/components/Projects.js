import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectShowcase = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dotsClass: "slick-dots custom-dots",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
    customPaging: (i) => (
      <button
        className="dot-button"
        style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: '#cbd5e1',
          transition: 'background-color 0.3s ease, transform 0.3s ease',
          marginTop: '5px',
        }}/>
    ),
  };

  return (
    <section className="container mx-auto mt-10 p-1 md:p-10 mb-10">
      <div className="text-left lg:text-left mb-6 mx-7">
        <h2 className="text-3xl font-bold">
          Projects We’d Hang on <span className="text-teal-500">Our Refrigerator</span>
        </h2>
      </div>

      {/* Description and Button */}
      <div className="container flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-4 mx-7">
        <p className="text-gray-600 text-left max-w-4xl">
          Discover our latest work, showcasing innovative solutions and successful collaborations that highlight our expertise in
          delivering high-quality software development projects.
        </p>
        <button className="bg-blue-500 text-white px-4 mr-12 py-2 rounded-lg hover:bg-blue-600">
          See All →
        </button>
      </div>

    <Slider className = "container mx-auto mt-4 p-0 md:p-4  mb-10 w-full" {...settings}>
    <div className="project-card flex flex-col justify-between p-4 border rounded-lg h-[450px]">
      <img src="/pro1.jpeg" alt="GoThruhike Website Redesign" className="rounded-lg w-full h-[250px] object-cover mb-4" />
      <h3 className="text-xl font-semibold mb-2">GoThruhike Website Redesign</h3>
      <p className="text-gray-600 text-sm mb-1 overflow-hidden" style={{ height: '80px' }}>
        Thruhike is the ultimate platform for discovering and sharing your favorite places and products. Our mission is to celebrate local business and inspire new experiences.
      </p>
      <a href="Home.js" className="text-blue-500 mt-auto inline-block">View Project →</a>
    </div>

    <div className="project-card flex flex-col justify-between p-4 border rounded-lg h-[450px]">
      <img src="/pro2.jpeg" alt="Gamezone Game Launcher" className="rounded-lg w-full h-[250px] object-cover mb-4" />
      <h3 className="text-xl font-semibold mb-2">Gamezone Game Launcher</h3>
      <p className="text-gray-600 text-sm mb-1 overflow-hidden" style={{ height: '80px' }}>
        Game Launcher is a sleek desktop application designed exclusively for gamers. It offers seamless access to your favorite games, customizable settings.
      </p>
      <a href="Home.js" className="text-blue-500 mt-auto inline-block">View Project →</a>
    </div>

    <div className="project-card flex flex-col justify-between p-4 border rounded-lg h-[450px]">
      <img src="/pro3.jpeg" alt="Learn Here" className="rounded-lg w-full h-[250px] object-cover mb-4" />
      <h3 className="text-xl font-semibold mb-2">Learn Here</h3>
      <p className="text-gray-600 text-sm mb-1 overflow-hidden" style={{ height: '80px' }}>
        LearnHere is the platform that presents all the lessons from Beginner to Expert Level with live and recorded classes.
      </p>
      <a href="Home.js" className="text-blue-500 inline-block">View Project →</a>
    </div>
  </Slider>
</section>
  );
};

export default ProjectShowcase;

