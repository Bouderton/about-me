import "./Project.css";
import { useState } from "react";
const Project = ({ link, project, title }) => {
  return (
    <>
      <h3 className="project__title">{title}</h3>
      <div className="project">
        <a href={link} rel="noopener noreferer" target="_blank">
          <img src={project} className="project__img" alt="Project" />
        </a>
      </div>
    </>
  );
};

export default Project;
