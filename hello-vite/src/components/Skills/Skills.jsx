import "./Skills.css";
import Footer from "../Footer/Footer";
import woowoo from "../../images/woowoo.mp4";

const Skills = () => {
  return (
      <>
        <video className="animation" src={woowoo} autoPlay loop muted />
        <Footer/>
    </>
  );
};

export default Skills;
