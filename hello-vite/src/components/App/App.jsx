import { useState } from "react";
// import reactLogo from "../assets/react.svg";
// import viteLogo from "./vite.svg";
import { Routes, Route } from "react-router-dom";
import "../../../src/index.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Skills from "../Skills/Skills";
import MyStory from "../MyStory/MyStory";
import Projects from "../Projects/Projects";
import ContactMe from "../ContactMe/ContactMe";
import MyArt from "../MyArt/MyArt";

function App() {
  return (
    <>
      <div className="page">
        <Nav/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/my-story" element={<MyStory />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact-me" element={<ContactMe />} />
          <Route path="/my-art" element={<MyArt />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

// NOTES
// DESIGN THIS IN FIGMA MAN
