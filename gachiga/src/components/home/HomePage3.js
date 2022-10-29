import styled from "styled-components";

const Page_3_Container = styled.div`
background-color: #fff;
display:flex;
justify-content: space-between;
padding: 15vh 0; 
@media screen and (max-width: 800px) {
    display:block;
    }
`
const Page_3_TextContainer = styled.div`
@media screen and (max-width: 800px) {
    margin-left: 13vw;
    }
`
const Page_3_Title = styled.div`
margin-top: 5vh;
margin-right: 11vw;
color: #01417F;
font-size: 1.5vw;
font-weight: bold;
font-family: "Pretendard-Regular"
text-align:left;
opacity: 1;
transition: all 1s ease;
`
const Page_3_MainText = styled.div`
margin-right: 11vw;
margin-top: 4vh;
color: #333d4b;
font-size: 3vw;
font-weight: bold;
font-family: "Pretendard-Regular";
text-align:left;
opacity: 1;
transition: 1s;
`
const Page_3_SubText = styled.div`
margin-right: 11vw;
margin-top:4vh;
color: #757575;
font-size:1.3vw;
font-weight: bold;
font-family: "Pretendard-Regular";
text-align:left;
line-height: 1.7em; 
opacity: 1;
transition: 1s;
`
const Page_3_Image =styled.div`
margin-left:13vw;
width: 47%;
height: 60vh;
background-image: url("/img/homepage3.png");
background-position: center center;
background-size: cover;
overflow-x: hidden;
box-shadow: -0.5vw 0.5vw 1vw gray;
@media screen and (max-width: 800px) {
    margin-top: 14vh;
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
                <Page_3_SubText>매물 하자로 인한 손실 예방,<br/>
                교통비, 시간 등 발품 팔기 비용 절약<br/><br/>
                 누구나 부담없이 이용할 수 있는<br/>
                합리적인 가격의 서비스
                 </Page_3_SubText>
             </Page_3_TextContainer>
        
        </Page_3_Container>
    );
}

export default HomePage3;