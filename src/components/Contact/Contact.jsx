import React from "react";

const Contact = () => {
  return (
    <div className="px-7 mb-20 md:px-20 py-20 bg-white" id="contact">
      <h1 className="text-4xl font-bold text-black mb-10  relative left-6">
        <div className="group relative inline-block">
          <span className="absolute bottom-0 right-0 h-5 w-5 rounded-full border-[3px] border-black bg-black"></span>
          <span className="absolute bottom-0 right-0 h-5 w-5 animate-ping rounded-full bg-black"></span>
        </div>
        <span className="ml-3">Contact</span>
      </h1>
      <div className="md:grid md:grid-cols-2 gap-32">
        <div
          className="flex flex-col gap-7"
          data-aos="fade-in"
          data-aos-delay="150"
        >
          <h1 className="text-xl font-bold">Contact with Social Media!</h1>
          <span className="ring-1 ring-black text-white hover:text-black space-y-1 md:space-y-2 bg-black hover:bg-white px-5 py-6 rounded-md duration-500">
            <h1 className="text-3xl md:text-4xl">E-mail</h1>
            <h2 className="md:text-xl">abdullahalnirob12@gmail.com</h2>
          </span>
          <span className="ring-1 ring-black text-black hover:text-white space-y-1 md:space-y-2 bg-white hover:bg-black px-5 py-6 rounded-md duration-500">
            <h1 className="text-3xl md:text-4xl">WhatsApp</h1>
            <h2 className="md:text-xl">+8801750402019</h2>
          </span>
        </div>
        <div
          className="flex flex-col gap-7 mt-10 md:mt-0"
          data-aos="fade-in"
          data-aos-delay="200"
        >
          <h1 className="text-xl font-bold">Send a Message!</h1>
          <form action="" className="flex flex-col gap-4">
            <input
              type="text"
              className="border border-black px-4 py-3 w-full rounded-md"
              placeholder="Enter Your Full Name"
            />
            <input
              type="email"
              className="border border-black px-4 py-3 w-full rounded-md"
              placeholder="Enter Your Email Address"
            />
            <textarea
              className="border border-black px-4 py-3 w-full rounded-md"
              placeholder="Enter Your Message"
            />
            {/* <button
              type="button"
              className="px-6 w-[150px] py-3 rounded-md bg-black hover:bg-gray-950 duration-300 text-white"
            >
              Send
            </button> */}
            <div className="flex items-center space-x-3">
              <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-xl font-medium">
                <div
                  className={`inline-flex h-12 translate-y-0 items-center justify-center px-6 bg-black  transition duration-500 group-hover:-translate-y-[150%] text-white`}
                >
                  Contact
                </div>
                <div
                  className={`absolute inline-flex h-12 w-full translate-y-[100%] items-center justify-center transition duration-500 group-hover:translate-y-0 text-white`}
                >
                  <span
                    className={`absolute h-full w-full translate-y-full skew-y-12 scale-y-0 transition duration-500 group-hover:translate-y-0 group-hover:scale-150 bg-black`}
                  ></span>
                  <span className="z-10">Contact</span>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
