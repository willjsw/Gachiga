import styled from "styled-components";
import Br from "../../shared/Br";

const Container = styled.div`
background-color: #fff;
display:flex;
justify-content: space-between;
padding: 15vh 0; 
@media screen and (max-width: 768px) {
    display:block;
    padding: 10vh 0; 
    }
`
const TextContainer = styled.div`
`
const Title = styled.div`
margin-left: 13vw;
color: #01417F;
font-size: 1.5vw;
font-weight: bold;
font-family: "Pretendard-Regular","Apple SD Gothic Neo","sans-serif";
text-align:left;
@media screen and (max-width: 768px) {
    font-size: 5vw;
     } 
`
const MainText = styled.div`
margin-left: 13vw;
margin-top: 4vh;
color: #333d4b;
font-size: 3vw;
font-weight: bold;
font-family: "Pretendard-Regular","Apple SD Gothic Neo","sans-serif";
text-align:left;
@media screen and (max-width: 768px) {
    font-size: 9vw;
     } 
`
const SubText = styled.div`
margin-left: 13vw;
margin-top:4vh;
color: #757575;
font-size:1.3vw;
font-weight: bold;
font-family: "Pretendard-Regular","Apple SD Gothic Neo","sans-serif";
text-align:left;
line-height: 1.7em; 
@media screen and (max-width: 768px) {
    font-size: 4vw;
     } 
`
const Image =styled.div`
margin-right:11vw;
width: 37%;
height: 60vh;
background-image: url("/img/mpoint1.jpg");
background-position: center center;
background-size: cover;
overflow-x: hidden;
box-shadow: -0.5vw 0.5vw 1vw gray;
@media screen and (max-width: 768px) {
    margin-top: 5vh;
    margin-left: 13vw;
    width: 80%;
    height: 40vh;
    } 
`


function MeonjeogaPoint1(){
    return(
        <Container>
        <TextContainer>
            <Title>Point 1</Title>
            <MainText>발품 매니저의 <Br/>매물 확인</MainText>
            <SubText>거주 희망 사항 최우선 반영,<br/>직접 가보지 않아도<br/>믿고 맡길 수 있는 발품 팔기<br/>집안 곳곳의 요소를 체크하는 매니저</SubText>
        </TextContainer>
        <Image />
    </Container>
    );
}

export default MeonjeogaPoint1;