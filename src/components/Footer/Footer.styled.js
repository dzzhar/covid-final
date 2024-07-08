import styled from "styled-components";
import themes from "../../utils/constants/themes";

const StyledFooter = styled.div`
  background-color: ${themes.colors.primary};
  padding: 2rem;
  margin-top: 5rem;

  footer {
    color: ${themes.colors.white};
    text-align: center;
  }

  h2 {
    font-weight: 600;
    line-height: normal;
  }

  h4 {
    font-weight: normal;
    line-height: normal;
  }

  .footer__list {
    display: none;
  }

  @media (min-width: 768px) {
    padding: 1rem 2rem;

    footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    h2,
    h4 {
      text-align: start;
    }

    .footer__list {
      display: flex;
      gap: 2rem;
    }
  }

  @media (min-width: 992px) {
    padding-inline: 0;
    margin-top: 10rem;

    .wrapper {
      max-width: 1200px;
      width: 80%;
      margin: auto;
    }
  }
`;

export default StyledFooter;
