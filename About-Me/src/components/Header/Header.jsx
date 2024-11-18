import "./Header.css";
import Navigation from "../Navigation/Navigation";
import { motion } from "motion/react";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <>
      <Navigation />
      <header className="header">
        <div className="header__content">
          <div className="header__anim" style={{ margin: "0 auto 50px" }}>
            <motion.h1
              initial={{ rotate: "0deg", scale: 0, y: 0 }}
              animate={{
                rotate: "360deg",
                scale: 1,
                y: [0, 150, -150, -150, 0],
              }}
              exit={{ rotate: "0deg", scale: 0, y: 0 }}
              transition={{
                duration: 1,
                ease: "backInOut",
                times: [0, 0.25, 0.5, 0.85, 1],
              }}
              style={{
                fontSize: "40px",
                width: "250px",
                margin: "0",
                textAlign: "center",
              }}
            >
              COOL ANIMATION COMING SOON
            </motion.h1>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
            className="header__title"
          >
            Ryan Khazal
          </motion.h2>
          <div className="header__logo">
            <Logo />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.75 }}
            viewport={{ once: true }}
            className="header__text"
          >
            I am a Full-Stack Software Engineer looking for new opportunities.
          </motion.p>
        </div>
      </header>
    </>
  );
};

export default Header;
