import styled from "styled-components";
import themes from "../../utils/constants/themes";

const StyledRegionSection = styled.div`
  .regions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex-wrap: wrap;
  }

  h1 {
    color: ${themes.colors.primary};
    text-align: center;
  }

  h4 {
    font-weight: 500;
    padding-bottom: 1rem;
    text-align: center;
    color: ${themes.colors.secondary};
  }

  @media (min-width: 768px) {
    .regions {
      flex-direction: row;
      justify-content: space-between;
    }

    h4 {
      padding-bottom: 2rem;
    }
  }

  @media (min-width: 992px) {
    padding-inline: 0;

    .regions {
      align-items: flex-end;
    }
  }
`;

export default StyledRegionSection;
