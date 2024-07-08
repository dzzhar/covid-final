import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  @media (min-width: 992px) {
    width: 80%;
    padding: 0;
  }
`;

export default StyledContainer;
