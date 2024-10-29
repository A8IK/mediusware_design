export default function HowWeWork() {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row lg:items-start gap-12">
          
          {/* Left Section: Header Text */}
          <div className="lg:w-1/3 flex flex-col">
            <h2 className="text-4xl font-bold mb-4">
              How We <span className="text-teal-500">Work Together</span>
            </h2>
            <p className="text-gray-600 max-w-md mb-8">
              Mediusware is a US-based software development company with unique access to premium developers & designers. 
              We follow a structured process to ensure project success. Our approach guarantees reliability and ongoing support 
              for every project. Here is the process we work on:
            </p>
          </div>
  
          <div className="lg:w-2/3 flex flex-col gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Planning", text: "Collaborate with clients to create a detailed project plan.", icon: "/planning.png" },
                { title: "Defining", text: "Document project requirements and specifications.", icon: "/Defining.png" },
              ].map((item, index) => (
                <div key={index} className="p-6 bg-gray-50 rounded-lg shadow-lg flex flex-col items-start">
                  <img src={item.icon} alt={`${item.title} icon`} className="w-12 h-12 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>
  

    <div className="container mx-auto px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
                { title: "Designing", text: "Develop and refine user-friendly prototypes and wireframes.", icon: "/Designing.png" },
                { title: "Coding & Implement", text: "Develop the software using best practices and latest technologies.", icon: "/Coding.png" },
                { title: "Testing", text: "Rigorously test for functionality, performance, and security.", icon: "/Testing.png" },
                { title: "Integration", text: "Integrate components, conduct final testing, and provide support.", icon: "/Integration.png" },
                ].map((item, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-lg shadow-lg flex flex-col items-start">
                <img src={item.icon} alt={`${item.title} icon`} className="w-12 h-12 mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.text}</p>
            </div>
        ))}
        </div>
        </div>
     </div>
    </div>
    </section>
    );
  }
  