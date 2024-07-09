import NavigationList from "../NavigationList/NavigationList";
import StyledFooter from "./Footer.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <div className="wrapper">
          <footer>
            <div>
              <h2>Covid-19 Tracker</h2>
              <h4>Dzzhar</h4>
            </div>

            <div className="footer__list">
              <NavigationList list="Global" to="/" />
              <NavigationList list="Indonesia" to="/covid/indonesia" />
              <NavigationList list="Province" to="/covid/province" />
              <NavigationList list="About" to="/covid/about" />
            </div>
          </footer>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
