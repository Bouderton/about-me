import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "../Header/Header";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Motion from "../Motion/Motion";
import MotionView from "../Motion/MotionView";
function App() {
  return (
    <div className="page">
      {/* DONT FORGET TO BOLD IMPORTANT TEXT */}
      <Motion />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <MotionView />
    </div>
  );
}

export default App;
