import { useState, useRef } from "react";
import "./App.css";
import Header from "../Header/Header";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Art from "../Art/Art";
import Next from "../Next/Next";
import Contact from "../Contact/Contact";
import ProgressBar from "../ProgressBar/ProgressBar";
import Footer from "../Footer/Footer";
function App() {
  const homeRef = useRef();
  const aboutRef = useRef();
  const skillsRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();
  const nextRef = useRef();
  const artRef = useRef();

  const [activeCard, setActiveCard] = useState("");
  const [selectCard, setSelectCard] = useState({});
  const [preview, setPreview] = useState();

  // handlers

  // preview card
  const handleSelectCard = (card) => {
    console.log("open");
    setActiveCard("preview");
    setSelectCard(card);
  };

  // close preview
  const handleClosePreview = () => {
    setActiveCard("");
  };

  return (
    <div className="page">
      <Header
        homeRef={homeRef}
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
        nextRef={nextRef}
      />
      <About aboutRef={aboutRef} />
      <Skills skillsRef={skillsRef} />
      <Projects projectsRef={projectsRef} />
      <Art
        artRef={artRef}
        onSelectCard={handleSelectCard}
        isOpen={activeCard === "preview"}
        onClose={handleClosePreview}
      />
      <Next nextRef={nextRef} />
      <Contact contactRef={contactRef} />
      <ProgressBar />
      <Footer />
    </div>
  );
}

export default App;
