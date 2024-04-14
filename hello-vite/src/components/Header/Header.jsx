import Nav from "../Nav/Nav";
import "../Header/Header.css";
import looped_anim2 from "../../images/looped_anim2.mp4";

function Header() {
  return (
    <>
      <header className="header">
        <video className="animation" src={looped_anim2} autoPlay loop muted />
        <div className="header__text">
          <h1 className="header__title">Ryan Khazal</h1>
          <p className="header__subtitle">
            Full-Stack Web Developer & 3D Artist
          </p>
        </div>
        {/* <div className="button__container">
          <button type="text" className="button">
            Click Me
          </button>
        </div> */}
        {/* animated button thingy uhhhhhhh */}
        <Nav />
      </header>
    </>
  );
}

export default Header;
