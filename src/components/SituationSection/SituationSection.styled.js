import styled from "styled-components";
import themes from "../../utils/constants/themes";

const StyledSituationSection = styled.div`
  padding-bottom: 5rem;

  section {
    text-align: center;
    color: ${themes.colors.secondary};
  }

  h1 {
    color: ${themes.colors.primary};
  }

  h4 {
    font-weight: 500;
    padding-bottom: 1rem;
  }

  .situation__cards {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media (min-width: 768px) {
    h4 {
      padding-bottom: 2rem;
    }

    .situation__cards {
      flex-direction: row;
      justify-content: center;
    }
  }

  @media (min-width: 992px) {
    padding-inline: 0;
    padding-bottom: 10rem;
  }
`;

export default StyledSituationSection;
