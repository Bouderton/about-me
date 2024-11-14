import "./Project.css";
import { useState } from "react";
import github from "../../images/github.svg";

const Project = ({ link, project, title, live, text, repo }) => {
  // use live state to determine a live link to the project
  // Hover on project turns the card and github logo #3a85ff
  return (
    <>
      <div className="project">
        <div className="project__content">
          <h3 className="project__title">{title}</h3>
          <a
            href={link}
            rel="noopener noreferer"
            target="_blank"
            // style={{ width: "100%", height: "auto" }}
          >
            <img src={project} className="project__img" alt="Project Image" />
          </a>
          <div className="project__description">
            <p className="project__text">{text}</p>
          </div>
          <div className="project__description-github">
            <div className="project__github-line"></div>
            <a
              style={{ width: "30px", height: "30px" }}
              href={repo}
              rel="noopener noreferer"
              target="_blank"
            >
              <img src={github} className="project__github" alt="Github Link" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
