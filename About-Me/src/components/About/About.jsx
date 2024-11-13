import "./About.css";
import me from "../../images/me.jpeg";

const About = () => {
  return (
    <>
      <section className="about">
        <h2 className="about__title">About Me</h2>
        <div className="about__content">
          <div className="about__text-container">
            <p className="about__text">
              // I graduated from one of the top Software Engineering Boot Camps
              in the U.S, with over 1,200 contributions on GitHub in the last
              year.
            </p>
            <p className="about__text">
              // As a former Student Athlete with a Regional and State
              Championship; Resilience, Teamwork, Communication, and Curiosity
              are customary in my love for innovative technology. I am confident
              that my background in athletics, paired with my passion for
              health, fitness, and learning about how and why everything works,
              will allow me to thrive in a working environment that shares my
              drive to change the world through health and technology, and
              explore the unknowns of the expanding universe.
            </p>
          </div>
          <img className="about__img" src={me} alt="Ryan Khazal Photo" />
        </div>
      </section>
    </>
  );
};

export default About;
