import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "../Header/Header";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";

function App() {
  return (
    <div className="page">
      <Header />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
