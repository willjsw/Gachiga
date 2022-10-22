import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import styled from 'styled-components';
import CareerMain from "../components/career/CareerMain";
const Container = styled.div`
  background-color: #f3f3f3;
`;
function Career() {
  return (
    <Container>
      <Header />
      <CareerMain />
      <Footer />
    </Container>
  );
}

export default Career;