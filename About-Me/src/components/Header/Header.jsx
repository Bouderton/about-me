import "./Header.css";
import Navigation from "../Navigation/Navigation";
import { motion } from "motion/react";
import { useState } from "react";
import Logo from "../Logo/Logo";

const Header = ({ homeRef, aboutRef, skillsRef, projectsRef, contactRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <Navigation
        homeRef={homeRef}
        aboutRef={aboutRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
        handleClick={handleClick}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />
      <header className="header">
        {/* <Logo homeRef={homeRef} setIsOpen={setIsOpen} /> */}
        <div className="header__content">
          <div className="header__anim">
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              style={{
                fontSize: "40px",
                width: "250px",
                margin: "0",
                textAlign: "center",
              }}
            >
              COOL ANIMATION COMING SOON
            </motion.h1>
          </div>
          <div className="header__text-container">
            <motion.h2
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
              className="header__title"
            >
              Ryan Khazal
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.75 }}
              viewport={{ once: true }}
              className="header__subtitle"
            >
              Full-Stack Software Engineer
            </motion.p>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
