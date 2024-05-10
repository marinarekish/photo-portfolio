import styled from "styled-components";

export const ProjectContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  width: 100%;

  margin-bottom: 60px;
`;

export const ProjectCard = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 26px;
    margin: 10px auto 20px auto;
    color: #bdae82;
  }
`;

export const CardPhoto = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: nowrap;
  height: 400px;

  img {
    height: auto;
    max-width: 350px;
    object-fit: cover;
  }
`;
