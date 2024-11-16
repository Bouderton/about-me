import "./Skills.css";
import Skill from "../Skill/Skill";
import { motion } from "motion/react";

const Skills = () => {
  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        delay: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const item = {
    visible: {
      opacity: 1,
      y: 0,
    },
    hidden: { opacity: 0, y: -75 },
  };

  const techSkillsList = [
    "React",
    "JavScript",
    "HTML",
    "CSS",
    "Express",
    "Git",
    "Node",
    "MongoDB",
    "JSON",
    "GCP",
    "Python",
  ];

  const hobbyList = [
    "Basketball",
    "Blender",
    "Maya",
    "Photoshop",
    "Music",
    "Cinema",
    "Learning",
    "Reading",
  ];
  return (
    <>
      <div className="skills">
        <div className="skills__title-container">
          <h2 className="skills__title">What I Do</h2>
        </div>
        <div className="skills__content">
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
                  <motion.li custom={index} variants={item}>
                    <Skill name={techSkill} />
                  </motion.li>
                );
              })}
            </motion.ul>
            <div
              className="skills__list-container"
              style={{ marginTop: "35px" }}
            >
              <h3 className="skills__tech-title">Other Stuff I Enjoy</h3>
              <motion.ul
                className="skills__list"
                variants={list}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {hobbyList.map((hobby, index) => {
                  return (
                    <motion.li custom={index} variants={item}>
                      <Skill name={hobby} />
                    </motion.li>
                  );
                })}
              </motion.ul>
            </div>
          </div>

          <div className="skills__text-container">
            <p className="skills__text">
              I specialize in creating responsive and intuitive web applications
              fit for all devices with modern technology. Insert more bullshit
              to get me hired :3
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
