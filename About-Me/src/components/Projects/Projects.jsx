import "./Projects.css";
import "../Project/Project";
// import Break from "../Break/Break";
import Project from "../Project/Project";
import NewsExplorerLive from "../../images/NewsExplorerLive.png";
import wtwr from "../../images/wtwr.png";
import aroundtheus from "../../images/aroundtheus.png";

const Projects = () => {
  return (
    <>
      <div className="projects">
        <div className="project__title-container">
          <h2 className="projects__title">What I've Done</h2>
        </div>
        <Project
          link="https://newsexplorer.utdnews.com/"
          project={NewsExplorerLive}
          title="News Explorer"
        />
        <Project
          project={wtwr}
          title="What to Wear"
          link="https://wtwr.mindhackers.org/"
        />
        <Project
          project={aroundtheus}
          title="Around The U.S"
          link="https://bouderton.github.io/se_project_aroundtheus/"
        />
      </div>
    </>
  );
};

export default Projects;
