import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "../Header/Header";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import ProgressBar from "../ProgressBar/ProgressBar";
import Footer from "../Footer/Footer";
function App() {
  return (
    <div className="page">
      {/* DONT FORGET TO BOLD IMPORTANT TEXT */}
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <ProgressBar />
      <Footer />
    </div>
  );
}

export default App;
