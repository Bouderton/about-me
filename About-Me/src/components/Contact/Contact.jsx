import "./Contact.css";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <section className="contact">
      <motion.h2
        initial={{ opacity: 0, scale: 0.95, y: 100 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.5 }}
        viewport={{ once: true }}
        className="contact__title"
      >
        Contact
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 100 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        viewport={{ once: true }}
        className="contact__info"
      >
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
      </motion.div>
    </section>
  );
};

export default Contact;
