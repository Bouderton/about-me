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
      {/* <motion.div
        className="next__info"
        initial={{ opacity: 0, y: 100 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <p className="next__info-text">We'll find out lmao</p>
      </motion.div> */}
      <motion.div
        className="next__info"
        initial={{ opacity: 0, y: 100 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className="next__unlv-container">
          {/* motion one letter at a time! */}
          <h2 className="next__unlv">UNLV</h2>
          <p className="next__unlv-text">
            I joined the class of 2029 at the University of Las Vegas, Nevada.
            Currently exploring my major, but I have plans to stick to the
            engineering field!
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Next;
