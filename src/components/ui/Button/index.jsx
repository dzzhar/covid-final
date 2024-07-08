import styled, { css } from "styled-components";

const Button = styled.button`
  border: none;
  border-radius: 5px;
  font-weight: bold;

  /* props variant */
  background-color: ${(props) =>
    props.theme.colors[props.variant] || props.theme.colors["primary"]};
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;

  /* props full */
  ${(props) =>
    props.full &&
    css`
      display: block;
      width: 100%;
      margin-top: 1rem;
    `};

  /* props transparent */
  ${(props) =>
    props.transparent &&
    css`
      background-color: transparent;
      border: solid 2px ${(props) => props.theme.colors["primary"]};
      color: ${(props) => props.theme.colors["primary"]};
    `};

  /* props size */
  ${(props) => {
    if (props.size === "sm") {
      return props.theme.size.sm;
    } else if (props.size === "lg") {
      return props.theme.size.lg;
    } else {
      return props.theme.size.md;
    }
  }}
`;

export default Button;
