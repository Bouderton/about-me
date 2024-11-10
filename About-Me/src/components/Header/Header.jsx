import "./Header.css";
import Navigation from "../Navigation/Navigation";
import rklogo from "../../images/rklogo.svg";

const Header = () => {
  return (
    <>
      <Navigation />
      <header className="header">
        <div className="header__content">
          <h2 className="header__title">Ryan Khazal</h2>
          <p className="header__subtitle">// Full-Stack Software Engineer</p>
          <img src={rklogo} alt="logo" className="header__logo" />
          <p className="header__text">
            // I am a Full-Stack Web Developer from Las Vegas, Nevada looking
            for new opportunities in the tech world. I specialize in creating
            responsive and intuitive web applications fit for all devices.
          </p>
        </div>
        <div className="header__anim">
          <h1 style={{ width: "200px", margin: "0" }}>
            ANIMATION GOES HERE WOOO WOOO
          </h1>
        </div>
      </header>
    </>
  );
};

export default Header;
