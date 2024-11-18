import "./Skills.css";
import Skill from "../Skill/Skill";
import Break from "../Break/Break";
import { motion } from "motion/react";
import { list, item, techSkillsList, hobbyList } from "../../utils/consts";

const Skills = () => {
  return (
    <>
      <section className="skills">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
          className="skills__title-container"
        >
          <Break direction="right" />
          <h2 className="skills__title">What I Do</h2>
          <Break direction="left" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.75 }}
          viewport={{ once: true }}
          className="skills__content"
        >
          <div className="skills__lists-container">
            <div className="skills__list-container">
              <h3 className="skills__tech-title">Tech I Use</h3>
              <motion.ul
                className="skills__list"
                variants={list}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {techSkillsList.map((techSkill, index) => {
                  return (
                    <motion.li custom={index} variants={item} key={index}>
                      <Skill name={techSkill} />
                    </motion.li>
                  );
                })}
              </motion.ul>
            </div>
            <div className="hobby__list-container">
              <h3 className="hobby__list-title">Other Stuff I Enjoy</h3>
              <motion.ul
                className="hobby__list"
                variants={list}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {hobbyList.map((hobby, index) => {
                  return (
                    <motion.li custom={index} variants={item} key={index}>
                      <Skill name={hobby} />
                    </motion.li>
                  );
                })}
              </motion.ul>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 75 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.75 }}
            viewport={{ once: true }}
            className="skills__text-container"
          >
            <p className="skills__text">
              I specialize in creating responsive and intuitive web applications
              fit for all devices with modern technology. Insert more nice words
              to get me hired....
            </p>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Skills;
