import styled from "styled-components";

export const PriceContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Prices = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
  margin: 0 auto;
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
    font-size: 20px;
    line-height: 40px;
    color: #bdae82;
  }

  ul {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 40px;
  }
`;

export const PriceButton = styled.button`
  max-width: 220px;
  margin-top: 40px;
  padding: 8px 30px;
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
