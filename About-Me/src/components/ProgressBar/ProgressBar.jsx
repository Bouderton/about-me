import { motion, useScroll, useSpring } from "motion/react";

const MotionView = () => {
  const { scrollYProgress } = useScroll();
  const bar = useSpring(scrollYProgress, { stiffness: 50 });

  return (
    <>
      <motion.div
        style={{
          scaleX: bar,
          background: "#3a85ff",
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
