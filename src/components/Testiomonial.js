import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    image: "/p1.jpeg",
    title: "Mediwaure renewed our trust in outsourcing IT development in the USA.",
    name: "Jenny Wilson",
    position: "CEO, Company Name",
  },
  {
    image: "/p2.jpeg",
    title: "Banking the unbanked with the help of Mediwaure developers...",
    name: "Courtney Henry",
    position: "CTO, Company Name",
  },
  {
    image: "/p3.jpeg",
    title: "Our Digital Transformation Journey Fueled by Top-Tier IT Solutions...",
    name: "Kristin Watson",
    position: "Director, Company Name",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dotsClass: "slick-dots custom-dots", // Add custom class here
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
          backgroundColor: '#cbd5e1', // Light gray color for inactive dots
          transition: 'background-color 0.3s ease, transform 0.3s ease',
        }}
      />
    ),
  };

  return (
    <div className="bg-blue-50 py-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">
          What the People <span className="text-teal-500">Are Saying</span>
        </h2>
        <p className="text-gray-600 mt-2">
          Explore success stories from clients across a range of industries, spanning from techpreneurs and startups to established enterprises.
        </p>
      </div>
      <div className="container mx-auto px-4">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <img
                  src={testimonial.image}
                  alt="Testimonial"
                  className="w-full h-48 object-cover rounded-lg mb-4"/>
                <h3 className="text-lg font-semibold text-gray-800">
                  {testimonial.title}
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  {testimonial.name}, {testimonial.position}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
