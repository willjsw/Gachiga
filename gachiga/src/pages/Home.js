import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import styled from 'styled-components';

import HomeMain from "../components/home/HomeMain";
import HomePage1 from "../components/home/HomePage1";
import HomePage2 from "../components/home/HomePage2";
import HomePage3 from "../components/home/HomePage3";
import HomePage4 from "../components/home/HomePage4";
import HomePage5 from "../components/home/HomePage5";
import HomePage6 from "../components/home/HomePage6";
import HomePage7 from "../components/home/HomePage7";


const Container = styled.div`
  background-color: #fafafa;
`

function Home() {
   
  return (
    <Container>
      <Header />
      <HomeMain />
      <HomePage1 />
      <HomePage2 />
      <HomePage3 />
      <HomePage4 />
      <HomePage5 />
      <HomePage6 />
      <HomePage7 />
      <Footer />
    </Container>
  );
}

export default Home;
