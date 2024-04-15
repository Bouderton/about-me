import "./Skills.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import woowoo from "../../images/woowoo.mp4";

const Skills = () => {
  return (
      <>
        <Nav/>
        <video className="animation" src={woowoo} autoPlay loop muted />
        <Footer/>
    </>
  );
};

export default Skills;
