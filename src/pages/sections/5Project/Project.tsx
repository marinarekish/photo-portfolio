import { CardPhoto, ProjectCard, ProjectContainer } from "./Project.styled";
import { projectData } from "./projectData";

export function Project() {
  return (
    <ProjectContainer>
      <h2>"The seven deadly sins" - project</h2>
      <hr />
      {projectData.map((sin) => (
        <ProjectCard key={sin.title}>
          <CardPhoto>
            {sin.imageUrl.map((url) => (
              <img key={url} src={url} />
            ))}
          </CardPhoto>
          <p>{sin.title}</p>
        </ProjectCard>
      ))}
    </ProjectContainer>
  );
}
