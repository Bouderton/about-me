import "./Projects.css";
import "../Project/Project";
import Project from "../Project/Project";
import NewsExplorerLive from "../../images/NewsExplorerLive.png";
import wtwr from "../../images/wtwr.png";
import aroundtheus from "../../images/aroundtheus.png";
import triplepeaks from "../../images/triplepeaks.png";
import busy_day from "../../images/busy_day.png";

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
            clothing items to wear."
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
          <Project
            title="Triple Peaks"
            img={triplepeaks}
            live={true}
            link="https://bouderton.github.io/se_project_coffeeshop/"
            repo="https://github.com/Bouderton/se_project_coffeeshop?tab=readme-ov-file"
            text="This is a Front-End application that represents a landing page for a local coffee 
            shop - Triple Peaks."
          />
          <Project
            title="Slopopedia"
            repo="https://github.com/jahorwitz/slopopedia"
            text="During my internship at Slopopedia NPO, I contributed to the
            development of a movie sharing platform. But all the movies are so bad they're good!
            However this project is still in development."
          />
          <Project
            title="Busy Day"
            repo="https://github.com/skovakina/spring-to-do?tab=readme-ov-file"
            text="Busy Day is a team project I worked on with 2 other developers,
            which is an enhanced Spring themed to-do list. Our project went on to win first place via unanimous vote!"
            live={true}
            link="https://skovakina.github.io/spring-to-do/"
            img={busy_day}
          />
          {/* NewsExplorer Backend */}
        </div>
      </section>
    </>
  );
};

export default Projects;
