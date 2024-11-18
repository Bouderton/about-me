import "./Navigation.css";
import NavigationMobile from "../NavigationMobile/NavigationMobile";
import linkedin from "../../images/linkedin-small.svg";
import github from "../../images/github.svg";
import { motion } from "motion/react";
import { useRef } from "react";

const Navigation = ({
  homeRef,
  aboutRef,
  skillsRef,
  projectsRef,
  contactRef,
}) => {
  return (
    <>
      <nav className="nav" ref={homeRef}>
        <div className="nav__content">
          <div className="nav__buttons-container">
            <motion.button
              onClick={() => {
                aboutRef.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              initial={{ scale: 1, opacity: 0, x: -50 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { delay: 2, duration: 0.5 },
              }}
              whileHover={{
                backgroundColor: "#3a85ff",
                borderRadius: "8px",
                scale: 1.2,
                padding: "5px",
                transition: {
                  duration: 0.5,
                  type: "spring",
                  bounce: 0.4,
                },
              }}
              type="text"
              className="nav__button"
            >
              About
            </motion.button>
            <motion.button
              onClick={() => {
                skillsRef.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              initial={{ scale: 1, opacity: 0, x: -50 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { delay: 2.25, duration: 0.5 },
              }}
              whileHover={{
                backgroundColor: "#3a85ff",
                borderRadius: "8px",
                scale: 1.2,
                padding: "5px",
                transition: {
                  duration: 0.5,
                  type: "spring",
                  bounce: 0.4,
                },
              }}
              type="text"
              className="nav__button"
            >
              Skills
            </motion.button>
            <motion.button
              onClick={() => {
                projectsRef.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              initial={{ scale: 1, opacity: 0, x: -50 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { delay: 2.25, duration: 0.5 },
              }}
              whileHover={{
                backgroundColor: "#3a85ff",
                borderRadius: "8px",
                scale: 1.2,
                padding: "5px",
                transition: {
                  duration: 0.5,
                  type: "spring",
                  bounce: 0.4,
                },
              }}
              type="text"
              className="nav__button"
            >
              Projects
            </motion.button>
            <motion.button
              onClick={() => {
                contactRef.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              initial={{ scale: 1, opacity: 0, x: -50 }}
              animate={{
                x: 0,
                opacity: 1,
                transition: { delay: 2.5, duration: 0.5 },
              }}
              whileHover={{
                backgroundColor: "#3a85ff",
                borderRadius: "8px",
                scale: 1.2,
                padding: "5px",
                transition: {
                  duration: 0.5,
                  type: "spring",
                  bounce: 0.4,
                },
              }}
              type="text"
              className="nav__button"
            >
              Contact
            </motion.button>
          </div>
          <div className="nav__icons-container">
            <a
              style={{ height: "24px" }}
              href="https://www.linkedin.com/in/ryankhazal/"
              rel="noopener noreferer"
              target="_blank"
            >
              <button className="nav__icon" type="button">
                <motion.img
                  initial={{ opacity: 0, scale: 1, x: 25, y: 0 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      delay: 2.25,
                      duration: 0.5,
                    },
                  }}
                  whileHover={{
                    scale: 1.25,
                    x: -3,
                    y: -3,
                    backgroundColor: "#3a85ff",
                    padding: "3px",
                    borderRadius: "3px",
                    transition: { type: "spring", bounce: 0.5 },
                  }}
                  whileTap={{ scale: 0.75 }}
                  src={linkedin}
                  alt="LinkedIn Icon"
                />
              </button>
            </a>
            <a
              style={{ height: "24px" }}
              href="https://github.com/Bouderton"
              rel="noopener noreferer"
              target="_blank"
            >
              <button className="nav__icon" type="button">
                <motion.img
                  initial={{ opacity: 0, scale: 1, x: 25, y: 0 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      delay: 2,
                      duration: 0.5,
                    },
                  }}
                  whileHover={{
                    scale: 1.25,
                    x: -3,
                    y: -3,
                    backgroundColor: "#3a85ff",
                    padding: "3px",
                    borderRadius: "3px",
                    transition: { type: "spring", bounce: 0.5 },
                  }}
                  whileTap={{ scale: 0.75 }}
                  src={github}
                  alt="Github Icon"
                />
              </button>
            </a>
          </div>
        </div>
      </nav>
      <section className="nav__mobile-toggle">
        <NavigationMobile />
      </section>
    </>
  );
};

export default Navigation;
