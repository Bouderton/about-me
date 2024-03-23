import React from "react";
import "./Nav.css";
import github from "../../images/github.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav__container">
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__list-item">
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Home
            </Link>
          </li>

          <li className="nav__list-item">
            <Link
              to="/skills"
              style={{ textDecoration: "none", color: "white" }}
            >
              Skills
            </Link>
          </li>

          <li className="nav__list-item">
            <Link
              to="/my-story"
              style={{ textDecoration: "none", color: "white" }}
            >
              My Story
            </Link>
          </li>
          <li className="nav__list-item">
            <Link
              to="/projects"
              style={{ textDecoration: "none", color: "white" }}
            >
              Projects
            </Link>
          </li>
          <li className="nav__list-item">
            <Link
              to="/contact-me"
              style={{ textDecoration: "none", color: "white" }}
            >
              Contact Me
            </Link>
          </li>
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
