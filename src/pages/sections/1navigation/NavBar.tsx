import { Link } from "react-router-dom";
import { Logo, NavContainer } from "./NavBar.styled";
import logo from "/img/icons/logo.svg";
import { NavMenu } from "./NavMenu";

export function NavBar() {
  return (
    <NavContainer>
      <Link to="/">
        <Logo src={logo} />
      </Link>
      <NavMenu />
    </NavContainer>
  );
}
