import { MainMenu, SideNavContainer } from "./NavBar.styled";
import { useState } from "react";

export function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* full screen menu */}
      <MainMenu>
        <a href="/">Skills</a>
        <a href="/">Portfolio</a>
        <a href="/">Video</a>
        <a href="/">Price</a>
        <a href="/">Contact</a>
      </MainMenu>

      {/* small screen menu */}
      <SideNavContainer>
        <button>X</button>
        <a href="/" onClick={toggleNavbar}>
          Skills
        </a>
        <a href="/" onClick={toggleNavbar}>
          Portfolio
        </a>
        <a href="/" onClick={toggleNavbar}>
          Video
        </a>
        <a href="/" onClick={toggleNavbar}>
          Price
        </a>
        <a href="/" onClick={toggleNavbar}>
          Contact
        </a>
      </SideNavContainer>
    </>
  );
}
