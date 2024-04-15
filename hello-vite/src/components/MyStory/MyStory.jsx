import "./MyStory.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

const MyStory = () => {
  return (
    <>
      <Nav/>
    <div className="my-story">
      <h2 className="my-story__title">Who Am I?</h2>
    </div>
      <Footer/>
    </>
  );
};

export default MyStory;
