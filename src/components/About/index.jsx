/* eslint-disable react/no-unescaped-entities */
import "boxicons";
import Button from "../ui/Button";
import StyledAbout from "./About.styled";
import me from "../../assets/img/me.png";

const AboutMe = () => {
  return (
    <StyledAbout>
      <div className="container">
        <img src={me} alt="My Profile" />
        <div className="about">
          <h4 className="lighter">Hello!</h4>
          <h1>
            <span className="lighter">I'm</span> Zharifah Dzikra Purnomo
            <br />
            <span className="lighter">a</span> Web Developer
          </h1>
          <p className="description">
            I'm an undergraduate informatics student at STT Nurul Fikri.
            Currently, I'm interested in learning React.js.
          </p>
          <div className="button__container">
            <Button
              as="a"
              href="mailto:zharifahdzikra@gmail.com/"
              target="_blank"
            >
              Hire me
            </Button>
            <Button
              as="a"
              href="https://portofolio-dzzhar.vercel.app/"
              target="_blank"
              transparent
            >
              Portofolio
            </Button>
          </div>
        </div>
        <div className="socmed__icons">
          <a href="https://www.linkedin.com/in/zharifahdzikra/" target="_blank">
            <box-icon
              type="logo"
              name="linkedin"
              color="#333333"
              border="circle"
              size="md"
              animation="tada"
            ></box-icon>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=6285778359727"
            target="_blank"
          >
            <box-icon
              type="logo"
              name="whatsapp"
              color="#333333"
              border="circle"
              size="md"
              animation="tada"
            ></box-icon>
          </a>
          <a href="https://www.instagram.com/zharifahdzikra/" target="_blank">
            <box-icon
              type="logo"
              name="instagram"
              color="#333333"
              border="circle"
              size="md"
              animation="tada"
            ></box-icon>
          </a>
          <a href="https://github.com/dzzhar/" target="_blank">
            <box-icon
              type="logo"
              name="github"
              color="#333333"
              border="circle"
              size="md"
              animation="tada"
            ></box-icon>
          </a>
        </div>
      </div>
    </StyledAbout>
  );
};

export default AboutMe;
