import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <h2 className="contact__title">Contact</h2>
      <div className="contact__info">
        <p className="contact__text">
          Feel free to shoot me an email at{" "}
          <a
            href="mailto:rmkhazal@gmail.com"
            rel="noopener noreferer"
            target="_blank"
            style={{
              textDecoration: "none",
              color: "#3a85ff",
              fontWeight: 700,
            }}
          >
            rmkhazal@gmail.com
          </a>{" "}
          if you want to connect. You can also find me on{" "}
          <a
            href="https://www.linkedin.com/in/ryankhazal/"
            rel="noopener noreferer"
            target="_blank"
            style={{
              color: "#3a85ff",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            LinkedIn
          </a>{" "}
          if that's more your speed.
        </p>
      </div>
    </section>
  );
};

export default Contact;
