import "./Skills.css";
// import Break from "../Break/Break";

const Skills = () => {
  return (
    <>
      <div className="skills">
        <div className="skills__title-container">
          <h2 className="skills__title">What I Do</h2>
        </div>
        <div className="skills__front">
          <h3 className="skills__front-header">Front End</h3>
          <ul className="skills__front-list">
            <li className="skills__front-list-item">REACT</li>
            <li className="skills__front-list-item">JAVASCRIPT</li>
            <li className="skills__front-list-item">HTML</li>
            <li className="skills__front-list-item">CSS</li>
          </ul>
        </div>
        <div className="skills__back">
          <h3 className="skills__back-header">Back End</h3>
          <ul className="skills__back-list">
            <li className="skills__back-list-item">EXPRESS</li>
            <li className="skills__back-list-item">NODE</li>
            <li className="skills__back-list-item">MONGO</li>
            <li className="skills__back-list-item">JSON</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Skills;
