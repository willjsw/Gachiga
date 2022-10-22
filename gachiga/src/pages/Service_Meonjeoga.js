import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import styled from 'styled-components';
import MeonjeogaMain from "../components/service/service-meonjeoga/MeonjeogaMain";
import MeonjeogaPoint1 from "../components/service/service-meonjeoga/MeonjeogaPoint1";
import MeonjeogaPoint2 from "../components/service/service-meonjeoga/MeonjeogaPoint2";
import MeonjeogaPoint3 from "../components/service/service-meonjeoga/MeonjeogaPoint3";
import MeonjeogaProgress from "../components/service/service-meonjeoga/MeonjeogaProgress";

const Container = styled.div`
  background-color: #f3f3f3;
`;
function Service_Meonjeoga() {
  return (
    <Container>
      <Header />
      <MeonjeogaMain />
      <MeonjeogaPoint1 />
      <MeonjeogaPoint2 />
      <MeonjeogaPoint3 />
      <MeonjeogaProgress />
      <Footer />
    </Container>
  );
}

export default Service_Meonjeoga;