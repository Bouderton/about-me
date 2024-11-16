import "./Project.css";
// import { useState } from "react";
// import github from "../../images/github.svg";
import githubwhite from "../../images/githubwhite.svg";
import no_image from "../../images/no_image.svg";
import { motion, MotionConfig } from "motion/react";

const Project = ({ link, img, title, live, text, repo }) => {
  // use live state to determine a live link to the project
  // Hover on project turns the card and github logo #3a85ff
  return (
    <>
      <MotionConfig transition={{ duration: 0.5, ease: "easeInOut" }}>
        <motion.div
          initial={{ background: "#20272d", scale: 1 }}
          whileHover={{
            scale: 1.05,
            background: "#3a85ff",
            // transition: { duration: 1, ease: "easeInOut" },
            color: "#fbfbfc",
          }}
          className="project"
        >
          <div className="project__content">
            <h3 className="project__title">{title}</h3>
            {live ? (
              <a href={link} rel="noopener noreferer" target="_blank">
                <motion.img
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  src={img}
                  className="project__img"
                  alt="Project Image"
                />
              </a>
            ) : (
              <img
                src={no_image}
                style={{ width: "190px", margin: "0 auto" }}
              />
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
                  whileHover={{ scale: 1.3 }}
                  transition={{ duration: 0.2 }}
                  whileTap={{ scale: 0.5 }}
                  src={githubwhite}
                  className="project__github"
                  alt="Github Link"
                />
              </a>
            </div>
          </div>
        </motion.div>
      </MotionConfig>
    </>
  );
};

export default Project;
