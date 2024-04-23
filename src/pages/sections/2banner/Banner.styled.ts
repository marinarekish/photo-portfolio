import styled from "styled-components";
import bannerImage from "/img/images/bannerImage.png";

export const BannerContainer = styled.section`
  background-image: url(${bannerImage});
  background-size: cover;
  background-position: center;
  max-width: 1440px;
  height: 910px;

  padding: 0 80px;
  margin-bottom: 40px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const BannerHeader = styled.h1`
  font-size: 60px;
  line-height: 120px;
  color: white;
  margin-bottom: 10px;
`;

export const BannerText = styled.p`
  font-family: "Inter";
  font-size: 20px;
  line-height: 40px;
  max-width: 470px;
  margin-bottom: 50px;
`;

export const BannerButton = styled.button`
  max-width: 220px;
  padding: 8px 70px;
  background-color: #bdae82;
  border: none;
  cursor: pointer;

  font-size: 20px;
  line-height: 40px;
  color: #242420;

  &:hover {
    color: #ffffff;
  }
`;
