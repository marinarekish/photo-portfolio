import { NavBar } from "./sections/1navigation/NavBar";
import { Banner } from "./sections/2banner/Banner";
import { Skills } from "./sections/3skills/Skills";
import { Portfolio } from "./sections/4portfolio/Portfolio";
import { Video } from "./sections/5video/Video";
import { Price } from "./sections/6price/Price";
import { Contacts } from "./sections/7contacts/Contacts";

export function LandingPage() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Skills />
      <Portfolio />
      <Video />
      <Price />
      <Contacts />
    </div>
  );
}
