import React from 'react';

const services = [
  {
    title: 'Software Development',
    description: 'Relieve the burden of Software Development and Project Management.',
    image: '/softDev.jpeg',
  },
  {
    title: 'Web Development',
    description: 'We offer One-Of-A-Kind web development solutions to businesses all around the world.',
    image: '/webDev.jpeg',
  },
  {
    title: 'Mobile App Development',
    description: 'Innovative solutions tailored to your needs, delivering seamless user experiences.',
    image: '/mobDev.jpeg',
  },
  {
    title: 'E-commerce Solution',
    description: 'E-commerce websites need to be user-friendly, but attractive at the same time.',
    image: '/eCommerce.jpeg',
  },
  {
    title: 'UI/UX Design',
    description: 'Crafting interfaces that enhance user experiences, elevating brand engagement effortlessly.',
    image: '/uiDesign.jpeg',
  },
  {
    title: 'API Integration',
    description: 'Bridging platforms for effortless data flow, enabling enhanced operational efficiency.',
    image: '/api.jpeg',
  },
];

const ServicesSection = () => {
  return (
    <section className="container mx-auto pt-20 pb-10 text-center">
      <h2 
        className="text-2xl sm:text-3xl md:text-[48px] font-semibold leading-[30px] sm:leading-[40px] md:leading-[60px] tracking-[-0.02em] mb-8 whitespace-nowrap overflow-hidden text-ellipsis" 
        style={{ fontFamily: 'Sora, sans-serif' }}>
        Things We’re <span className="text-green-500">Good At</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-14 md:px-8 lg:px-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-cover bg-center bg-no-repeat p-6 rounded-lg shadow-md text-white flex flex-col justify-end"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL + service.image})`,
              height: '300px',}}>
            <h3 className="text-[24px] font-[Sora] font-semibold leading-[32px] text-left mb-2">
              {service.title}
            </h3>
            <p className="text-left">{service.description}</p>
          </div>
        ))}
      </div>
        <button className="mt-8 bg-blue-500 text-white font-medium px-8 py-3 rounded-lg hover:bg-blue-600 flex items-center justify-center mx-auto">See All<img src="/seeAll.png" alt="Arrow Icon" className="ml-2 w-[16px] h-[12px] opacity-100 border-t-[1.67px] border-transparent inline-flex"/>
        </button>
    </section>
  );
};

export default ServicesSection;
