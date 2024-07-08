import { useContext } from "react";
import TableRow from "../TableRow/TableRow.jsx";
import StyledTable from "./Table.styled.js";
import FormContext from "../../context/FormContext.jsx";
import TableContext from "../../context/TableContext.jsx";

const Table = (props) => {
  // mengirim props title dan caption
  const { title, caption } = props;

  // formcontext untuk mendapatkan data provincesData
  const { provincesData } = useContext(FormContext);

  // tablecontext untuk mendapatkan data tableData
  const { tableData } = useContext(TableContext);

  /**
   * - menentukan data render berdasarkan ketersediaan tableData
   * - jika tidak tersedia, provincesData akan dirender
   * - jika tersedia, tableData akan dirender
   */
  const dataToRender = tableData || provincesData;

  return (
    <StyledTable>
      <div>
        <section>
          <h1>{title}</h1>
          <h4>{caption}</h4>

          <div className="table">
            <table>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>City</th>
                  <th className="table__thead">Confirmed</th>
                  <th className="table__thead">Recovered</th>
                  <th className="table__thead">Treatment</th>
                  <th className="table__thead">Death</th>
                </tr>
              </thead>
              <tbody>
                {/* parameter index untuk index array dari tiap elemen table */}
                {dataToRender.map((table, index) => {
                  return (
                    <TableRow
                      table={table}
                      key={table.kota || table.name}
                      index={index}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </StyledTable>
  );
};

export default Table;
