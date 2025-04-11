import React from "react";
import {
  FaCss3,
  FaHtml5,
  FaNodeJs,
  FaPencilAlt,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { IoLogoFigma, IoLogoJavascript } from "react-icons/io5";
import { MdAnimation } from "react-icons/md";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiAdobephotoshop,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiMongoose,
} from "react-icons/si";

const Skills = () => {
  return (
    <div className="grid-bg px-7 md:px-32 py-20" id="skills">
      {/* <h1 className="text-white text-5xl my-2 font-extrabold">
        <div className="group relative inline-block">
          <span className="absolute bottom-0 right-0 h-5 w-5 rounded-full  bg-white"></span>
          <span className="absolute bottom-0 right-0 h-5 w-5 animate-ping rounded-full bg-white"></span>
        </div>
        <span className="mx-3">My Skills</span>
      </h1> */}
      <h1 className="text-4xl font-bold text-white mb-2  relative left-6 md:left-3">
        <div className="group relative inline-block">
          <span className="absolute bottom-0 right-0 h-5 w-5 rounded-full border-[3px] border-white bg-white"></span>
          <span className="absolute bottom-0 right-0 h-5 w-5 animate-ping rounded-full bg-white"></span>
        </div>
        <span className="ml-3">My Skills</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-10">
        <div className="mt-20">
          <ul
            className="flex flex-col gap-2"
            data-aos="fade-in"
            data-aos-delay="150"
          >
            <h1 className="text-white text-3xl">Front End</h1>
            <li className="flex items-center space-x-2 text-xl px-5 py-5 bg-white rounded-md">
              <span>
                <FaHtml5 className="text-3xl mx-3" />
              </span>
              HTML
            </li>
            <li className="flex items-center space-x-2 text-xl px-5 py-5 bg-white rounded-md">
              <span>
                <FaCss3 className="text-3xl mx-3" />
              </span>
              CSS
            </li>
            <li className="flex items-center space-x-2 text-xl px-5 py-5 bg-white rounded-md">
              <span>
                <RiTailwindCssFill className="text-3xl mx-3" />
              </span>
              Tailwind CSS
            </li>
            <li className="flex items-center space-x-5 text-xl px-5 py-5 bg-white rounded-md">
              <span>
                <IoLogoJavascript className="text-3xl mx-3" />
              </span>
              JavaScript
            </li>
            {/* <li className="flex items-center space-x-5 text-xl px-5 py-5 bg-white rounded-md">
              <span>
              <FaPython className="text-3xl mx-3" />
              </span>
              Python
              </li> */}
            <li className="flex items-center space-x-5 text-xl px-5 py-5 bg-white rounded-md">
              <span>
                <FaReact className=" text-3xl mx-3" />
              </span>
              React js
            </li>
            <li className="flex items-center space-x-2 text-xl px-5 py-5 bg-white rounded-md">
              <span>
                <SiFirebase className="text-3xl mx-3" />
              </span>
              Firebase
            </li>
          </ul>
        </div>
        <div className="mt-20">
          <ul
            className="flex flex-col gap-2"
            data-aos="fade-in"
            data-aos-delay="200"
          >
            <h1 className="text-white text-3xl">Back End</h1>
            <li className="flex items-center space-x-5 text-xl px-5 py-5 bg-white rounded-md">
              <span>
                <FaNodeJs className="text-3xl mx-3" />
              </span>
              Node js
            </li>
            <li className="flex items-center space-x-5 text-xl px-5 py-5 bg-white rounded-md">
              <span>
                <SiExpress className="text-3xl mx-3" />
              </span>
              Express js
            </li>
            <li className="flex items-center space-x-5 text-xl px-5 py-5 bg-white rounded-md">
              <span>
                <SiMongodb className="text-3xl mx-3" />
              </span>
              MongoDB
            </li>
            <li className="flex items-center space-x-5 text-xl px-5 py-5 bg-white rounded-md">
              <span>
                <SiMongoose className="text-3xl mx-3" />
              </span>
              Mongoose
            </li>
          </ul>
        </div>
        <div className="mt-20">
          <ul
            className="flex flex-col gap-2"
            data-aos="fade-in"
            data-aos-delay="250"
          >
            <h1 className="text-white text-3xl">Others</h1>
            <li className="flex items-center space-x-5 text-xl px-5 py-5 bg-white rounded-md">
              <span>
                <FaPython className="text-3xl mx-3" />
              </span>
              Python
            </li>
            <li className="flex items-center space-x-5 text-xl px-5 py-5 bg-white rounded-md">
              <span>
                <FaPencilAlt className="text-3xl mx-3" />
              </span>
              Creative Design
            </li>
            <li className="flex items-center space-x-5 text-xl px-5 py-5 bg-white rounded-md">
              <span>
                <MdAnimation className="text-3xl mx-3" />
              </span>
              Animation
            </li>
            <li className="flex items-center space-x-5 text-xl px-5 py-5 bg-white rounded-md">
              <span>
                <IoLogoFigma className="text-3xl mx-3" />
              </span>
              Figma
            </li>
            <li className="flex items-center space-x-5 text-xl px-5 py-5 bg-white rounded-md">
              <span>
                <SiAdobephotoshop className="text-3xl mx-3" />
              </span>
              Photoshop
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
