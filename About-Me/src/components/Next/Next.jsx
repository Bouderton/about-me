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
      {/* old shit vvvv */}
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
          <div className="next__unlv-title-container">
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              transition={{ delay: 0.75, duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="next__unlv"
            >
              U
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              transition={{ delay: 1, duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="next__unlv"
            >
              N
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              transition={{ delay: 1.25, duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="next__unlv"
            >
              L
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              transition={{ delay: 1.5, duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="next__unlv"
            >
              V
            </motion.p>
          </div>
          <div className="next__unlv-text-container">
            <p className="next__unlv-text">
              I joined the class of 2029 at the University of Las Vegas, Nevada.
            </p>
            <p className="next__unlv-text">
              I am majoring in Neuroscience, the science of the human brain. My
              minor is in Robotics and Unmanned Aircraft Systems to keep my
              engineering gears turning.
            </p>
            <p className="next__unlv-text">
              I also plan to get involved in college sports. So far I am loving
              my experience at UNLV, Go Rebels!
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Next;
