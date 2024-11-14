import "../Skills/Skills.css";
import { motion } from "motion/react";

const Skill = ({ name }) => {
  return (
    <li>
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.15 }}
        className="skills__item"
      >
        {name}
      </motion.div>
    </li>
  );
};

export default Skill;
