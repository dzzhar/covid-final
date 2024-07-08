import styled from "styled-components";
import themes from "../../utils/constants/themes";

const StyledNavbar = styled.div`
  background-color: ${themes.colors.primary};
  padding: 1rem 2rem;

  nav {
    display: flex;
    flex-direction: column;
    color: ${themes.colors.white};
  }

  .navbar__mobile {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  span {
    width: 2.5rem;
  }

  .navbar__list {
    display: none;
  }

  .list__open {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
  }

  @media (min-width: 768px) {
    nav {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    span {
      display: none;
    }

    h1 {
      margin-bottom: 0;
    }

    .navbar__list {
      display: flex;
      flex-direction: row;
      gap: 2rem;
    }

    .list-open {
      margin-top: 0;
    }
  }

  @media (min-width: 992px) {
    padding-inline: 0;

    .wrapper {
      width: 80%;
      max-width: 1200px;
      margin: auto;
    }
  }
`;

export default StyledNavbar;
