import "./About.css";
// import Break from "../Break/Break";

const About = () => {
  return (
    <>
      <div className="about__container">
        <h2 className="about__title">About Me</h2>
        <p className="about__text" style={{ textAlign: "left" }}>
          I am a Full-Stack Web Developer looking for new opportunities in the
          tech world. I graduated from one of the top Software Engineering Boot
          Camps in the U.S, with internship experience and over 1,200
          contributions on GitHub in the last year. I specialize in creating
          responsive and intuitive web applications fit for all devices using
          React, JavaScript, HTML/CSS, Express, Node and MongoDB.
        </p>
        <p className="about__text" style={{ textAlign: "right" }}>
          As a former Student Athlete with a Regional and State Championship;
          Resilience, Teamwork and Communication are customary in my love for
          innovative technology. I am confident that my background in athletics,
          paired with my passion for health and fitness, will allow me to thrive
          in a working environment that shares my drive to change the world
          through health and technology.
        </p>
      </div>
    </>
  );
};

export default About;
