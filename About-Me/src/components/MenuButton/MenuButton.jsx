import { motion, MotionConfig } from "motion/react";
import "../Navigation/Navigation.css";

const MenuButton = ({ handleClick, isOpen }) => {
  return (
    <>
      <motion.button
        onClick={handleClick}
        className="nav__mobile-menu-button"
        whileHover={{
          backgroundColor: "#3a85ff",
        }}
        whileTap={{
          scale: 0.8,
          transition: { duration: 0.25, type: "spring", bounce: 0.25 },
        }}
      >
        <motion.svg
          width="48"
          height="48"
          viewBox="0 0 240 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ scale: 1 }}
          whileHover={{
            scale: 1.15,
            transition: {
              duration: 0.25,
              type: "spring",
              bounce: 0.25,
            },
          }}
        >
          <motion.rect
            x="2.5"
            y="2.5"
            width="235"
            height="235"
            rx="117.5"
            stroke="white"
            strokeWidth="5"
            initial={{ opacity: 0, pathLength: 0, scale: 1 }}
            animate={{ opacity: 1, pathLength: 1 }}
            transition={{ delay: 1, duration: 0.75 }}
          />
        </motion.svg>
        <motion.div
          initial={isOpen ? { rotate: 0, y: 0 } : { opacity: 0, scaleX: 0 }}
          animate={
            isOpen
              ? { rotate: "45deg", y: -27, x: 11 }
              : {
                  scaleX: 1,
                  opacity: 1,
                  transition: { delay: 1.5, duration: 0.7 },
                }
          }
          style={{
            y: -34,
            x: 12,
            width: "26px",
            outline: "1px solid #fbfbfc",
            position: "fixed",
            transformOrigin: "50%",
          }}
        />
        <motion.div
          initial={isOpen ? { rotate: 0, y: 0 } : { opacity: 0, scaleX: 0 }}
          animate={
            isOpen
              ? { rotate: "-45deg", y: -27, x: 11 }
              : {
                  scaleX: 1,
                  opacity: 1,
                  transition: { delay: 1.5, duration: 0.7 },
                }
          }
          style={{
            y: -20,
            x: 12,
            width: "26px",
            outline: "1px solid #fbfbfc",
            position: "fixed",
            transformOrigin: "50%",
          }}
        />
      </motion.button>
    </>
  );
};

export default MenuButton;
