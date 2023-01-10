import styled from "styled-components";
import Br from "../../shared/Br";

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
@media screen and (max-width: 768px) {
    margin-left: 13vw;
    }
`
const Title = styled.div`
margin-right: 11vw;
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
margin-right: 11vw;
margin-top: 4vh;
color: #333d4b;
font-size: 3vw;
font-weight: bold;
font-family: "Pretendard-Regular","Apple SD Gothic Neo","sans-serif";
text-align:left;
@media screen and (max-width: 768px) {
    font-size: 8vw;
     } 
`
const SubText = styled.div`
margin-right: 11vw;
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
margin-left:13vw;
width: 37%;
height: 60vh;
background-image: url("/img/gpoint2.jpg");
background-position: center center;
background-size: cover;
overflow-x: hidden;
box-shadow:  -0.5vw 0.5vw 1vw gray;
@media screen and (max-width: 768px) {
display: none;
    } 
`

const Image_Media =styled.div`
display: none;

@media screen and (max-width: 768px) {
    display: block;
    margin-left:13vw;
    margin-top: 5vh;
    width: 80%;
    height: 40vh;
    background-image: url("/img/gpoint2.jpg");
    background-position: center center;
    background-size: cover;
    overflow-x: hidden;
    box-shadow:  -0.5vw 0.5vw 1vw gray;
    } 
`


function GachigaPoint2(){
    return(
        <Container>
            <Image />
            <TextContainer>
              <Title>Point 2</Title>
                <MainText>60여 개 항목의<br/>집 구하기 <Br/>체크리스트</MainText>
                <SubText>채광, 통풍, 수압, 배수, 방음 등<br/>혼자 확인하기 어려운 항목까지<br/>모두 꼼꼼히 확인</SubText>
             </TextContainer>
             <Image_Media />
        </Container>
    );
}

export default GachigaPoint2;