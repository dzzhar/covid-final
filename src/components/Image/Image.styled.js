import styled from "styled-components";

const StyledImage = styled.div`
  .image {
    width: 500px;
    margin: auto;
  }

  @media (min-width: 768px) {
    .image {
      margin: 0;
    }
  }
`;

export default StyledImage;
