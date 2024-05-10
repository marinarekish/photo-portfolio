import styled from "styled-components";

export const PriceContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-bottom: 60px;
`;

export const Prices = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin: 40px auto 0 auto;
  /* padding: 0 60px; */
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  max-width: 400px;
  border: 1px solid #bdae82;
  padding: 30px 10px;

  h3 {
    font-size: 26px;
  }

  p {
    font-size: 24px;
    line-height: 40px;
    color: #bdae82;
  }

  ul {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 30px;
    font-size: 16px;
  }

  @media (max-width: 768px) {
    width: 300px;
    padding: 20px 5px;

    h3 {
      font-size: 24px;
    }

    ul {
      margin-top: 20px;
      margin-bottom: 20px;
      font-size: 14px;
    }
  }

  @media (max-width: 386px) {
    width: 300px;
    padding: 10px 5px;

    h3 {
      font-size: 22px;
    }

    ul {
      margin-bottom: 10px;
    }
  }
`;
