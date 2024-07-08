import styled from "styled-components";
import themes from "../../utils/constants/themes";

const StyledForm = styled.div`
  padding-top: 5rem;

  h1 {
    padding-bottom: 2rem;
    text-align: center;
    color: ${themes.colors.primary};
  }

  .form__right h1 {
    display: none;
  }

  form {
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
  }

  label {
    color: ${themes.colors.secondary};
    font-weight: 600;
    margin: 1rem 0 0.5rem 0;
    font-size: 1.25rem;
    display: flex;
    justify-content: center;
  }

  label:first-child {
    margin-top: 0;
  }

  input {
    width: 100%;
    padding: 8px;
    border-radius: 5px;
    border: 1.5px solid ${themes.colors.primary};
  }

  select {
    width: 100%;
    padding: 8px;
    border-radius: 5px;
    border: 1.5px solid ${themes.colors.primary};
  }

  option {
    background-color: #267ebd15;
    font-size: 1.2rem;
  }

  @media (min-width: 768px) {
    section {
      display: flex;
      align-items: center;
      gap: 5rem;
    }

    .form__left {
      flex-basis: 50%;
    }

    .form__right {
      flex-basis: 50%;
      display: flex;
      flex-direction: column;
    }

    .form__left h1 {
      display: none;
    }

    .form__right h1 {
      display: block;
      align-self: flex-start;
      padding: 0;
      /* background-color: aqua; */
    }

    label {
      display: flex;
      align-self: start;
    }
  }

  @media (min-width: 992px) {
    padding-inline: 0;
    padding-top: 10rem;

    section {
      align-items: end;
    }

    .form__right {
      padding-left: 10%;
    }
  }
`;

export default StyledForm;
