import styled from "styled-components";

export const VideoContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  margin-bottom: 60px;
`;

export const VideoDiv = styled.div`
  max-width: 1400px;
  max-height: 670px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;

  margin-top: 20px;

  @media (max-width: 768px) {
    width: 700px;
  }

  @media (max-width: 386px) {
    width: 350px;
  }
`;
