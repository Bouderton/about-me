import { motion, useScroll } from "motion/react";

const MotionView = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        style={{
          scaleX: scrollYProgress,
          background: "#3a85ff",
          borderRadius: "0 50px 50px 0",
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
