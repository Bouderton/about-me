import "./Art.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Video from "../Video/Video";
import woowoo4k from "../../images/woowoo4k.mp4";

const MyArt = () => {
  return <>
  <Nav/>
  <Video src ={woowoo4k}/>
    <div className="art">
      <h1>Art</h1>
    </div>
    <Footer/>
    </>
};

export default MyArt;
