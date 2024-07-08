import icon from "../../assets/icons/warning.svg";
import StyledButton from "./Alert.styled";

const Alert = (props) => {
  const { children } = props;

  return (
    <StyledButton>
      <img src={icon} alt="warning" />
      <span>{children}</span>
    </StyledButton>
  );
};

export default Alert;
