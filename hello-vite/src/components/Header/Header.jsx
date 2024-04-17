// import Nav from "../Nav/Nav";
import "../Header/Header.css";


function Header({text}) {
  return (
      <header className="header">
        <h2 className='header__title'>{text}</h2>
      </header>
  );
}

export default Header;
