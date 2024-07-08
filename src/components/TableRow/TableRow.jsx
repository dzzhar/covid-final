const TableRow = (props) => {
  // mengambil props table dan index
  const { table, index } = props;

  // destrukturisasi props table untuk mendapatkan name dan numbers
  const { name, numbers } = table;

  /**
   * - mengatur status berdasarkan ketersediaan numbers
   * - jika tersedia, gunakan nilai dari numbers
   * - jika tidak tersedia, gunakan nilai dari props table
   */
  const confirmed = numbers ? numbers.confirmed : table.kasus;
  const recovered = numbers ? numbers.recovered : table.sembuh;
  const treatment = numbers ? numbers.treatment : table.dirawat;
  const death = numbers ? numbers.death : table.meninggal;

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{table.kota || name}</td>
      <td>{confirmed}</td>
      <td>{recovered}</td>
      <td>{treatment}</td>
      <td>{death}</td>
    </tr>
  );
};

export default TableRow;
