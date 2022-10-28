import styled from "styled-components";

const Page_5_Container = styled.div`
background-color: #fafafa;
display:flex;
justify-content: space-between;
padding: 20vh 0;
@media screen and (max-width: 800px) {
    display:block;
    }
`
const Page_5_TextContainer = styled.div`
`
const Page_5_Title = styled.div`
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
const Page_5_MainText = styled.div`
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
const Page_5_SubText = styled.div`
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
const Page_5_Image =styled.div`
border-radius: 12px;
margin-right:11vw;
width: 37%;
height: 60vh;
background-image: url("/img/homepage5.jpg");
background-position: center center;
background-size: cover;
overflow-x: hidden;
box-shadow: -1vw 1vw 1vw #dfdff;
@media screen and (max-width: 800px) {
    margin-top: 14vh;
    margin-left: 13vw;
    width: 80%;
    height: 40vh;
    } 
`


function HomePage5(){
    return(
        <Page_5_Container>
        <Page_5_TextContainer>
            <Page_5_Title>가치가 법률 파트너</Page_5_Title>
            <Page_5_MainText>법률사무소 헌</Page_5_MainText>
            <Page_5_SubText>공인중개사 자격증을 소지한 전문 변호사가<br/>부동산 계약 전, 후 법적 분쟁 발생 시,<br/>신속한 해결을 도와드립니다.
</Page_5_SubText>
        </Page_5_TextContainer>
        <Page_5_Image />
    </Page_5_Container>
    );
}

export default HomePage5;