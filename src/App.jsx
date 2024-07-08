import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import Layout from "./layout";
import HomePage from "./pages/Home/";
import themes from "./utils/constants/themes";
import FormContext from "./context/FormContext";
import { useState } from "react";
import data from "./utils/constants/provinces";
import { Route, Routes } from "react-router-dom";
import IndonesiaPage from "./pages/Covid/Indonesia";
import ProvincePage from "./pages/Covid/Province";
import AboutPage from "./pages/Covid/About";
import TableContext from "./context/TableContext";

function App() {
  // inisialisasi state menggunakan useState
  const [provincesData, setProvincesData] = useState(data.provinces);
  const [tableData, setTableData] = useState(data.provinces);

  // untuk mengelola data provinsi dan data tabel
  const provinceValue = {
    provincesData,
    setProvincesData,
  };
  const tableValue = {
    tableData,
    setTableData,
  };

  return (
    <ThemeProvider theme={themes}>
      {/* menyediakan context untuk seluruh components */}
      <FormContext.Provider value={provinceValue}>
        <TableContext.Provider value={tableValue}>
          <GlobalStyle />
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/covid/indonesia" element={<IndonesiaPage />} />
              <Route path="/covid/province" element={<ProvincePage />} />
              <Route path="/covid/about" element={<AboutPage />} />
            </Routes>
          </Layout>
        </TableContext.Provider>
      </FormContext.Provider>
    </ThemeProvider>
  );
}

export default App;
