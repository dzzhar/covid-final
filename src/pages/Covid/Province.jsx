/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import FormCovid from "../../components/FormCovid/FormCovid";
import Hero from "../../components/Hero/Hero";
import Table from "../../components/Table/Table";
import TableContext from "../../context/TableContext";
import data from "../../utils/constants/provinces";

const ProvincePage = () => {
  const { setTableData } = useContext(TableContext);

  useEffect(() => {
    setTableData(data.provinces);
  }, []);

  return (
    <>
      <Hero />
      <Table title="Province" caption="Covid Data by Province" />
      <FormCovid />
    </>
  );
};

export default ProvincePage;
