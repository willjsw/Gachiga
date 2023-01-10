import styled from "styled-components";
import NewsSlider from "../../hooks/NewsSlider.js";


const Container = styled.div`
background-color: #fafafa;
padding: 20vh 0vw;
@media screen and (max-width: 768px) {
  padding: 10vh 0;
  } 

`
const Title = styled.div`
padding-bottom: 5vh;
text-align:center;
justify-content:center;
color: black;
font-size:4vw;
font-weight: bold;
font-family: "Pretendard-Regular","Apple SD Gothic Neo","sans-serif";

text-align:center;
@media screen and (max-width: 768px) {
  font-size: 40px;
  } 

`

const SlickContainer = styled.div`

padding: 2vw 0;
    display: flex;
    margin-left: 13vw;
    margin-right: 11vw;
    margin-top: 3vh;
`

function TeamNews(){
    return(
        <Container>
        <Title>News</Title>
      <SlickContainer>
        <NewsSlider />
      </SlickContainer>
          </Container>
          
    );
}

export default TeamNews;

