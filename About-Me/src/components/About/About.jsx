import "./About.css";
import me from "../../images/me.jpeg";
import Break from "../Break/Break";
import { motion } from "motion/react";

const About = ({ aboutRef }) => {
  return (
    <>
      <section className="about" ref={aboutRef}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          viewport={{ once: true }}
          className="about__title-container"
        >
          <motion.h2
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="about__title"
          >
            About Me
          </motion.h2>
          <Break direction="left" />
        </motion.div>
        <div className="about__content">
          <div className="about__text-container">
            <motion.p
              initial={{ opacity: 0, y: 75 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.25, duration: 0.75 }}
              viewport={{ once: true }}
              className="about__text"
            >
              I graduated from one of the top Software Engineering Boot Camps in
              the U.S, with over 1,300 contributions on GitHub in the last year.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 75 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.75 }}
              viewport={{ once: true }}
              className="about__text"
            >
              As a former Student Athlete with a Regional and State
              Championship; Resilience, Teamwork, Communication, and Curiosity
              are customary in my love for innovative technology. I am confident
              that my background in athletics, paired with my passion for
              health, wellness, and a burning passion for learning, will allow
              me to thrive in a working environment that shares my drive to make
              a lasting positive impact on the world through technology and
              innovation.
            </motion.p>
          </div>
          <motion.img
            initial={{ opacity: 0, y: 75, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.75 }}
            viewport={{ once: true }}
            className="about__img"
            src={me}
            alt="Ryan Khazal Photo"
          />
        </div>
      </section>
    </>
  );
};

export default About;
