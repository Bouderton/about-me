import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <h2 className="skills__title">What I Do</h2>
      <div className="skills__front">
        <h3 className="skills__front-header">Front End</h3>
        <ul className="skills__front-list">
          <li className="skills__front-list-item">HTML</li>
          <li className="skills__front-list-item">CSS</li>
          <li className="skills__front-list-item">JAVASCRIPT</li>
          <li className="skills__front-list-item">REACT</li>
        </ul>
      </div>
      <div className="skills__back">
        <h3 className="skills__back-header">Back End</h3>
        <ul className="skills__back-list">
          <li className="skills__back-list-item">NODE</li>
          <li className="skills__back-list-item">EXPRESS</li>
          <li className="skills__back-list-item">JSON</li>
          <li className="skills__back-list-item">GIT</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
