import "./Header.css";
import rklogo from "../../images/rklogo.svg";
import github from "../../images/github.svg";
import Break from "../Break/Break";

const Header = () => {
  return (
    <>
      <div className="header__container">
        <header className="header">
          <h2 className="header__title">Ryan Khazal</h2>
          <p className="header__subtitle">Full-Stack Software Engineer</p>
          <img src={rklogo} alt="logo" className="header__logo" />
          <a
            href="https://github.com/Bouderton"
            rel="noopener noreferer"
            target="_blank"
          >
            <img src={github} alt="github" className="header__github" />
          </a>
        </header>
        <Break />
      </div>
    </>
  );
};

export default Header;
