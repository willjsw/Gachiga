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
width: 37%;
height: 60vh;
background-image: url("/img/gpoint1.png");
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


function GachigaPoint1(){
    return(
        <Page_2_Container>
        <Page_2_TextContainer>
            <Page_2_Title>Point 1</Page_2_Title>
            <Page_2_MainText>발품 매니저의 동행</Page_2_MainText>
            <Page_2_SubText>부모의 마음으로 함께 매물 확인<br/>
            신속하게 집안 곳곳의 요소를 체크하고<br/>
            중개사와의 소통을 돕는 매니저<br/>
            </Page_2_SubText>
        </Page_2_TextContainer>
        <Page_2_Image />
    </Page_2_Container>
    );
}

export default GachigaPoint1;