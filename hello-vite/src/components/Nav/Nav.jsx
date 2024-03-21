import "./Nav.css";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__list-item">Home</li>
        <li className="nav__list-item">Skills</li>
        <li className="nav__list-item">My Story</li>
        <li className="nav__list-item">Resume</li>
        <li className="nav__list-item">Contact Me</li>
      </ul>
    </nav>
  );
};

export default Nav;
