import "../Navigation/Navigation.css";
import { motion, useAnimate } from "motion/react";
import { useState } from "react";

const NavigationMobile = () => {
  //   const [isOpen, setIsOpen] = useState(false);
  const [scope, animate] = useAnimate();

  //   const controls = animate([]);

  const handleClick = () => {};
  return (
    <>
      <nav className="nav__mobile">
        <div>
          <motion.button
            type="button"
            className="nav__mobile-bt"
            onClick={handleClick}
          >
            X
          </motion.button>
          <motion.div
            // ref={scope}
            // variants={{
            //   closed: {
            //     width: "0%",
            //     height: "0%",
            //   },
            //   open: {
            // width: "100%",
            // height: "100vh",
            // display: "contents",
            // visibility: "visibile",
            //   },
            // }}
            initial={{ visibility: "visible", opacity: 1 }}
            style={{ background: "#20272d" }}
            className="nav__mobile-menu"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.75 }}
              className="nav__mobile-buttons"
            >
              <motion.button
                initial={{ opacity: 0, scale: 1, y: 50 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { delay: 0.5, duration: 0.5 },
                }}
                whileHover={{
                  backgroundColor: "#3a85ff",
                  borderRadius: "8px",
                  scale: 1.2,
                  padding: "5px",
                  transition: {
                    duration: 0.5,
                    type: "spring",
                    bounce: 0.4,
                  },
                }}
                type="button"
                className="nav__mobile-button"
              >
                Home
              </motion.button>
              <motion.button
                initial={{ opacity: 0, scale: 1, y: 50 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { delay: 0.75, duration: 0.5 },
                }}
                whileHover={{
                  backgroundColor: "#3a85ff",
                  borderRadius: "8px",
                  scale: 1.2,
                  padding: "5px",
                  transition: {
                    duration: 0.5,
                    type: "spring",
                    bounce: 0.4,
                  },
                }}
                type="button"
                className="nav__mobile-button"
              >
                About
              </motion.button>
              <motion.button
                initial={{ opacity: 0, scale: 1, y: 50 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { delay: 1, duration: 0.5 },
                }}
                whileHover={{
                  backgroundColor: "#3a85ff",
                  borderRadius: "8px",
                  scale: 1.2,
                  padding: "5px",
                  transition: {
                    duration: 0.5,
                    type: "spring",
                    bounce: 0.4,
                  },
                }}
                type="button"
                className="nav__mobile-button"
              >
                Projects
              </motion.button>
              <motion.button
                initial={{ opacity: 0, scale: 1, y: 50 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { delay: 1.25, duration: 0.5 },
                }}
                whileHover={{
                  backgroundColor: "#3a85ff",
                  borderRadius: "8px",
                  scale: 1.2,
                  padding: "5px",
                  transition: {
                    duration: 0.5,
                    type: "spring",
                    bounce: 0.4,
                  },
                }}
                type="button"
                className="nav__mobile-button"
              >
                Resume
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </nav>
    </>
  );
};

export default NavigationMobile;
