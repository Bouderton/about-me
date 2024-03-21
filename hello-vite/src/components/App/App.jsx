import { useState } from "react";
// import reactLogo from "../assets/react.svg";
// import viteLogo from "./vite.svg";
import "../../../src/index.css";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

function App() {
  return (
    <>
      <div className="page">
      <Nav/>
      <Header />
      <h1>Content</h1>
      <Footer/>
      </div>
    </>
  );
}

export default App;

// NOTES
// DESIGN THIS IN FIGMA MAN
