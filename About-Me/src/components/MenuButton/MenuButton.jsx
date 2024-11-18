import { motion, MotionConfig } from "motion/react";
import "../Navigation/Navigation.css";

const MenuButton = ({ handleClick, isOpen }) => {
  return (
    <>
      <MotionConfig transition={{ duration: 0.25, ease: "easeInOut" }}>
        <motion.button
          onClick={handleClick}
          className="nav__mobile-menu-button"
          whileHover={{
            backgroundColor: "#3a85ff",
            scale: 1.15,
            transition: { duration: 0.25, type: "spring", bounce: 0.35 },
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            style={{
              outline: "2px solid #fbfbfc",
              widht: "50px",
              height: "48px",
              borderRadius: "50%",
              position: "relative",
            }}
          />
          <motion.div
            initial={isOpen ? { rotate: 0, y: 0 } : { opacity: 0, scaleX: 0 }}
            animate={
              isOpen
                ? { rotate: "45deg", y: 8, x: 12 }
                : { scaleX: 1, opacity: 1, transition: { duration: 1 } }
            }
            style={{
              top: "-65%",
              x: "50%",
              width: "24px",
              outline: "2px solid #fbfbfc",
              position: "relative",
            }}
          />
          <motion.div
            initial={isOpen ? { rotate: 0, y: 0 } : { opacity: 0, scaleX: 0 }}
            animate={
              isOpen
                ? { rotate: "-45deg", y: -6, x: 12 }
                : { scaleX: 1, opacity: 1, transition: { duration: 1 } }
            }
            style={{
              top: "-35%",
              x: "50%",
              width: "24px",
              outline: "2px solid #fbfbfc",
              position: "relative",
            }}
          />
        </motion.button>
      </MotionConfig>
    </>
  );
};

export default MenuButton;
