import React, { useState, useEffect } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const handleMenu = () => {
    setShowMenu(!showMenu);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 400) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* <nav
        className={
          color
            ? "h-[80px] z-50 shadow fixed top-0 left-0 right-0 bg-opacity-30 px-5 py-3 flex justify-between items-center bg-black"
            : "h-[80px] glass z-50 shadow fixed top-0 left-0 right-0 bg-opacity-30 px-5 py-3 flex justify-between items-center"
        }
      > */}
      <nav
        className={`h-[60px] md:h-[80px]  z-50 shadow fixed top-0 left-0 right-0 px-5 py-3 flex justify-between items-center ${
          isScrolled ? "bg-black duration-700 shadow-gray-700 shadow" : "glass"
        }`}
      >
        <div className="md:text-2xl">
          <h1
            className={`hover:scale-105 duration-150 ${
              isScrolled ? "text-white" : "text-black"
            }`}
          >
            Abdullah Al Nirob
          </h1>
        </div>
        <ul
          className={`md:flex duration-500 items-center py-10 md:py-0 gap-3 text-xl fixed md:static top-[55px] left-0 right-0 select-none ${
            isScrolled
              ? "bg-gray-950 md:bg-transparent"
              : "glass-2 md:bg-transparent"
          } ${showMenu ? "block" : "hidden"}`}
        >
          <a href="#home">
            <li
              className={`cursor-pointer px-5 py-2  mx-3 md:mx-0 rounded md:rounded-full ${
                isScrolled
                  ? "text-white hover:text-black hover:bg-white"
                  : " hover:text-white hover:bg-black"
              }`}
            >
              Home
            </li>
          </a>
          <a href="#about">
            <li
              className={`cursor-pointer px-5 py-2  mx-3 md:mx-0 rounded md:rounded-full ${
                isScrolled
                  ? "text-white hover:text-black hover:bg-white"
                  : "hover:text-white hover:bg-black"
              }`}
            >
              About
            </li>
          </a>
          <a href="#portfolio">
            <li
              className={`cursor-pointer px-5 py-2  mx-3 md:mx-0 rounded md:rounded-full ${
                isScrolled
                  ? "text-white hover:text-black hover:bg-white"
                  : " hover:text-white hover:bg-black"
              }`}
            >
              Portfolio
            </li>
          </a>
          <a href="#skills">
            {" "}
            <li
              className={`cursor-pointer px-5 py-2  mx-3 md:mx-0 rounded md:rounded-full ${
                isScrolled
                  ? "text-white hover:text-black hover:bg-white"
                  : "hover:text-white hover:bg-black"
              }`}
            >
              Skills
            </li>
          </a>
        </ul>
        <div className="flex items-center space-x-3">
          <a href="#contact">
            <button className="group relative inline-flex h-10 md:h-12 items-center justify-center overflow-hidden rounded-2xl font-medium">
              <div
                className={`inline-flex h-12 translate-y-0 items-center justify-center px-4 md:px-6 bg-black  transition duration-500 group-hover:-translate-y-[150%] ${
                  isScrolled ? "bg-white text-black" : "bg-black text-white"
                }`}
              >
                Contact
              </div>
              <div
                className={`absolute inline-flex h-12 w-full translate-y-[100%] items-center justify-center transition duration-500 group-hover:translate-y-0 ${
                  isScrolled ? " text-black" : "text-white"
                }`}
              >
                <span
                  className={`absolute h-full w-full translate-y-full skew-y-12 scale-y-0 transition duration-500 group-hover:translate-y-0 group-hover:scale-150 ${
                    isScrolled ? "bg-white" : "bg-black"
                  }`}
                ></span>
                <span className="z-10">Contact</span>
              </div>
            </button>
          </a>
          <div onClick={handleMenu} className="md:hidden ">
            {showMenu ? (
              <RxCross1
                className={` text-4xl ${
                  isScrolled ? "text-white" : "text-black"
                }`}
              />
            ) : (
              <IoMenuSharp
                className={`text-4xl ${
                  isScrolled ? "text-white" : "text-black"
                }`}
              />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
