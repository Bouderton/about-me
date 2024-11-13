import "./Motion.css";
import { useState } from "react";
import {
  motion,
  AnimatePresence,
  MotionConfig,
  useAnimationControls,
} from "motion/react";

const Motion = () => {
  const controls = useAnimationControls();

  const handleClick = () => {
    controls.start("flip");
  };
  return (
    <div
      style={{
        display: "grid",
        justifyContent: "center",
        height: "500px",
      }}
    >
      <h1 style={{ fontSize: "60px" }}>LEARNING MOTION</h1>
      <MotionConfig transition={{ duration: 0.125, ease: "easeInOut" }}>
        <motion.button
          className="mobutton"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleClick}
        >
          Click Me!
        </motion.button>
        {/* <motion.button
          style={{ background: "red" }}
          className="mobutton"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          No Me!
        </motion.button> */}
      </MotionConfig>
      <motion.div
        style={{
          width: "150px",
          height: "150px",
          background: "black",
          margin: "0 auto",
        }}
        variants={{
          initial: {
            rotate: "0deg",
          },
          flip: {
            rotate: "360deg",
          },
        }}
        initial="intitial"
        animate={controls}
      ></motion.div>
    </div>
  );
};

export default Motion;
