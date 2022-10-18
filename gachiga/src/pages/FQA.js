import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import styled from 'styled-components';

const Container = styled.div`
  background-color: #f3f3f3;
`;
function Home() {
  return (
    <Container>
      <Header />
        <div>자주 묻는 질문</div>
      <Footer />
    </Container>
  );
}

export default Home;
