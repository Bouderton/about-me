import "./Projects.css";
import "../Project/Project";
import Project from "../Project/Project";
import Break from "../Break/Break";
import { motion } from "motion/react";
import { projectsList, projectItem, projectList } from "../../utils/consts";

const Projects = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, scale: 0.95, y: 100 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        viewport={{ once: true }}
        className="projects"
      >
        <div className="projects__title-container">
          <Break direction="right" />
          <h2 className="projects__title">What I've Done</h2>
        </div>
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
      </motion.section>
    </>
  );
};

export default Projects;
