import "boxicons";
import StyledRegionCard from "./RegionCard.styled";
import Heading from "../ui/Heading";

const RegionCard = (props) => {
  // mengambil props region dari components RegionSection
  const { region } = props;

  // destrukturisasi props region untuk mendapatkan name dan numbers
  const { name, numbers } = region;

  return (
    <StyledRegionCard>
      <div className="container">
        <h2>{name}</h2>
        <div className="wrapper">
          <span>
            <p>Confirmed</p>
            <Heading fontSize="h3" color="success" weight="normal">
              {numbers.confirmed.toLocaleString("id-ID")}
            </Heading>
          </span>
          <box-icon
            type="solid"
            name="face-mask"
            size="lg"
            color="#38b485"
          ></box-icon>
        </div>
        <div className="wrapper">
          <span>
            <p>Recovered</p>
            <Heading fontSize="h3" color="primary" weight="normal">
              {numbers.recovered.toLocaleString("id-ID")}
            </Heading>
          </span>
          <box-icon name="happy-beaming" size="lg" color="#267ebd"></box-icon>
        </div>
        <div className="wrapper">
          <span>
            <p>Death</p>
            <Heading fontSize="h3" color="danger" weight="normal">
              {numbers.death.toLocaleString("id-ID")}
            </Heading>
          </span>
          <box-icon
            type="solid"
            name="skull"
            size="lg"
            color="#fa5a7e"
          ></box-icon>
        </div>
      </div>
    </StyledRegionCard>
  );
};

export default RegionCard;
