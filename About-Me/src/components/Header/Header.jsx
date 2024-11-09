import "./Header.css";
import Navigation from "../Navigation/Navigation";
import rklogo from "../../images/rklogo.svg";
// import Break from "../Break/Break";

const Header = () => {
  return (
    <>
      <Navigation />
      <div className="header__container">
        <header className="header">
          <h2 className="header__title">Ryan Khazal</h2>
          <p className="header__subtitle">Full-Stack Software Engineer</p>
          <img src={rklogo} alt="logo" className="header__logo" />
        </header>
      </div>
    </>
  );
};

export default Header;
