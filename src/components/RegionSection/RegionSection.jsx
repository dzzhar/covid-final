import { useEffect, useState } from "react";
import StyledRegionSection from "./RegionSection.styled";
import ENDPOINTS from "../../utils/constants/endpoints";
import RegionCard from "../RegionCard/RegionCard";

const RegionSection = () => {
  // inisialisasi state untuk data
  const [regionData, setRegionData] = useState([]);

  useEffect(() => {
    fetchRegionData();
  }, []);

  /**
   * - fetch data dari endpoints global
   * - ubah data menjadi format json
   * - set data ke data regions
   */
  const fetchRegionData = async () => {
    const response = await fetch(ENDPOINTS.GLOBAL);
    const data = await response.json();
    setRegionData(data.regions);
  };

  return (
    <StyledRegionSection>
      <div>
        <h1>Situation by Regions</h1>
        <h4>Covid Preferred Readings</h4>

        <div className="regions">
          {regionData.map((region) => (
            <RegionCard region={region} key={region.name} />
          ))}
        </div>
      </div>
    </StyledRegionSection>
  );
};

export default RegionSection;
