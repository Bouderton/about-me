import Nav from "../Nav/Nav";
import "../Header/Header.css";

function Header() {
  return (
    <>
      <Nav />
      <header className="header">
        <div className="header__header">
          <p>Header</p>
        </div>
      </header>
    </>
  );
}

export default Header;
