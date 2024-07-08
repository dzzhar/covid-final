import styled from "styled-components";
import themes from "../../utils/constants/themes";

const color = themes.colors;

const StyledHero = styled.div`
  padding: 5rem 0;

  section {
    display: flex;
    flex-direction: column;
    text-align: center;
    color: ${color.secondary};
  }

  .hero__left {
    /* background-color: antiquewhite; */
    margin-bottom: 2rem;
    flex-basis: 50%;
  }

  h1 {
    color: ${color.primary};
  }

  h4 {
    font-weight: 500;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
  }

  .hero__right {
    /* background-color: aqua; */
    flex-basis: 50%;
  }

  Button {
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    section {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 5rem;
    }

    .hero__left {
      text-align: start;
      margin-bottom: 0;
    }

    Button {
      margin: 0;
    }
  }

  @media (min-width: 992px) {
    padding: 10rem 0;
  }
`;

export default StyledHero;
