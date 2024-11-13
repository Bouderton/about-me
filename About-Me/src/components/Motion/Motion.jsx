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
        // gap: "0.8rem",
      }}
    >
      <h1 style={{ fontSize: "60px" }}>LEARNING MOTION</h1>
      <motion.button className="mobutton">Click Me!</motion.button>
    </div>
  );
};

export default Motion;
