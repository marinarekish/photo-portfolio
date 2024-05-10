import styled from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

export const NavContainer = styled.section`
  max-width: 1440px;

  padding: 20px 40px;
  background-color: #bdae82;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 9;

  @media (max-width: 768px) {
    padding: 10px 20px;
  }

  @media (max-width: 386px) {
    padding: 20px 20px;
  }
`;

export const LogoNav = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 20px;
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
`;

export const MainMenu = styled.ul`
  display: flex;
  justify-content: flex-end;
  gap: 30px;

  @media (max-width: 768px) {
    display: none;
  }

  a {
    font-size: 18px;

    &:hover {
      color: #242424;
    }
  }
`;

export const Burger = styled(RxHamburgerMenu)`
  display: none;

  @media (max-width: 768px) {
    display: block;
    font-size: 30px;
    cursor: pointer;
  }
`;

export const CloseButton = styled(IoClose)`
  font-size: 35px;
  cursor: pointer;
  position: absolute;
  right: 40px;
  top: 30px;
`;

export const SideNavContainer = styled.div`
  display: none;

  a {
    font-size: 22px;

    &:hover {
      color: #bdae82;
    }
  }

  ul {
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 0;
    right: 0;
    background-color: #342420;
    display: flex;
    padding: 60px;
    width: 250px;
    height: 100vh;
  }
`;
