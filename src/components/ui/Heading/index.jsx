import styled from "styled-components";

const Heading = styled.button`
  background-color: transparent;
  border: none;
  font-weight: bold;

  /* props variant */
  color: ${(props) =>
    props.theme.colors[props.color] || props.theme.colors["secondary"]};

  /* props weight */
  font-weight: ${(props) => {
    if (props.weight === "light") {
      return "300";
    } else if (props.weight === "normal") {
      return "500";
    } else if (props.weight === "semi-bold") {
      return "600";
    } else if (props.weight === "bold") {
      return "bold";
    } else {
      return "bold";
    }
  }};

  /* props heading */
  ${(props) => {
    if (props.fontSize === "h1") {
      return props.theme.fontSize.h1;
    } else if (props.fontSize === "h2") {
      return props.theme.fontSize.h2;
    } else if (props.fontSize === "h3") {
      return props.theme.fontSize.h3;
    } else if (props.fontSize === "h4") {
      return props.theme.fontSize.h4;
    } else {
      return props.theme.fontSize.p;
    }
  }};
`;

export default Heading;
