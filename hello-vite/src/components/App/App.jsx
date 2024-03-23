import { useState } from "react";
// import reactLogo from "../assets/react.svg";
// import viteLogo from "./vite.svg";
import { Routes, Route } from "react-router-dom";
import "../../../src/index.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Skills from "../Skills/Skills";

function App() {
  return (
    <>
      <div className="page">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;

// NOTES
// DESIGN THIS IN FIGMA MAN
