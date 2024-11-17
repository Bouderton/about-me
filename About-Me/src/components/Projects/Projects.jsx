import "./Projects.css";
import "../Project/Project";
import Project from "../Project/Project";
// import NewsExplorerLive from "../../images/newsexpl.png";
// import wtwr from "../../images/wtwr.png";
// import aroundtheus from "../../images/aroundtheus.png";
// import triplepeaks from "../../images/triplepeaks.png";
// import busy_day from "../../images/busy_day.png";
import { motion } from "motion/react";
import {
  list,
  item,
  projectsList,
  projectItem,
  projectList,
} from "../../utils/consts";

const Projects = () => {
  return (
    <>
      <section className="projects">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 100 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
          className="projects__title-container"
        >
          <div className="projects__line" />
          <h2 className="projects__title">What I've Done</h2>
        </motion.div>
        <motion.ul
          variants={projectList}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="projects__content"
        >
          {projectsList.map((project, index) => {
            return (
              <motion.li custom={index} key={index} variants={projectItem}>
                <Project
                  title={project.title}
                  name={project.name}
                  repo={project.repo}
                  link={project.link}
                  live={project.live}
                  img={project?.img}
                  text={project.text}
                />
              </motion.li>
            );
          })}
          {/* NewsExplorer Backend */}
        </motion.ul>
      </section>
    </>
  );
};

export default Projects;
