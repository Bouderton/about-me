import "./Skills.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import woowoo4k from "../../images/woowoo4k.mp4";

const Skills = () => {
  return (
    <>
      <Nav/>
        <div className="skills__background">
        <video className="animation" src={woowoo4k} autoPlay loop muted />
        <div className='text__container'>
        <h2 className='skills__title'>What I Do</h2>
          <p className="text">Buncha Shit Lolasdfhasdfhasdfhasdfh</p>
        </div>
        </div>
      <Footer/>
    </>
  );
};

export default Skills;
