import styled from "styled-components";
import bannerImage from "/img/images/bannerImage.jpg";

export const BannerContainer = styled.section`
  background-image: linear-gradient(to right, black 0%, transparent 50%), url(${bannerImage});
  background-size: cover;
  background-position: 25% 75%;
  max-width: 1440px;
  height: 910px;

  padding: 0 80px;
  margin-bottom: 60px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  h1 {
    font-size: 60px;
    line-height: 120px;
    color: white;
    margin-bottom: 10px;
  }

  p {
    font-family: "Inter";
    font-size: 24px;
    line-height: 40px;
    max-width: 400px;
    margin-bottom: 50px;
  }

  @media (max-width: 768px) {
    background-position: 30% 70%;
    background-image: linear-gradient(to right, black 0%, transparent 70%), url(${bannerImage});
  }

  @media (max-width: 464px) {
    height: 700px;
    padding: 0 20px;
    background-position: 35% 65%;
    background-image: linear-gradient(to right, black 0%, transparent 80%), url(${bannerImage});

    h1 {
      font-size: 40px;
      line-height: 60px;
      width: 200px;
    }

    p {
      font-size: 18px;
      line-height: 26px;
      width: 200px;
    }
  }
`;
