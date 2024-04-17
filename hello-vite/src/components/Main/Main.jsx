import "./Main.css";
import Video from "../Video/Video";
import woowoo4k from "../../images/woowoo4k.mp4";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";


const Main = () => {
  return (
 <>
 <Nav/>
    <div>
      <Video src={woowoo4k}/>
    </div>
    <div className='main__test'>
      <h1>TESTING</h1>
    <div className="box"></div>
    <div className="box2"></div>
    <div className="box"></div>
    <div className="box"></div>
    </div>
 </>
  );
};

export default Main;
