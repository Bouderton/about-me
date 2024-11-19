import "./Project.css";
import githubwhite from "../../images/githubwhite.svg";
import no_image from "../../images/no_image.svg";
import { motion } from "motion/react";

const Project = ({ link, img, title, live, text, repo }) => {
  return (
    <>
      <motion.div
        initial={{ background: "#20272d", scale: 1 }}
        whileHover={{
          scale: 1.05,
          background: "#3a85ff",
          color: "#fbfbfc",
        }}
        transition={{ duration: 0.35 }}
        className="project"
      >
        <div className="project__content">
          <h3 className="project__title">{title}</h3>
          {live ? (
            <a href={link} rel="noopener noreferer" target="_blank">
              <motion.img
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                src={img}
                className="project__img"
                alt="Project Image"
              />
            </a>
          ) : (
            <img className="project__no-image" src={no_image} />
          )}
          <div className="project__description">
            <p className="project__text">{text}</p>
          </div>
          <div className="project__description-github">
            <div className="project__github-line" />
            <a
              style={{ width: "30px", height: "30px" }}
              href={repo}
              rel="noopener noreferer"
              target="_blank"
            >
              <motion.img
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.25 }}
                transition={{ duration: 0.2 }}
                whileTap={{ scale: 0.7 }}
                src={githubwhite}
                className="project__github"
                alt="Github Link"
              />
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Project;
