/* eslint-disable react/no-unescaped-entities */
import HeroImage from "../../assets/img/hero.svg";
import Image from "../Image/Image";
import Button from "../ui/Button/index.jsx";
import StyledHero from "./Hero.styled.js";

const Hero = () => {
  return (
    <StyledHero>
      <div>
        <section>
          <div className="hero__left">
            <h1>Covid-19 Tracker</h1>
            <h4>Monitoring the Development of Covid</h4>
            <p>
              Monitor the development of the Covid-19 virus to protect the
              safety of your family. Vaccination is key to fighting the spread
              of this virus. Let's Vaccinate!
            </p>
            <Button>Vaccine</Button>
          </div>

          <div className="hero__right">
            <div>
              <Image url={HeroImage} />
            </div>
          </div>
        </section>
      </div>
    </StyledHero>
  );
};

export default Hero;
