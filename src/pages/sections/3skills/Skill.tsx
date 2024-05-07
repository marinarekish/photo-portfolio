import { SkillCard } from "./Skills.styled";
import { skills } from "./skillsData";

export function Skill() {
  return (
    <>
      {skills.map((skill) => (
        <SkillCard key={skill.title}>
          <img src={skill.icon} />
          <h3>{skill.title}</h3>
          <p>{skill.description}</p>
        </SkillCard>
      ))}
    </>
  );
}
