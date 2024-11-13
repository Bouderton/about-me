import "./Skills.css";
// import Break from "../Break/Break";

const Skills = () => {
  return (
    <>
      <div className="skills">
        <div className="skills__title-container">
          <h2 className="skills__title">What I Do</h2>
        </div>
        <div className="skills__content">
          <div className="skills__list-container">
            <h3 className="skills__tech-title">Tech I Use</h3>
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
                <div className="skills__item">Git</div>
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
            <div className="skills__list-container">
              <h3 className="skills__tech-title">Other Stuff I Do</h3>
              <ul className="skills__list">
                <li>
                  <div className="skills__item">Basketball</div>
                </li>
                <li>
                  <div className="skills__item">Blender</div>
                </li>
                <li>
                  <div className="skills__item">Maya</div>
                </li>
                <li>
                  <div className="skills__item">Photoshop</div>
                </li>
                <li>
                  <div className="skills__item">Music</div>
                </li>
                <li>
                  <div className="skills__item">Cinema</div>
                </li>
                <li>
                  <div className="skills__item">Learn</div>
                </li>
              </ul>
            </div>
          </div>

          <div className="skills__text-container">
            <p className="skills__text">
              I specialize in creating responsive and intuitive web applications
              fit for all devices with modern technology. Insert more bullshit
              to get me hired :3
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
