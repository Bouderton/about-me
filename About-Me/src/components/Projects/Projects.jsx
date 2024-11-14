import "./Projects.css";
import "../Project/Project";
import Project from "../Project/Project";
import NewsExplorerLive from "../../images/NewsExplorerLive.png";
// import wtwr from "../../images/wtwr.png";
// import aroundtheus from "../../images/aroundtheus.png";

const Projects = () => {
  return (
    <>
      <section className="projects">
        <h2 className="projects__title">What I've Done</h2>
        <div className="projects__content">
          {/* <div className="project__title-container"></div> */}
          <Project
            repo="https://github.com/Bouderton/news_explorer_frontend"
            link="https://newsexplorer.utdnews.com/"
            project={NewsExplorerLive}
            title="News Explorer"
            text="NewsExplorer is a dynamic Full Stack Web Application designed to provide users with a seamless way to explore, search, and save the latest news articles."
            // Powered by an open-source news API, the platform delivers real-time updates on trending topics from around the world.
          />
          <Project
            // project={wtwr}
            title="What to Wear"
            link="https://wtwr.mindhackers.org/"
          />
          <Project
            title="Around The US"
            link="https://bouderton.github.io/se_project_aroundtheus/"
          />
          {/* Around the US*/}
          {/* Slopopedia */}
          {/* Coffee Shop (MAKE THIS PRETTIER)*/}
          {/* NewsExplorer Backend */}
        </div>
      </section>
    </>
  );
};

export default Projects;
