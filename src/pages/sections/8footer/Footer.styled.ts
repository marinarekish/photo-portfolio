import styled from "styled-components";

export const FooterContainer = styled.section`
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px 40px;

  font-size: 20px;
  line-height: 50px;
  background-color: #bdae82;

  @media (max-width: 768px) {
    padding: 10px 30px;

    font-size: 18px;
    line-height: 40px;
  }

  @media (max-width: 386px) {
    padding: 10px 20px;

    font-size: 16px;
    line-height: 30px;
  }
`;

export const Copyright = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Social = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  font-size: 26px;

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 386px) {
    font-size: 18px;
  }
`;
