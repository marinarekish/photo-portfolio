import { Copyright, FooterContainer, Social } from "./Footer.styled";
import { FaRegCopyright } from "react-icons/fa6";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export function Footer() {
  return (
    <FooterContainer>
      <Copyright>
        <FaRegCopyright />
        <p>2024</p>
      </Copyright>
      <h4>Alice Rekish</h4>
      <Social>
        <a href="https://www.instagram.com/alice_may_cry/" target="_blank">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/marikamaycry" target="_blank">
          <FaFacebook />
        </a>
      </Social>
    </FooterContainer>
  );
}

{
  /* <a href="https://twitter.com/home" target="_blank">
  <FaTwitter />
</a> */
}
{
  /* <a href="https://pinterest.com/" target="_blank">
  <FaPinterest />
</a> */
}
