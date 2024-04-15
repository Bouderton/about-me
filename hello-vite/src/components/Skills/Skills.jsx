import "./Skills.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import woowoo from "../../images/woowoo.mp4";

const Skills = () => {
  return (
      <>
      <Nav/>
        <div className="background">
        <video className="animation" src={woowoo} autoPlay loop muted />
        </div>
        <Footer/>
    </>
  );
};

export default Skills;
