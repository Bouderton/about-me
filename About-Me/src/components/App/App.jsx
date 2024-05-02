import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "../Header/Header";
import About from "../About/About";
import Skills from "../Skills/Skills";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="page">
      <Header />
      <About />
      <Skills />
    </div>
  );
}

export default App;