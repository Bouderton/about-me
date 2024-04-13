import Nav from "../Nav/Nav";
import "../Header/Header.css";
import loopedAnim from "../../images/loopedAnim.mp4";

function Header() {
  return (
    <>
      <header className="header">
        <div className="header__anim">
          <video className="animation" src={loopedAnim} autoPlay loop muted />
        </div>
      </header>
      <Nav />
    </>
  );
}

export default Header;
