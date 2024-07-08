import { Link } from "react-router-dom";
import StyledNavList from "./NavigationList.styled.js";

const NavigationList = (props) => {
  // desctructing props
  const { list, to, onClick } = props;

  return (
    <StyledNavList>
      <ul>
        <li>
          <Link to={to} onClick={onClick}>
            {list}
          </Link>
        </li>
      </ul>
    </StyledNavList>
  );
};

export default NavigationList;
