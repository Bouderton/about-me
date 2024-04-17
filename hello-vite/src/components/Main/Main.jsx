import "./Main.css";
import Video from "../Video/Video";
import woowoo4k from "../../images/woowoo4k.mp4";
// import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import Header from "../Header/Header";


const Main = () => {
  return (
 <>
 <Nav/>
    <div>
      <Video src={woowoo4k}/>
    </div>
    <div className='main__test'>
      <Header text={"Who Am I?"}/>
    </div>
 </>
  );
};

export default Main;
