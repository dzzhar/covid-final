import styled from "styled-components";
import themes from "../../utils/constants/themes";

const StyledRegionCard = styled.div`
  background-color: ${themes.colors.white};
  box-shadow: 0 2px 3px ${themes.colors.gray};
  width: 100%;
  height: 100%;
  border-radius: 10px;
  padding: 2.5rem 3rem;
  align-content: center;

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  h2 {
    text-align: center;
    color: ${themes.colors.secondary};
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.25rem;
    color: ${themes.colors.gray};
  }

  @media (min-width: 768px) {
    flex-basis: 48%;
    flex-grow: 1;
  }

  @media (min-width: 992px) {
    flex-basis: 32%;
  }
`;

export default StyledRegionCard;
