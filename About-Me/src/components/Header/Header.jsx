import "./Header.css";
import logo from "../../images/Logo.svg";
import linkedin from "../../images/linkedin.svg";
import github from "../../images/GitHub.svg";

const Header = () => {
  return (
    <div className="header__container">
      <header className="header">
        <h1 className="header__title">Ryan Khazal</h1>
        <h2 className="header__subtitle">Full-Stack Web Developer</h2>
        <h2 className="header__subtitle">3D Artist</h2>
        <img src={logo} alt="logo" className="header__logo" />
        <img src={linkedin} alt="linkedin" className="header__linkedin" />
        <img src={github} alt="github" className="header__github" />
        {/* FIX BLURRY LOGOS */}
      </header>
    </div>
  );
};

export default Header;
