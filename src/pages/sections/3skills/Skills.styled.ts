import styled from "styled-components";

export const SkillsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 60px;
  padding: 0 20px;
`;

export const SkillsList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const SkillCard = styled.div`
  max-width: 300px;
  height: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 15px;

  h3 {
    font-size: 24px;
    margin: 0;
  }

  p {
    text-align: center;
    font-size: 18px;
    line-height: 36px;
    margin: 0;
  }

  img {
    width: auto;
    height: 60px;
    margin: 0;
  }
`;
