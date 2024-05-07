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
  margin: 0 auto;
`;

export const CategoryButton = styled.label`
  color: #bdae82;
  font-size: 20px;
  line-height: 40px;
  text-align: center;

  padding: 10px auto;
  width: 220px;
  border: 1px solid #bdae82;

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
    background: #403f3d;
    color: #c1b6ad;
  }
`;

export const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 0 auto;
  padding: 30px;
`;

export const ImageDiv = styled.div`
  width: 400px;
  height: 500px;
  overflow: hidden;
`;

export const Photo = styled.img`
  width: 100%;
  object-fit: cover;
`;
