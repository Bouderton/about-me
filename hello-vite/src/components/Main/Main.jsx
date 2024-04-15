import "./Main.css";
import Video from "../Video/Video";
import looped_anim3 from "../../images/looped_anim3.mp4";


const Main = () => {
  return (
      <main className="main">
        <div className="main__text">
          <h1 className="main__title">Ryan Khazal</h1>
          <p className="main__subtitle">
            Full-Stack Web Developer & 3D Artist
          </p>
        </div>
        <Video vid={looped_anim3}/>
      </main>
  );
};

export default Main;
