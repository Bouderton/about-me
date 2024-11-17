import "./Navigation.css";
import linkedin from "../../images/linkedin-small.svg";
import github from "../../images/github.svg";
import { navButtons } from "../../utils/consts";
import { motion } from "motion/react";

const Navigation = () => {
  return (
    <section className="nav">
      <div className="nav__content">
        <div className="nav__buttons-container">
          <motion.button
            initial={{ background: "transparent", scale: 1 }}
            whileHover={{ background: "#3a85ff", scale: 1.2 }}
            transition={{ type: "spring", bounce: 0.5 }}
            type="text"
            className="nav__button"
          >
            Home
          </motion.button>
          <motion.button
            initial={{ background: "transparent", scale: 1 }}
            whileHover={{ background: "#3a85ff", scale: 1.2 }}
            transition={{ type: "spring", bounce: 0.5 }}
            type="text"
            className="nav__button"
          >
            About
          </motion.button>
          <motion.button
            initial={{ background: "transparent", scale: 1 }}
            whileHover={{ background: "#3a85ff", scale: 1.2 }}
            transition={{ type: "spring", bounce: 0.5 }}
            type="text"
            className="nav__button"
          >
            Projects
          </motion.button>
          <motion.button
            initial={{ background: "transparent", scale: 1 }}
            whileHover={{ background: "#3a85ff", scale: 1.2 }}
            transition={{ type: "spring", bounce: 0.5 }}
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
              <img src={linkedin} alt="LinkedIn Icon" />
            </button>
          </a>
          <a
            style={{ height: "24px" }}
            href="https://github.com/Bouderton"
            rel="noopener noreferer"
            target="_blank"
          >
            <button className="nav__icon" type="button">
              <img src={github} alt="Github Icon" />
            </button>
          </a>
          {/* Email Icon Coming Soon*/}
        </div>
      </div>
    </section>
  );
};

export default Navigation;
