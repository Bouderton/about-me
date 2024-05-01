import "./Header.css";
import logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <div className="header__container">
      <header className="header">
        <h1>HELLO?</h1>
        <img src={logo} alt="logo" className="header__logo" />
      </header>
    </div>
  );
};

export default Header;
