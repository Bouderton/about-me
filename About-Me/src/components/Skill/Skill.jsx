import "../Skills/Skills.css";

const Skill = ({ name }) => {
  return (
    <li>
      <div className="skills__item">{name}</div>
    </li>
  );
};

export default Skill;
