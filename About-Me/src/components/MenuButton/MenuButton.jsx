import { motion, MotionConfig } from "motion/react";
import "../Navigation/Navigation.css";

const MenuButton = ({ handleClick, isOpen }) => {
  return (
    <>
      <MotionConfig transition={{ duration: 0.25, ease: "easeInOut" }}>
        <motion.button
          onClick={handleClick}
          className="nav__mobile-menu-button"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            style={{
              outline: "2px solid #d8d9da",
              widht: "50px",
              height: "48px",
              borderRadius: "50%",
              position: "relative",
            }}
          />
          <motion.div
            initial={{ rotate: 0, y: 0 }}
            animate={isOpen ? { rotate: "45deg", y: 8, x: 12 } : {}}
            style={{
              top: "-65%",
              x: "50%",
              width: "24px",
              outline: "2px solid #d8d9da",
              position: "relative",
            }}
          />
          <motion.div
            initial={{ rotate: 0, y: 0 }}
            animate={isOpen ? { rotate: "-45deg", y: -6, x: 12 } : {}}
            style={{
              top: "-35%",
              x: "50%",
              width: "24px",
              outline: "2px solid #d8d9da",
              position: "relative",
            }}
          />
        </motion.button>
      </MotionConfig>
    </>
  );
};

export default MenuButton;
