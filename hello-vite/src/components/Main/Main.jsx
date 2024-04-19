import "./Main.css";
import Video from "../Video/Video";
import woowoo4k from "../../images/woowoo4k.mp4";
// import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
// import Skills from "../Skills/Skills";


const Main = () => {
  return (
 <>
 <Nav/>
    {/* <div>
      <Video src={woowoo4k}/>
    </div> */}
    <main className='main'>
      <Header text={"Who Am I?"}/>
      <div className='box'>
        <h2>TESTING</h2>
      </div>
    </main>
    <Footer />
 </>
  );
};

export default Main;
