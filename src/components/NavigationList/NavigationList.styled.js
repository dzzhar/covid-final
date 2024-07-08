import styled from "styled-components";
import themes from "../../utils/constants/themes";

const StyledNavList = styled.ul`
  li {
    margin-bottom: 0.5rem;
    list-style: none;

    a {
      text-decoration: none;
      color: ${themes.colors.white};
    }
  }

  @media (min-width: 768px) {
    li {
      margin-bottom: 0;
    }
  }
`;

export default StyledNavList;
