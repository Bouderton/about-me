import "./Navigation.css";
import linkedin from "../../images/linkedin-small.svg";
import github from "../../images/github.svg";
import { motion } from "motion/react";

const Navigation = () => {
  return (
    <section className="nav">
      <div className="nav__content">
        <div className="nav__buttons-container">
          <motion.button
            initial={{ opacity: 0, scale: 1, x: -50 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.5 },
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
            Home
          </motion.button>
          <motion.button
            initial={{ scale: 1, opacity: 0, x: -50 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { delay: 0.25, duration: 0.5 },
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
            initial={{ scale: 1, opacity: 0, x: -50 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { delay: 0.5, duration: 0.5 },
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
            initial={{ scale: 1, opacity: 0, x: -50 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { delay: 0.75, duration: 0.5 },
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
            Resume
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
                    delay: 0.3,
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
          {/* Email Icon Coming Soon*/}
        </div>
      </div>
    </section>
  );
};

export default Navigation;
