import { useRef } from "react";
import "./Motion.css";
import { motion, useScroll } from "motion/react";

const MotionView = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <div style={{ height: "800px" }}>
        <motion.div
          style={{ height: "200px", background: "black" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.75 }}
        />
        <motion.div
          style={{
            scaleX: scrollYProgress,
            background: "blue",
            transformOrigin: "left",
            position: "fixed",
            top: 0,
            width: "100%",
            height: "15px",
          }}
        />
      </div>
    </>
  );
};

export default MotionView;
