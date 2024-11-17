import { motion } from "motion/react";

const Break = ({ direction }) => {
  return (
    <>
      <div
        style={{
          display: "inline-block",
          alignContent: "center",
          width: "100%",
        }}
      >
        <motion.div
          style={{
            display: "block",
            transformOrigin: direction,
            background: "#fbfbfc",
            opacity: 0.5,
            height: "1px",
            marign: "auto 0",
            width: "100%",
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.75, duration: 0.5 }}
          viewport={{ once: true }}
        />
      </div>
    </>
  );
};

export default Break;
