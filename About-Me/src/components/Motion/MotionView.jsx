import { useRef } from "react";
import "./Motion.css";
import { motion, useScroll } from "motion/react";

const MotionView = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      {/* <motion.div
          style={{ height: "200px", background: "black" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.75 }}
        /> */}
      <motion.div
        style={{
          scaleX: scrollYProgress,
          background: "#1980e5",
          transformOrigin: "left",
          position: "fixed",
          bottom: 0,
          width: "100%",
          height: "10px",
        }}
      />
    </>
  );
};

export default MotionView;
