import styled from "styled-components";

export const NavContainer = styled.section`
  width: 100%;
  max-width: 1440px;
  /* padding: 0 60px; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  @media (max-width: 968px) {
    align-items: flex-start;
  }
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
`;

export const MainMenu = styled.ul`
  display: flex;
  justify-content: flex-end;
  gap: 50px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SideNavContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    position: absolute;
    top: -40px;
    right: -40px;
    background-color: #242420;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 50px;
    width: 350px;
    max-width: 400px;
    height: 100vh;
  }
`;
