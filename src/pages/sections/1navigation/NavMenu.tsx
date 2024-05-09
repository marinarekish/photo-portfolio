import { Burger, CloseButton, MainMenu, SideNavContainer } from "./NavBar.styled";
import { useState } from "react";

export function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function openSideMenu() {
    setIsOpen(true);
  }

  function closeSideMenu() {
    setIsOpen(false);
  }

  return (
    <>
      {/* full screen menu */}
      <MainMenu>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#price">Price</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </MainMenu>

      <Burger onClick={openSideMenu} />

      {/* small screen menu */}
      {isOpen && (
        <SideNavContainer>
          <CloseButton onClick={closeSideMenu}>X</CloseButton>
          <ul>
            <a href="#skills" onClick={closeSideMenu}>
              Skills
            </a>
            <a href="#portfolio" onClick={closeSideMenu}>
              Portfolio
            </a>
            <a href="#price" onClick={closeSideMenu}>
              Price
            </a>
            <a href="#contact" onClick={closeSideMenu}>
              Contact
            </a>
          </ul>
        </SideNavContainer>
      )}
    </>
  );
}
