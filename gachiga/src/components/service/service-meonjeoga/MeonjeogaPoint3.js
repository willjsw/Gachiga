import styled from "styled-components";

const Page_2_Container = styled.div`
background-color: #fff;
display:flex;
justify-content: space-between;
padding: 20vh 0;
@media screen and (max-width: 800px) {
    display:block;
    }
`
const Page_2_TextContainer = styled.div`
`
const Page_2_Title = styled.div`
margin-top: 5vh;
margin-left: 13vw;
color: #01417F;
font-size: 1.5vw;
font-weight: bold;
font-family: "Pretendard-Regular"
text-align:center;
opacity: 1;
transition: all 1s ease;
`
const Page_2_MainText = styled.div`
margin-left: 13vw;
margin-top: 4vh;
color: #333d4b;
font-size: 3vw;
font-weight: bold;
font-family: "Pretendard-Regular";
text-align:left;
opacity: 1;
transition: 1s;
`
const Page_2_SubText = styled.div`
margin-left: 13vw;
margin-top:4vh;
color: #757575;
font-size:1.3vw;
font-weight: bold;
font-family: "Pretendard-Regular";
text-align:left;
opacity: 1;
transition: 1s;
`
const Page_2_Image =styled.div`
margin-right:11vw;
width: 30%;
height: 90vh;
background-image: url("/img/homepage4_1_1.jpg");
background-position: center center;
background-size: cover;
overflow-x: hidden;
box-shadow: -1vw 1vw 2vw gray;
@media screen and (max-width: 800px) {
    margin-top: 14vh;
    margin-left: 13vw;
    width: 80%;
    height: 40vh;
    } 
`


function MeonjeogaPoint3(){
    return(
        <Page_2_Container>
        <Page_2_TextContainer>
            <Page_2_Title>Point 3</Page_2_Title>
            <Page_2_MainText>가치가 페이퍼</Page_2_MainText>
            <Page_2_SubText>먼 거리 이동하지 않고<br/>
페이퍼를 통해 생생한 현장을 경험해보세요
<br/><br/>발품 매니저가 확인한 매물 정보와<br/>
주변 지역의 인프라 정보를 정리한<br/>
고객 맞춤형 보고서 제공
저</Page_2_SubText>
        </Page_2_TextContainer>
        <Page_2_Image />
    </Page_2_Container>
    );
}

export default MeonjeogaPoint3;