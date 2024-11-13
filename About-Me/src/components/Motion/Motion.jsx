import "./Motion.css";
import { useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "motion/react";

const Motion = () => {
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
        >
          Click Me!
        </motion.button>
        <motion.button
          style={{ background: "red" }}
          className="mobutton"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          No Me!
        </motion.button>
      </MotionConfig>
    </div>
  );
};

export default Motion;
