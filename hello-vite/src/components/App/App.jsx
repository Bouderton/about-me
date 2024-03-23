import { useState } from "react";
// import reactLogo from "../assets/react.svg";
// import viteLogo from "./vite.svg";
import { Routes, Route } from "react-router-dom";
import "../../../src/index.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Skills from "../Skills/Skills";
import MyStory from "../MyStory/MyStory";
import Projects from "../Projects/Projects";

function App() {
  return (
    <>
      <div className="page">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/my-story" element={<MyStory />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;

// NOTES
// DESIGN THIS IN FIGMA MAN
