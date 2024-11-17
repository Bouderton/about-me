import "./Footer.css";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__text-container">
          <motion.p
            initial={{ opacity: 0, scale: 1, x: -50 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.75 },
            }}
            className="footer__text"
          >
            Developed by Ryan Khazal
          </motion.p>
          <motion.p
            initial={{ opacity: 0, scale: 1, x: 50 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.75 },
            }}
            className="footer__text"
          >
            2024
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
