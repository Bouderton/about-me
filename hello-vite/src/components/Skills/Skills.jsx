import "./Skills.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import woowoo4k from "../../images/woowoo4k.mp4";

const Skills = () => {
  return (
    <>
      <Nav/>
        <div className="background">
        <video className="animation" src={woowoo4k} autoPlay loop muted />
        </div>
      <Footer/>
    </>
  );
};

export default Skills;
