import "./Skills.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Video from "../Video/Video";
import woowoo from "../../images/woowoo4k.mp4";

const Skills = () => {
  return (
    <>
      <Nav/>
        <div className="skills">
          <h2 className='skills__title'>What I Do</h2>
          <Video vid={woowoo}/>
        </div>
      <Footer/>
    </>
  );
};

export default Skills;
