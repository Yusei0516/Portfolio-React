import { skillCategories } from "../data/skills";

export const Skills = () => {
  return (
    <div className="skills">
      {skillCategories.map((category) => (
        <div className="skill-category" key={category.name}>
          <h3>{category.name}</h3>
          <ul>
            {category.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};