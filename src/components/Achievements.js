import React from "react";

const Achievements = () => {
  const achievements = [
    { id: 1, imgSrc: "/clutch.png", alt: "Clutch Rating" },
    { id: 2, imgSrc: "/upwork.png", alt: "Upwork Top Rated Plus" },
    { id: 3, imgSrc: "/google.png", alt: "Google Rating" },
    { id: 4, imgSrc: "/topDev.png", alt: "Top Developers" },
  ];

  return (
    <div className="bg-blue-50 py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
          Achievements <span className="text-teal-500">& Awards</span>
        </h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          People know us for our top-notch work and great customer service, all of whom have expressed nothing but
          positive feedback about our services. Take a moment to see for yourself.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="bg-white p-4 rounded-md shadow-md flex justify-center items-center">
              <img
                src={achievement.imgSrc}
                alt={achievement.alt}
                className="w-24 h-24 object-contain"/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
