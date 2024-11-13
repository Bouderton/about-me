import "./Header.css";
import { useState } from "react";
import Navigation from "../Navigation/Navigation";
import rklogo from "../../images/rklogo.svg";
import { motion, AnimatePresence } from "motion/react";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <Navigation />
      <header className="header">
        <div className="header__content">
          <h2 className="header__title">Ryan Khazal</h2>
          {/* <p className="header__subtitle">Full-Stack Software Engineer</p> */}
          <img src={rklogo} alt="logo" className="header__logo" />
          <p className="header__text">
            // I am a Full-Stack Software Engineer from Las Vegas, Nevada
            looking for opportunities in the tech world. I specialize in
            creating responsive and intuitive web applications fit for all
            devices.
          </p>
        </div>
        <div className="header__anim">
          <button type="text" onClick={() => setIsVisible(!isVisible)}>
            Show/Hide
          </button>
          <AnimatePresence>
            {isVisible && (
              <motion.h1
                initial={{ rotate: "0deg", scale: 0 }}
                animate={{ rotate: "180deg", scale: 1 }}
                exit={{ rotate: "0deg", scale: 0 }}
                transition={{ duration: 1, ease: "backInOut" }}
                style={{ width: "200px", margin: "0" }}
              >
                COOL ANIMATION COMING SOON
              </motion.h1>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
};

export default Header;
