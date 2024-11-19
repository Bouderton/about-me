import "../Navigation/Navigation.css";
import Logo from "../Logo/Logo";
import MenuButton from "../MenuButton/MenuButton";
import { motion, AnimatePresence } from "motion/react";
import { list } from "../../utils/consts";

const NavigationMobile = ({
  mobileRef,
  aboutRef,
  skillsRef,
  projectsRef,
  contactRef,
  handleClick,
  isOpen,
}) => {
  return (
    <>
      <nav className="nav__mobile" ref={mobileRef}>
        <div
          className="nav__mobile-logo"
          onClick={() => {
            mobileRef.current?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          <Logo />
        </div>
        <MenuButton handleClick={handleClick} isOpen={isOpen} />
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ visibility: "hidden", opacity: 0, scaleY: 0 }}
              animate={{ scaleY: 1, opacity: 1, visibility: "visible" }}
              exit={{ visibility: "hidden", opactiy: 0, scaleY: 0 }}
              style={{
                background: "#20272d",
                borderRadius: "0 0 50px 50px",
                transformOrigin: "top",
              }}
              className="nav__mobile-menu"
            >
              <motion.div
                initial="hidden"
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.75 }}
                className="nav__mobile-buttons"
                variants={list}
              >
                <motion.button
                  onClick={() => {
                    handleClick();
                    aboutRef.current?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  initial={{ y: -50, opacity: 0 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    transition: {
                      delay: 0.5,
                      type: "spring",
                      bounce: 0.2,
                      duration: 0.25,
                    },
                  }}
                  exit={{ opactiy: 0, scale: 0 }}
                  whileHover={{
                    backgroundColor: "#3a85ff",
                    borderRadius: "20px",
                    scale: 1.2,
                    transition: {
                      duration: 0.25,
                      type: "spring",
                      bounce: 0.4,
                    },
                  }}
                  whileTap={{
                    scale: 0.8,
                    transition: {
                      duration: 0.25,
                      type: "spring",
                      bounce: 0.25,
                    },
                  }}
                  type="button"
                  className="nav__mobile-button"
                >
                  About
                </motion.button>
                <motion.button
                  onClick={() => {
                    handleClick();
                    skillsRef.current?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  initial={{ y: -50, opacity: 0 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    transition: {
                      delay: 0.75,
                      type: "spring",
                      bounce: 0.2,
                      duration: 0.25,
                    },
                  }}
                  exit={{ opactiy: 0, scale: 0 }}
                  whileHover={{
                    backgroundColor: "#3a85ff",
                    borderRadius: "20px",
                    scale: 1.2,
                    transition: {
                      duration: 0.5,
                      type: "spring",
                      bounce: 0.4,
                    },
                  }}
                  type="button"
                  className="nav__mobile-button"
                >
                  Skills
                </motion.button>
                <motion.button
                  onClick={() => {
                    handleClick();
                    projectsRef.current?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  initial={{ y: -50, opacity: 0 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    transition: {
                      delay: 1,
                      type: "spring",
                      bounce: 0.2,
                      duration: 0.25,
                    },
                  }}
                  exit={{ opactiy: 0, scale: 0 }}
                  whileHover={{
                    backgroundColor: "#3a85ff",
                    borderRadius: "20px",
                    scale: 1.2,
                    transition: {
                      duration: 0.5,
                      type: "spring",
                      bounce: 0.4,
                    },
                  }}
                  type="button"
                  className="nav__mobile-button"
                >
                  Projects
                </motion.button>
                <motion.button
                  onClick={() => {
                    handleClick();
                    contactRef.current?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                  initial={{ y: -50, opacity: 0 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                    transition: {
                      delay: 1.25,
                      type: "spring",
                      bounce: 0.2,
                      duration: 0.25,
                    },
                  }}
                  exit={{ opactiy: 0, scale: 0 }}
                  whileHover={{
                    backgroundColor: "#3a85ff",
                    borderRadius: "20px",
                    scale: 1.2,
                    transition: {
                      duration: 0.5,
                      type: "spring",
                      bounce: 0.4,
                    },
                  }}
                  type="button"
                  className="nav__mobile-button"
                >
                  Contact
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default NavigationMobile;
