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
        <Break direction="right" />
        <h2 className="next__title">What's Next</h2>
        <Break direction="left" />
      </motion.div>
      <motion.div
        className="next__info"
        initial={{ opacity: 0, y: 100 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <p className="next__info-text">We'll find out lmao</p>
      </motion.div>
    </section>
  );
};

export default Next;
