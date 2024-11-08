import "./Contact.css";
import Break from "../Break/Break";
import gmail from "../../images/gmail.svg";
import linkedin from "../../images/linkedin.svg";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact__info">
        <h2 className="contact__title">Want to chat? Contact Me Here!</h2>
        <div className="contact__icons-container">
          <a
            href="mailto:rmkhazal@gmail.com"
            rel="noopener noreferer"
            target="_blank"
          >
            <img src={gmail} className="contact__icon" alt="G-mail Icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/ryankhazal/"
            rel="noopener noreferer"
            target="_blank"
          >
            <img src={linkedin} className="contact__icon" alt="LinkedIn Icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
