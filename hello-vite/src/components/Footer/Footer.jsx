import "./Footer.css";
import github from "../../images/github.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
      <p className="footer__text">&copy; Ryan Khazal 2024</p>
      <img className='footer__github' src={github} alt="github logo"/>
      </div>
    </footer>
  );
};

export default Footer;
