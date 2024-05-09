import { Skill } from "./Skill";
import { SkillsContainer, SkillsList } from "./Skills.styled";

export function Skills() {
  return (
    <SkillsContainer id="skills">
      <h2>Skills</h2>
      <SkillsList>
        <Skill />
      </SkillsList>
    </SkillsContainer>
  );
}
