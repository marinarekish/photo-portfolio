import { Skill } from "./Skill";
import { SkillsContainer, SkillsList } from "./Skills.styled";

export function Skills() {
  return (
    <SkillsContainer id="skills">
      <h2>Skills</h2>
      <hr />
      <SkillsList>
        <Skill />
      </SkillsList>
    </SkillsContainer>
  );
}
