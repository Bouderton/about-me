import "./About.css";
import Break from "../Break/Break";

const About = () => {
  return (
    <>
      <div className="about__container">
        <h2 className="about__title">About Me</h2>
        <p className="about__text">
          **PLACEHOLDER** My journey into web development began at TripleTen,
          where I not only discovered my love for coding but also developed a
          solid foundation in various technologies. At TripleTen, I mastered the
          essentials like HTML and CSS and progressed into more advanced areas
          such as JavaScript, React, Node, and Express. I also became proficient
          in Git, which has been invaluable for managing and collaborating on
          projects. I truly enjoyed my time at TripleTen, where I gained the
          skills and confidence to tackle a wide range of development
          challenges. As a recent graduate, I am ready to take on a fulfilling
          and successful career! :3
        </p>
      </div>
      <Break />
    </>
  );
};

export default About;
