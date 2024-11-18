import "../Skills/Skills.css";
import { motion } from "motion/react";

const Skill = ({ name }) => {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.2 }}
      transtion={{ type: "spring", bounce: 1 }}
      className="skills__item"
    >
      {name}
    </motion.div>
  );
};

export default Skill;
