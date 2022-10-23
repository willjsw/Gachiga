import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import styled from 'styled-components';
import GachigaMain from "../components/service/service-gachiga/GachigaMain";
import GachigaPoint1 from "../components/service/service-gachiga/GachigaPoint1";
import GachigaPoint2 from "../components/service/service-gachiga/GachigaPoint2";
import GachigaPoint3 from "../components/service/service-gachiga/GachigaPoint3";
import GachigaProgress from "../components/service/service-gachiga/GachigaProgress";

const Container = styled.div`
  background-color: #f3f3f3;
`;
function Service_Gachiga() {
  return (
    <Container>
      <Header />
      <GachigaMain />
      <GachigaPoint1 />
      <GachigaPoint2 />
      <GachigaPoint3 />
      <GachigaProgress />
      <Footer />
    </Container>
  );
}

export default Service_Gachiga;