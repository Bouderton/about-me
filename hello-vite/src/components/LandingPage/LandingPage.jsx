import "./LandingPage.css";
import Video from "../Video/Video";
import looped_anim4 from "../../images/looped_anim4.mp4";
import { Link } from "react-router-dom";


const LandingPage = () => {
  return (
      <main className="main">
        <div className="main__content">
          <h1 className="main__title">Ryan Khazal</h1>
          <p className="main__subtitle">
            Full-Stack Web Developer & 3D Artist
          </p>
          <Link to='/main' style={{textDecoration: "none", color: "white"}}>
          <button type='text' className='main__entry-button'>About Me</button>
          </Link>
        </div>
        <Video vid={looped_anim4}/>
      </main>
  );
};

export default LandingPage;
