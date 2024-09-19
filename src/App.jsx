import React, { useRef, useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";

export default function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const [isNavbarVisible, setNavbarVisible] = useState(true);

  const scrollToSection = (section) => {
    const sections = { home: homeRef, about: aboutRef, portfolio: portfolioRef };
    sections[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  useEffect(() => {
    let lastScroll = 0, scrollUpCount = 0;
  
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      setNavbarVisible(currentScroll > lastScroll ? false : ++scrollUpCount >= 2);
      if (currentScroll > lastScroll) scrollUpCount = 0;
      lastScroll = Math.max(currentScroll, 0);
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  

  return (
    <Router>
      {/* Navbar */}
      <Navbar onScrollTo={scrollToSection} isNavbarVisible={isNavbarVisible} />
    <div data-theme="sunset">
      {/* Main Content */}
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={portfolioRef}>
        <Portfolio />
      </div>
      {/* Footer */}
      <Footer />
    </div> 
    </Router>
  );
}