import Footer from "../components/Footer/Footer";
import Navbar from "../components/NavigationBar/NavigationBar";
import Container from "../container";

const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <Navbar />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

export default Layout;
