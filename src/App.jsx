import React from "react";
import About from "./components/About";
import Skills from "./components/Skills";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";
import ParticlesBackground from "./components/ParticlesBackground"; 
import ProjectDetails from './components/ProjectDetails'; 

const App = () => {
  return (
    <>
      <ParticlesBackground />
      <Navbar />
      <Home />
      <About />
      <Education/>
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <BackToTopButton />
    </>
  );
};

export default App;



