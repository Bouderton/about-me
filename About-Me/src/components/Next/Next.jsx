import "./Next.css";
import Break from "../Break/Break";
import { motion } from "motion/react";

const Next = ({ nextRef }) => {
  return (
    <section className="next" ref={nextRef}>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.5 }}
        viewport={{ once: true }}
        className="next__title-container"
      >
        <Break diretion="left" />
        <motion.h2
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="next__title"
        >
          What's Next?
        </motion.h2>
        <Break direction="right" />
      </motion.div>
    </section>
  );
};

export default Next;
