import "./Navigation.css";
import linkedin from "../../images/linkedin-small.svg";
import github from "../../images/github.svg";

const Navigation = () => {
  return (
    <section className="nav">
      <div className="nav__content">
        {/* <h3 className="nav__content-title">Ryan Khazal</h3> */}
        <div className="nav__buttons-container">
          <button type="text" className="nav__button">
            Home
          </button>
          <button type="text" className="nav__button">
            About
          </button>
          <button type="text" className="nav__button">
            Projects
          </button>
        </div>
        <div className="nav__icons-container">
          <a
            href="https://www.linkedin.com/in/ryankhazal/"
            rel="noopener noreferer"
            target="_blank"
          >
            <button className="nav__icon" type="button">
              <img src={linkedin} alt="LinkedIn Icon" />
            </button>
          </a>
          <a
            href="https://github.com/Bouderton"
            rel="noopener noreferer"
            target="_blank"
          >
            <button className="nav__icon" type="button">
              <img src={github} alt="Github Icon" />
            </button>
          </a>
          {/* Email Icon Coming Soon*/}
        </div>
      </div>
    </section>
  );
};

export default Navigation;
