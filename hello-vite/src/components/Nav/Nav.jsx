import React from "react";
import "./Nav.css";
import github from "../../images/github.png";

const Nav = () => {
  return (
    <div className="nav__container">
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__list-item">Home</li>
          <li className="nav__list-item">Skills</li>
          <li className="nav__list-item">My Story</li>
          <li className="nav__list-item">Projects</li>
          <li className="nav__list-item">Contact Me</li>
        </ul>
      </nav>
      <div className="nav__links">
        <img className="nav__links-image" src={github} alt="github logo" />
        <img className="nav__links-image" src={github} alt="github logo" />
        <img className="nav__links-image" src={github} alt="github logo" />
      </div>
    </div>
  );
};

export default Nav;
