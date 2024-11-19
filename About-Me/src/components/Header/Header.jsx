import "./Header.css";
import Navigation from "../Navigation/Navigation";
import { motion } from "motion/react";
import { useState } from "react";
import Logo from "../Logo/Logo";
import GeoNode from "../GeoNode/GeoNode";

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
        <div
          className="header__nav-logo"
          onClick={() => {
            homeRef.current?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          <Logo />
        </div>
        <div className="header__content">
          <div className="header__anim">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2.25 }}
              style={{
                fontSize: "40px",
                margin: "0",
                textAlign: "center",
                mixBlendMode: "lighten",
                filter: "brightness(0.8) contrast(1.2)",
              }}
            >
              <GeoNode />
            </motion.div>
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
