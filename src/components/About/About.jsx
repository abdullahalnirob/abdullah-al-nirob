import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaDiscord, FaFacebook, FaGithub, FaTelegram } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { SiGmail } from "react-icons/si";

const About = () => {
  return (
    <div
      id="about"
      className="md:px-28 py-20  border-t-2 border-b-2 border-gray-600"
    >
      <h1 className="text-4xl font-bold text-black mb-10  relative left-14 md:left-3">
        <div className="group relative inline-block">
          <span className="absolute bottom-0 right-0 h-5 w-5 rounded-full border-[3px] border-black bg-black"></span>
          <span className="absolute bottom-0 right-0 h-5 w-5 animate-ping rounded-full bg-black"></span>
        </div>
        <span className="ml-3">About Me</span>
      </h1>
      <div className="flex flex-col items-center md:flex-row justify-center md:justify-between space-x-6">
        <div className="px-10 md:px-0">
          <img
            src="myimage.png"
            alt="Abdullah Al Nirob"
            className="rounded-2xl ring-2 ring-gray-500 w-[90%]"
            //   data-aos="fade-right"
            //   data-aos-duration="1000"
          />
        </div>
        <div className="md:w-2/3 space-y-0 md:px-20">
          <h1
            className="mt-5 md:mt-0 text-5xl my-2 font-extrabold"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="50"
          >
            Hey there!
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="50"
            className="text-gray-900 text-xl"
          >
            I’m <b>Abdullah Al Nirob</b>, a skilled Frontend Web Developer from
            Bangladesh, specializing in React.js, HTML, CSS, and JavaScript. I
            lead <b>CodeCraftor</b>, where we provide top-notch web development
            services. I’m passionate about creating responsive and dynamic
            websites that enhance user experience. My goal is to deliver
            innovative solutions that help businesses thrive online.
          </p>
          {/* <div className="hidden md:grid grid-cols-3">
            <li
              className="flex flex-col py-5"
              data-aos-duration="900"
              data-aos="zoom-in"
            >
              <h1 className="bg-[#ccc] hover:text-[#ccc] hover:bg-black w-14 font-bold rounded-full text-3xl md:text-5xl p-2">
                02
              </h1>
              <p className="text-[18px]">Award winner</p>
            </li>
            <li className="flex flex-col py-5" data-aos="zoom-in">
              <h1 className="bg-[#ccc] hover:text-[#ccc] hover:bg-black w-14 font-bold rounded-full text-3xl md:text-5xl p-2">
                06
              </h1>
              <p className="text-[18px]">Clients</p>
            </li>
            <li className="flex flex-col py-5" data-aos="zoom-in">
              <h1 className="bg-[#ccc] hover:text-[#ccc] hover:bg-black w-14 font-bold rounded-full text-3xl md:text-5xl p-2">
                03
              </h1>
              <p className="text-[18px]">Job done successfully</p>
            </li>
          </div> */}
          <div className="flex flex-col space-y-3">
            <h1 className="text-4xl mt-7 mb-2 text-gray-900 font-extrabold">
              Available On!
            </h1>
            <div className="flex flex-wrap gap-3">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/abdullah-al-nirob-096994295"
                className="bg-[#ccc] hover:text-[#ccc] hover:bg-black hover:-translate-y-1 transform duration-100 p-3 cursor-pointer rounded-full"
              >
                <IoLogoLinkedin className="text-2xl md:text-3xl" />
              </a>
              <a
                target="_blank"
                href="https://www.fb.com/dev.abdullahalnirob/"
                className="bg-[#ccc] hover:text-[#ccc] hover:bg-black hover:-translate-y-1 transform duration-100 p-3 cursor-pointer rounded-full"
              >
                <FaFacebook className="text-2xl md:text-3xl" />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/dev.abdullahalnirob/"
                className="bg-[#ccc] hover:text-[#ccc] hover:bg-black hover:-translate-y-1 transform duration-100 p-3 cursor-pointer rounded-full"
              >
                <BsInstagram className="text-2xl md:text-3xl" />
              </a>
              <a
                target="_blank"
                href="https://github.com/abdullahalnirob/"
                className="bg-[#ccc] hover:text-[#ccc] hover:bg-black hover:-translate-y-1 transform duration-100 p-3 cursor-pointer rounded-full"
              >
                <FaGithub className="text-2xl md:text-3xl" />
              </a>
              <a
                target="_blank"
                href="https://discord.com/dev.abdullah/"
                className="bg-[#ccc] hover:text-[#ccc] hover:bg-black hover:-translate-y-1 transform duration-100 p-3 cursor-pointer rounded-full"
              >
                <FaDiscord className="text-2xl md:text-3xl" />
              </a>
              <a
                href="https://t.me/01750402019/"
                className="bg-[#ccc] hover:text-[#ccc] hover:bg-black hover:-translate-y-1 transform duration-100 p-3 cursor-pointer rounded-full"
              >
                <FaTelegram className="text-2xl md:text-3xl" />
              </a>
              <a
                href="mailto:abdullahalnirob12@gmail.com"
                className="bg-[#ccc] hover:text-[#ccc] hover:bg-black hover:-translate-y-1 transform duration-100 p-3 cursor-pointer rounded-full"
              >
                <SiGmail className="text-2xl md:text-3xl" />
              </a>
              <a
                target="_blank"
                href="https://api.whatsapp.com/send/?phone=01750402019"
                className="bg-[#ccc] hover:text-[#ccc] hover:bg-black hover:-translate-y-1 transform duration-100 p-3 cursor-pointer rounded-full"
              >
                <FaSquareWhatsapp className="text-2xl md:text-3xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
