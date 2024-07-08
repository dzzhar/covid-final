import Heading from "../ui/Heading";
import StyledSituationCard from "./SituationCard.styled";

const SituationCard = (props) => {
  // memakai props data dari components SituationSection
  const { data } = props;

  // untuk mengganti warna huruf sesuai dengan status
  const fontColor =
    data.status === "confirmed"
      ? "success"
      : data.status === "recovered"
      ? "primary"
      : data.status === "death"
      ? "danger"
      : "";

  // untuk kapital kata
  const capitalize = (str) => {
    if (typeof str !== "string") return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <StyledSituationCard>
      <div>
        <Heading fontSize="h3">{capitalize(data.status)}</Heading>
        <Heading fontSize="h1" color={fontColor}>
          {data.total.toLocaleString("id-ID")}
        </Heading>
      </div>
    </StyledSituationCard>
  );
};

export default SituationCard;
