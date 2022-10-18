import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import styled from 'styled-components';

const Container = styled.div`
  background-color: #f3f3f3;
`;
function Team() {
  return (
    <Container>
      <Header />
      <div>회사 소개 페이지</div>
      <Footer />
    </Container>
  );
}

export default Team;