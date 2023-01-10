import styled from "styled-components";

const Page_3_Container = styled.div`
background-color: #fff;
display:flex;
justify-content: space-between;
padding: 15vh 0; 
@media screen and (max-width: 768px) {
    display:block;
    padding: 7.5vh 0; 
    }
`
const Page_3_TextContainer = styled.div`
@media screen and (max-width: 768px) {
    margin-left: 13vw;
    }
`
const Page_3_Title = styled.div`

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
const Page_3_MainText = styled.div`
margin-top: 4vh;
margin-right: 11vw;
color: #333d4b;
font-size: 3vw;
font-weight: bold;
font-family: "Pretendard-Regular","Apple SD Gothic Neo","sans-serif";
text-align:left;
@media screen and (max-width: 768px) {
    font-size: 9vw;
    } 
`
const Page_3_SubText = styled.div`
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
const Page_3_Image =styled.div`
margin-left:13vw;
width: 47%;
height: 60vh;
background-image: url("/img/homepage3.jpg");
background-position: center center;
background-size: cover;
overflow-x: hidden;
box-shadow: -0.5vw 0.5vw 1vw gray;
@media screen and (max-width: 768px) {
display: none;
    } 
`

const Page_3_Image_media =styled.div`
display: none;

@media screen and (max-width: 768px) {
    display: block;
    margin-left:13vw;
width: 47%;
height: 60vh;
background-image: url("/img/homepage3.jpg");
background-position: center center;
background-size: cover;
overflow-x: hidden;
box-shadow: -0.5vw 0.5vw 1vw gray;
    margin-top: 4vh;
    margin-left: 13vw;
    width: 80%;
    height: 40vh;
    } 
`

function HomePage3(){
    return(
        <Page_3_Container>
            <Page_3_Image />
            <Page_3_TextContainer>
              <Page_3_Title>세상에서 가장 저렴한 보험</Page_3_Title>
                <Page_3_MainText>합리적인 가격</Page_3_MainText>
                <Page_3_SubText>매물 하자로 인한 손실 예방,<br/>교통비, 시간 등 발품 팔기 비용 절약<br/><br/>
                    누구나 부담없이 이용할 수 있는<br/>합리적인 가격의 서비스
                 </Page_3_SubText>
             </Page_3_TextContainer>
             <Page_3_Image_media />
        
        </Page_3_Container>
    );
}

export default HomePage3;