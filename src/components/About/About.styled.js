import styled from "styled-components";

const StyledAbout = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    color: #333333;
  }

  img {
    margin-top: 5rem;
    width: 250px;
    border-radius: 300px;
    box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.5);
  }

  .about {
    width: 250px;
    margin-block: 5rem;
  }

  .lighter {
    font-weight: normal;
  }

  .description {
    margin: 1rem 0 3rem 0;
  }

  .button__container {
    display: flex;
    gap: 0.5rem;
  }

  a {
    text-decoration: none;
  }

  .socmed__icons {
    display: flex;
    width: 250px;
    gap: 0.5rem;
  }

  @media (min-width: 768px) {
    .container {
      flex-direction: row;
      justify-content: space-between;
      margin: 5rem 0;
      height: 70vh;
    }

    img {
      margin: 0;
      width: 350px;
    }

    .about {
      margin: 0;
      flex-basis: 40%;
    }

    .description {
      width: 80%;
    }

    .socmed__icons {
      flex-direction: column;
      gap: 1rem;
      width: fit-content;
    }
  }
`;

export default StyledAbout;
