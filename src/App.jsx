import React, { useRef } from "react"; // Added useRef import
import { BrowserRouter as Router } from "react-router-dom"; // Updated import for Router
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";

export default function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);

  const scrollToSection = (section) => {
    if (section === 'home' && homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === 'about' && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === 'portfolio' && portfolioRef.current) {
      portfolioRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Router>
      {/* Navbar */}
      <Navbar onScrollTo={scrollToSection} />

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
    </Router>
  );
}