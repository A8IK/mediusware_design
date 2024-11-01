import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

const ContactSection = () => {
return (
<div className="container mx-auto mb-28 mt-14">
  <div className="flex flex-col gap-8 justify-between lg:flex-row">
      <div className=" w-full lg:w-1/2">
          <div className="relative">
              <img
                className="w-32 lg:w-1/3"
                src="/person.png"
                alt=""/>
                <div className=" rounded-lg p-6 absolute bottom-0 left-[15%] lg:left-[30%] bg-[#A5EADA4D]/20  backdrop-blur-md">
                <h4 className="text-xl font-semibold">
                    Md. Shahinur Rahman
                    </h4>
                     <span>Managing Director, Mediusware Ltd</span>
                  </div>
                </div>
              <div className="mt-8">
                  <p className="mb-4">
                      I'd be excited to talk with you about your
                      projects or what you need.
                  </p>
                   <p>
                       Fill in the form or send us an email to
                        “info@mediusware.com”
                    </p>
                     <h3 className="text-xl font-semibold my-8">
                      Talk to you in less than 24hs.
                      </h3>
                    </div>

                   <div className="bg-[#F0F8FF] p-6 rounded-lg">
                      <div>
                        <h5 className="font-semibold">Book a call</h5>
                          <p>
                           Feel free to select a time at your
                            convenience!
                          </p>
                          <button className="mt-2 flex items-center gap-4 text-[#0C98EB] font-semibold">
                                    <span> Let's Talk</span>{" "}
                                    <IoIosArrowForward />    
                          </button>
                          </div>
                      </div>
                  </div>

                    <div className=" lg:w-1/2 p-6 bg-[#F0F8FF] rounded-lg">
                        <div>
                            <h4 className="text-2xl font-semibold mb-4">
                                Got an idea? We’ve got the skills.
                            </h4>
                            <p>
                                Fill out our contact form and we’ll get in
                                touch!
                            </p>
                        </div>

                        <form className="mt-8">
                            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                                <div>
                                    <label className="font-medium" htmlFor="username">
                                        Name*
                                    </label>
                                    <input id="username" type="text" placeholder="Enter your name"
                                        className="block w-full px-4 py-2 mt-2 rounded-md outline-none   "/>
                                </div>
                                <div>
                                    <label className="font-medium" htmlFor="username">
                                        Email*
                                    </label>
                                    <input id="name" type="text" placeholder="Enter your name"
                                        className="block w-full px-4 py-2 mt-2 rounded-md outline-none   "/>
                                </div>
                                <div>
                                    <label
                                        className="font-medium"
                                        htmlFor="username">
                                        Phone Number (Optional)
                                    </label>
                                    <input id="username" type="text"
                                        placeholder="Enter your name"
                                        className="block w-full px-4 py-2 mt-2 rounded-md outline-none   " />
                                </div>
                                <div>
                                    <label htmlFor="username">
                                        <span className="font-medium">
                                            Company Name
                                        </span>{" "}
                                        (Optional)
                                    </label>
                                    <input
                                        id="username"
                                        type="text"
                                        placeholder="Enter your name"
                                        className="block w-full px-4 py-2 mt-2 rounded-md outline-none   "/>
                              </div>
                          </div>
                      <div className="mt-6">
                                <label htmlFor="username">
                              <span className="font-medium">
                                   Deep details about your query
                              </span>{" "}
                          (Optional)
                      </label>
                  <textarea
                    name="comment"
                    id=""
                    className="block w-full h-[120px] px-4 py-2 mt-2 rounded-md outline-none">
                  </textarea>
              </div>
            </form>
        </div>
    </div>
</div>
  );
};

export default ContactSection;
