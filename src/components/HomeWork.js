export default function HowWeWork() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="lg:flex lg:justify-between lg:gap-12 font-sora">
          {/* Left Section */}
          <div className="lg:w-[55%] xl:w-[50%] mb-8 lg:mb-0 ">
            <h2 className="text-4xl font-bold mb-4">
              How We <span className="text-teal-500">Work Together</span>
            </h2>
            <p className="text-gray-600 max-w-none">
              Mediusware is a US-based software development company with unique access to premium developers & designers.
              We follow a structured process to ensure project success. Our approach guarantees reliability and ongoing support
              for every project. Here is the process we work on:
            </p>
          </div>

          {/* Right Section */}
          <div className="lg:w-3/3 flex flex-col gap-8">
            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mr-7">
              {[
                { title: "Planning", text: "Collaborate with clients to create a detailed project plan.", icon: "/planning.png" },
                { title: "Defining", text: "Document project requirements and specifications.", icon: "/Defining.png" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="w-[342px] h-[260px] p-6 bg-gray-100 rounded-tl-[12px] shadow-md flex flex-col justify-between items-start">
                  <img src={item.icon} alt={`${item.title} icon`} className="w-12 h-12 mb-4" />
                  <h3 className="text-[24px] font-semibold leading-[32px] font-sora mb-2">{item.title}</h3>
                  <p className="text-[16px] font-normal leading-[24px] font-sora">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {[
            { title: "Designing", text: "Develop and refine user-friendly prototypes and wireframes.", icon: "/Designing.png" },
            { title: "Coding & Implement", text: "Develop the software using best practices and latest technologies.", icon: "/Coding.png" },
            { title: "Testing", text: "Rigorously test for functionality, performance, and security.", icon: "/Testing.png" },
            { title: "Integration", text: "Integrate components, conduct final testing, and provide support.", icon: "/Integration.png" },
          ].map((item, index) => (
            <div
              key={index}
              className="w-[342px] h-[260px] p-6 bg-gray-100 rounded-tl-[12px] shadow-md flex flex-col justify-between items-start">
              <img src={item.icon} alt={`${item.title} icon`} className="w-12 h-12 mb-4" />
              <h3 className="text-[24px] font-semibold leading-[32px] font-sora mb-2">{item.title}</h3>
              <p className="text-[16px] font-normal leading-[24px] font-sora">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
