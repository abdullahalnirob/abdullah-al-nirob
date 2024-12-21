// Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#000] pl-5 lg:pl-0 shadow-md shadow-gray-400 text-white py-8">
      <div className="container mx-auto md:px-4">
        <div className="flex flex-wrap justify-between">
          {/* About Section */}
          <div className="w-full sm:w-1/2 lg:w-1/3 mb-6">
            <h3 className="text-xl font-bold mb-3">About Us</h3>
            <p className="pr-12">
              I’m Abdullah Al Nirob, a skilled Front-end Web Developer from
              Bangladesh, specializing in React.js.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full sm:w-1/2 lg:w-1/3 mb-6">
            <h3 className="text-xl font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="hover:text-white relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-white relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#portfoli"
                  className="hover:text-white relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white 
      after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full sm:w-1/2 lg:w-1/3 mb-6">
            <h3 className="text-xl font-bold mb-3">Contact Us</h3>
            <ul className="space-y-2">
              <li>Email: abdullahalnirob12@gmail.com</li>
              <li>Phone: +8801750402019</li>
              <li>Address: Bogura, Bangladesh</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center text-sm">
          &copy; {new Date().getFullYear()} Abdullah Al Nirob. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
