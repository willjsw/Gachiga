import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import styled from 'styled-components';

const Container = styled.div`
  background-color: #f3f3f3;
`;
function Service() {
  return (
    <Container>
      <Header />
      <div>서비스 소개 페이지</div>
      <Footer />
    </Container>
  );
}

export default Service;