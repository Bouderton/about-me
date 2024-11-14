import "./Skills.css";
import Skill from "../Skill/Skill";

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
              <Skill name={"React"} />
              <Skill name={"JavaScript"} />
              <Skill name={"HTML"} />
              <Skill name={"CSS"} />
              <Skill name={"Express"} />
              <Skill name={"Git"} />
              <Skill name={"Node"} />
              <Skill name={"MongoDB"} />
              <Skill name={"JSON"} />
              <Skill name={"GCP"} />
              <Skill name={"Python"} />
            </ul>
            <div
              className="skills__list-container"
              style={{ marginTop: "35px" }}
            >
              <h3 className="skills__tech-title">Other Stuff I Enjoy</h3>
              <ul className="skills__list">
                <Skill name={"Basketball"} />
                <Skill name={"Blender"} />
                <Skill name={"Maya"} />
                <Skill name={"Photoshop"} />
                <Skill name={"Music"} />
                <Skill name={"Cinema"} />
                <Skill name={"Learning"} />
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
