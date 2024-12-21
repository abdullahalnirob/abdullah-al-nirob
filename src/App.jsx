import React, { useEffect } from "react";
import Navbar from "./components/share/Navbar";
import Hero from "./components/Hero/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/share/Footer";
const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Skills></Skills>
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
