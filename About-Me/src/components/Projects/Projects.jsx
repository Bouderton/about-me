import "./Projects.css";
import "../Project/Project";
import Project from "../Project/Project";
import NewsExplorerLive from "../../images/NewsExplorerLive.png";
import wtwr from "../../images/wtwr.png";
import aroundtheus from "../../images/aroundtheus.png";

const Projects = () => {
  return (
    <>
      <section className="projects">
        <h2 className="projects__title">What I've Done</h2>
        <div className="projects__content">
          <Project
            repo="https://github.com/Bouderton/news_explorer_frontend"
            link="https://newsexplorer.utdnews.com/"
            img={NewsExplorerLive}
            live={true}
            title="News Explorer"
            text="NewsExplorer is a dynamic Full Stack Web Application 
            designed to provide users with a seamless way to explore, search, 
            and save the latest news articles."
          />
          <Project
            img={wtwr}
            live={true}
            title="What to Wear"
            link="https://wtwr.mindhackers.org/"
            repo="https://github.com/Bouderton/se_project_react"
            text="What To Wear is a responsive Full Stack Web Application
            that fetches realtime location and weather data to suggest the user
            clothing items fit for the weather outside."
          />
          <Project
            repo="https://github.com/Bouderton/se_project_aroundtheus"
            title="Around The US"
            live={true}
            img={aroundtheus}
            link="https://bouderton.github.io/se_project_aroundtheus/"
            text="This Instagram look-alike is a Front-End social media page
            on the Worldwide Explorer - Jacques Cousteau."
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
