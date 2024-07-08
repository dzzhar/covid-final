import styled from "styled-components";
import themes from "../../utils/constants/themes";

const StyledProvinceTable = styled.div`
  section {
    text-align: center;
    color: ${themes.colors.secondary};
  }

  h1 {
    color: ${themes.colors.primary};
  }

  h4 {
    font-weight: 500;
    padding-bottom: 1rem;
  }

  .table {
    width: auto;
    overflow-x: auto;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    font-weight: 500;
  }

  thead {
    background-color: ${themes.colors.primary};
    color: ${themes.colors.white};
  }

  th,
  td {
    border: 1px solid ${themes.colors.primary};
    padding: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .table__thead {
    width: 15%;
  }

  table tr:nth-child(even) {
    background-color: #267ebd15;
  }

  @media (min-width: 768px) {
    h4 {
      padding-bottom: 2rem;
    }
  }

  @media (min-width: 992px) {
    padding-inline: 0;
  }
`;

export default StyledProvinceTable;
