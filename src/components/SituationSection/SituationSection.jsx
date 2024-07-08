/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import GlobalCard from "../SituationCard/SituationCard.jsx";
import StyledSituationSection from "./SituationSection.styled.js";

const SituationSection = (props) => {
  // mengirim beberapa props
  const { url, title, caption } = props;

  // insialisasi state untuk data
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetchDataGlobal();
  }, []);

  /**
   * - fetch data dari props url yang dikirim dari pages
   * - ubah data menjadi format json
   * - set data ke variabel data global atau data indonesia
   */
  const fetchDataGlobal = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setDatas(data.global || data.indonesia);
  };

  return (
    <StyledSituationSection>
      <div>
        <section>
          <h1>{title}</h1>
          <h4>{caption}</h4>

          <div className="situation__cards">
            {datas.map((data) => {
              return <GlobalCard data={data} key={data.status} />;
            })}
          </div>
        </section>
      </div>
    </StyledSituationSection>
  );
};

export default SituationSection;
