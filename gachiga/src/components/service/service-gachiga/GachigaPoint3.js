import styled from "styled-components";

const Container = styled.div`
background-color: #fff;
display:flex;
justify-content: space-between;
padding: 15vh 0;
@media screen and (max-width: 768px) {
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
    font-size: 20px;
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
    font-size: 40px;
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
    font-size: 20px;
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
    margin-top: 5vh;
    margin-left: 13vw;
    width: 80%;
    height: 40vh;
    } 
`


function GachigaPoint3(){
    return(
        <Container>
        <TextContainer>
            <Title>Point 3</Title>
            <MainText>가치가 페이퍼</MainText>
            <SubText>직접 확인한 매물 정보와<br/>주변 지역의 인프라 정보를 정리한<br/>고객 맞춤형 보고서 제공</SubText>
        </TextContainer>
        <Image />
    </Container>
    );
}

export default GachigaPoint3;