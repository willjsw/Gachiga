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
width: 37%;
height: 60vh;
background-image: url("/img/mpoint2.png");
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

function MeonjeogaPoint2(){
    return(
        <Page_3_Container>
            <Page_3_Image />
            <Page_3_TextContainer>
              <Page_3_Title>Point 2</Page_3_Title>
                <Page_3_MainText>60여개 항목의<br/>집 구하기 체크리스트</Page_3_MainText>
                <Page_3_SubText>채광, 통풍, 수압, 배수, 방음 등<br/>확인하기 어려운 항목까지<br/>모두 꼼꼼히 확인
                 </Page_3_SubText>
             </Page_3_TextContainer>
        
        </Page_3_Container>
    );
}

export default MeonjeogaPoint2;