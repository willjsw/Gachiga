import styled from "styled-components";

const Container = styled.div`
background-color: #fff;
display:flex;
justify-content: space-between;
padding: 15vh 0;
@media screen and (max-width: 800px) {
    display:block;
    padding: 5vh 0;
    }
`
const TextContainer = styled.div`
`
const Title = styled.div`
margin-left: 13vw;
color: #01417F;
font-size: 1.5vw;
font-weight: bold;
font-family: "Pretendard-Regular"
text-align:center;
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
font-family: "Pretendard-Regular";
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
font-family: "Pretendard-Regular";
text-align:left;
line-height: 1.7em; 
@media screen and (max-width: 768px) {
    font-size: 4vw;
     } 
`
const Image =styled.div`
margin-right:11vw;
width: 47%;
height: 33vw;
background-image: url("/img/point3.png");
background-position: center center;
background-size: cover;
overflow-x: hidden;
box-shadow: -0.5vw 0.5vw 1vw gray;
@media screen and (max-width: 768px) {
    margin-top: 40px;
    margin-left: 13vw;
    width: 80%;
    height: 26vh;
    } 
`



function MeonjeogaPoint3(){
    return(
        <Container>
        <TextContainer>
            <Title>Point 3</Title>
            <MainText>가치가 페이퍼</MainText>
            <SubText>먼 거리 이동하지 않고<br/>
페이퍼를 통해 생생한 현장을 경험해보세요
<br/><br/>발품 매니저가 확인한 매물 정보와<br/>
주변 지역의 인프라 정보를 정리한<br/>
고객 맞춤형 보고서 제공</SubText>
        </TextContainer>
        <Image />
    </Container>
    );
}

export default MeonjeogaPoint3;