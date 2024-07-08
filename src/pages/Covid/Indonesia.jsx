/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import SituationSection from "../../components/SituationSection/SituationSection";
import Hero from "../../components/Hero/Hero";
import Table from "../../components/Table/Table";
import ENDPOINTS from "../../utils/constants/endpoints";
import TableContext from "../../context/TableContext";

const IndonesiaPage = () => {
  const { setTableData } = useContext(TableContext);

  useEffect(() => {
    fetchTableData();
  }, []);

  const fetchTableData = async () => {
    const response = await fetch(ENDPOINTS.INDONESIA);
    const data = await response.json();
    setTableData(data.regions);
  };

  return (
    <>
      <Hero />
      <SituationSection
        url={ENDPOINTS.INDONESIA}
        title="Indonesia Situation"
        caption="Covid Data by Indonesia"
      />
      <Table title="Situation by Provinces" caption="Covid Data by Province" />
    </>
  );
};

export default IndonesiaPage;
