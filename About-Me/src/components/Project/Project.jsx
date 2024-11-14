import "./Project.css";
import { useState } from "react";
const Project = ({ link, project, title, live, text }) => {
  // use live state to determine a live link to the project
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
          <p className="project__text">{text}</p>
        </div>
      </div>
    </>
  );
};

export default Project;
