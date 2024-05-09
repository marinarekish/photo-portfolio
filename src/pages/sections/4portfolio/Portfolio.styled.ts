import styled from "styled-components";

export const PortfolioContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`;

export const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 5px;
  align-items: center;
  margin: 20px auto 10px auto;
`;

export const CategoryDiv = styled.div``;

export const CategoryButton = styled.label`
  color: #bdae82;
  font-size: 20px;
  line-height: 40px;

  padding: 10px 40px;
  border: 1px solid #bdae82;

  text-align: center;

  cursor: pointer;

  &:hover {
    color: #e1d4c9;
    background: #bdae82;
  }
`;

export const Input = styled.input`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;

  &:checked + ${CategoryButton} {
    color: #e1d4c9;
    background: #bdae82;
  }
`;

export const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 0 auto;
  margin-bottom: 60px;
  padding: 30px;
`;

export const ImageDiv = styled.div`
  width: 400px;
  height: 500px;
  overflow: hidden;
`;

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
