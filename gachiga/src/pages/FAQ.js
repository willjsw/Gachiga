import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import styled from 'styled-components';
import FAQMain from "../components/faq/FAQMain";

const Container = styled.div`
  background-color: #f3f3f3;
`;

function Home() {
  return (
    <Container>
      <Header />
        <FAQMain />
      <Footer />
    </Container>
  );
}

export default Home;
