import "../Navigation/Navigation.css";
import { motion } from "motion/react";
import { useState } from "react";

const NavigationMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="nav__mobile-container">
        <nav className="nav__mobile">
          <button
            type="button"
            className="nav__mobile-bt"
            onClick={handleClick}
          >
            X
          </button>
          <div className={`nav__mobile-menu ${isOpen ? "open" : ""}`}>
            <div className="nav__mobile-buttons">
              <button type="button" className="nav__mobile-button">
                Home
              </button>
              <button type="button" className="nav__mobile-button">
                About
              </button>
              <button type="button" className="nav__mobile-button">
                Projects
              </button>
              <button type="button" className="nav__mobile-button">
                Resume
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavigationMobile;
