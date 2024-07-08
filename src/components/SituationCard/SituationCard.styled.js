import styled from "styled-components";
import themes from "../../utils/constants/themes";

const StyledSituationCard = styled.div`
  background-color: ${themes.colors.white};
  box-shadow: 0 2px 3px ${themes.colors.gray};
  width: 100%;
  height: 200px;
  border-radius: 10px;
  padding: 1rem;
  align-content: center;
  text-align: center;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export default StyledSituationCard;
