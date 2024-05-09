import { Logo, LogoNav, NavContainer } from "./NavBar.styled";
import logo from "/img/icons/logo.svg";
import { NavMenu } from "./NavMenu";

export function NavBar() {
  return (
    <NavContainer>
      <LogoNav href="#banner">
        <Logo src={logo} />
        <h4>Alice Rekish</h4>
      </LogoNav>
      <NavMenu />
    </NavContainer>
  );
}
