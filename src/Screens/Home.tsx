import { Element } from "react-scroll";
import { Header } from "../components/Header";
import { Team } from "../components/Team";
import { FirstSection } from "../components/FirstSection";
import { AboutBellevita } from "../components/AboutBellevita";
import { Localization } from "../components/Localization";
import { Footer } from "../components/Footer";
import { WhatsAppButton } from "../components/WhatsappButton";
import { OurServices } from "../components/OurServices";

export const Home = () => {
  return (
    <>
      <Header />
      <FirstSection />
      <Element id="about-bellevita" name="aboutBellevita">
        <AboutBellevita />
      </Element>
      <Element id="team" name="team">
        <Team />
      </Element>
      <Element id="ourServices" name="urServices">
        <OurServices />
      </Element>
      <Element id="localization" name="localization">
        <Localization />
      </Element>
      <Element id="footer" name="footer">
        <Footer />
      </Element>
      <WhatsAppButton />
    </>
  );
};
