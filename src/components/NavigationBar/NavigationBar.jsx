import { useState } from "react";
import NavigationList from "../NavigationList/NavigationList";
import icon from "../../assets/icons/menu.svg";
import StyledNavbar from "./NavigationBar.styled";

const NavigationBar = () => {
  // untuk set list mobile agar tidak muncul di awal
  const [isOpen, setIsOpen] = useState(false);

  // fungsi handler ketika button diklik
  const handleNavbar = () => {
    // ubah nilai setIsOpen menjadi true
    setIsOpen(!isOpen);
  };

  // fungsi untuk menutup menu ketika link dipencet
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <StyledNavbar>
      <div>
        <div className="wrapper">
          <nav>
            <div className="navbar__mobile">
              <h1>Covid-19 Tracker</h1>
              <span className="navbar__button" onClick={handleNavbar}>
                <img src={icon} alt="icon" />
              </span>
            </div>

            {/* 
          navbar__list awalnya disembunyikan, 
          dimunculkan lagi ketika isOpen bernilai true
           */}
            <div className={`navbar__list ${isOpen ? "list__open" : ""}`}>
              <NavigationList list="Global" to="/" onClick={closeMenu} />
              <NavigationList
                list="Indonesia"
                to="/covid/indonesia"
                onClick={closeMenu}
              />
              <NavigationList
                list="Province"
                to="/covid/province"
                onClick={closeMenu}
              />
              <NavigationList
                list="About"
                to="/covid/about"
                onClick={closeMenu}
              />
            </div>
          </nav>
        </div>
      </div>
    </StyledNavbar>
  );
};

export default NavigationBar;
