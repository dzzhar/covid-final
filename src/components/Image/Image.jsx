import StyledImage from "./Image.styled";

const Image = (props) => {
  const { url } = props;

  return (
    <StyledImage>
      <img src={url} alt="Ilustrasi" />
    </StyledImage>
  );
};

export default Image;
