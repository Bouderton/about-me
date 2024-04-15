import "./Main.css";
import Video from "../Video/Video";
import looped_anim4 from "../../images/looped_anim4.mp4";


const Main = () => {
  return (
      <main className="main">
        <div className="main__content">
          <h1 className="main__title">Ryan Khazal</h1>
          <p className="main__subtitle">
            Full-Stack Web Developer & 3D Artist
          </p>
          <button type='text' className='main__entry-button'>Who Am I?</button>
        </div>
        <Video vid={looped_anim4}/>
      </main>
  );
};

export default Main;
