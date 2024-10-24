import "./Header.css";
import rklogo from "../../images/rklogo.svg";
import linkedin from "../../images/linkedin.svg";
import github from "../../images/GitHub.svg";
import Break from "../Break/Break";

const Header = () => {
  return (
    <>
      <div className="header__container">
        <header className="header">
          <h2 className="header__title">Ryan Khazal</h2>
          <p className="header__subtitle">Full-Stack Web Developer</p>
          <img src={rklogo} alt="logo" className="header__logo" />
          <img src={github} alt="github" className="header__github" />
          {/* FIX BLURRY LOGOS */}
          {/* I think they're fixed lol */}
        </header>
        <Break />
      </div>
    </>
  );
};

export default Header;
