import Nav from "../Nav/Nav";
import "../Header/Header.css";
import looped_anim3 from "../../images/looped_anim3.mp4";

function Header() {
  return (
    <>
      <header className="header">
        <video className="animation" src={looped_anim3} autoPlay loop muted />
        <div className="header__text">
          <h1 className="header__title">Ryan Khazal</h1>
          <p className="header__subtitle">
            Full-Stack Web Developer & 3D Artist
          </p>
        </div>
        <Nav />
      </header>
    </>
  );
}

export default Header;
