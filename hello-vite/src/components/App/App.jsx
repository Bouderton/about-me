import { useState } from "react";
// import reactLogo from "../assets/react.svg";
// import viteLogo from "./vite.svg";
import { Routes, Route } from "react-router-dom";
import "../../../src/index.css";
import LandingPage from "../LandingPage/LandingPage";
import Main from "../Main/Main";
import Skills from "../Skills/Skills";
import MyStory from "../MyStory/MyStory";
import Projects from "../Projects/Projects";
import ContactMe from "../ContactMe/ContactMe";
import MyArt from "../Art/Art";

function App() {
  return (
      <>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path='/main' element={<Main/>} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/my-story" element={<MyStory />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact-me" element={<ContactMe />} />
          <Route path="/my-art" element={<MyArt />} />
        </Routes>
      </>
  );
}

export default App;

// NOTES
// DESIGN THIS IN FIGMA MAN
// BOYYYYY YOU GONNA HAVE TO REHASH THIS MF
