import { Banner } from "./sections/2banner/Banner";
import { Skills } from "./sections/3skills/Skills";
import { Portfolio } from "./sections/4portfolio/Portfolio";
import { Video } from "./sections/5video/Video";
import { Price } from "./sections/6price/Price";
import { Contacts } from "./sections/7contacts/Contacts";
import { Footer } from "./sections/8footer/Footer";

export function LandingPage() {
  return (
    <div>
      <Banner />
      <Skills />
      <Portfolio />
      <Video />
      <Price />
      <Contacts />
      <Footer />
    </div>
  );
}
