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

  ::before {
    content: "";
    top: 0;
    bottom: 0;
    width: 50%;
    background-image: linear-gradient(120deg, transparent 40%, black 41% 60%, transparent 61%);
  }
`;
