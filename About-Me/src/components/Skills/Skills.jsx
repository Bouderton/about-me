import "./Skills.css";
// import Break from "../Break/Break";

const Skills = () => {
  return (
    <>
      <div className="skills">
        <div className="skills__title-container">
          <h2 className="skills__title">What I Do</h2>
        </div>
        <div className="skills__list-container">
          {/* <h3 className="skills__front-header">Front End</h3> */}
          <ul className="skills__list">
            <li>
              <div className="skills__item">React</div>
            </li>
            <li>
              <div className="skills__item">JavaScript</div>
            </li>
            <li>
              <div className="skills__item">HTML</div>
            </li>
            <li>
              <div className="skills__item">CSS</div>
            </li>
            <li>
              <div className="skills__item">Express</div>
            </li>
            <li>
              <div className="skills__item">Node</div>
            </li>
            <li>
              <div className="skills__item">MongoDB</div>
            </li>
            <li>
              <div className="skills__item">JSON</div>
            </li>
            <li>
              <div className="skills__item">GCP</div>
            </li>
            <li>
              <div className="skills__item">Python</div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Skills;
