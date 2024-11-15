import "./Project.css";
// import { useState } from "react";
import github from "../../images/github.svg";
import no_image from "../../images/no_image.svg";

const Project = ({ link, img, title, live, text, repo }) => {
  // use live state to determine a live link to the project
  // Hover on project turns the card and github logo #3a85ff
  return (
    <>
      <div className="project">
        <div className="project__content">
          <h3 className="project__title">{title}</h3>
          {live ? (
            <a href={link} rel="noopener noreferer" target="_blank">
              <img src={img} className="project__img" alt="Project Image" />
            </a>
          ) : (
            <img src={no_image} style={{ width: "190px", margin: "0 auto" }} />
          )}
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
