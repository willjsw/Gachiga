import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import styled from 'styled-components';
import "https://code.jquery.com/jquery-3.3.1.min.js"

const Container = styled.div`
  background-color: #fafafa;
`;
const Background = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url("/img/main.png");
    background-position: center center;
    background-size: cover;
    overflow-x: hidden;
`;
const MainText = styled.div`
color: white;
font-size:5vw;
font-weight: bold;
position: absolute;
top: 250px;
left: 100px;
font-family: "Pretendard-Medium"
text-align:center;
opacity: 1;
transition: 2s;
`
const SubText = styled.div`
margin-top: 60px;
margin-bottom: 20px;
padding: 50px 10px;
text-align:center;
item-align:center;
justify-content:center;
color: black;
font-size:40px;
font-family: "Pretendard-Regular"
text-align:center;
`
const ButtonPositioner =styled.div`
position: absolute;
bottom: 20px;
left: 230px;
`
const Button_1 = styled.button`
    background:#01417F;
    color:#fff;
    font-weight: bold;
    border:none;
    border-radius: 12px;
    position:relative;
    height:60px;
    font-family: "Pretendard-Medium";
    text-align:center;
    font-size:1.6em;
    letter-spacing:0.1em;
    padding:0 2em;
    cursor:pointer;
    transition:800ms ease all;
    outline:none;
 
  
  &:hover{
    background:#fff;
    color:#01417F;
  }
  &:before,&:after{
    position:absolute;
    top:0;
    right:0;
    height:2px;
    width:0;
    background: #01417F;
    transition:400ms ease all;
  }
  &:after{
    right:inherit;
    top:inherit;
    left:0;
    bottom:0;
  }
  &:hover:before,&:hover:after{
    width:100%;
    transition:800ms ease all;
  }
`
const GraphicContainer =styled.div`
    item-align:center;
    justify-content:center;
    display: flex;
`
const GraphicCircle = styled.div`
    line-height: 350px;
    text-align: center;
    font-size: 90px;
    font-weight:bold;
    margin: 50px;
    width: 350px;
    height: 350px;
    background: #bcd1f9ff;
    color:#01417F;
    border-radius: 50%;
    box-shadow: 20px 20px 20px gray;
`
const StyledGraphicText = styled.div`
    position: absolute;
    color: #01417F;
    font-size:20px;
    font-family: "Pretendard-Regular";
    text-align:center;
    top: 1150px;
    left: ${(props) => props.left || "10px"};
`
function GraphicText({children,left}){
    return (
        <StyledGraphicText left={left}>
          {children}
        </StyledGraphicText>
      );
}
const Page_2_Container = styled.div`
    background-color: #fff;
    display:flex;
    margin-top:100px;
    margin-bottom:100px;
    padding: 200px 30px
`

const Page_2_Image =styled.img`
    margin-left:70px;
    width: 50%;
    height: 70vh;
    overflow-x: hidden;
    box-shadow: -20px 20px 20px gray;
`
const Page_2_TextContainer = styled.div`
`
const Page_2_Title = styled.div`
margin-left:100px;
margin-top: 20px;
color: #01417F;
font-size: 30px;
font-weight: bold;
font-family: "Pretendard-Regular"
text-align:center;
opacity: 1;
transition: 2s;
`

const Page_2_MainText = styled.div`
margin-left:100px;
margin-top:50px;
color: black;
font-size:50px;
font-weight: bold;
font-family: "Pretendard-Regular"
text-align:center;
opacity: 1;
transition: 2s;
`

const Page_2_SubText = styled.div`
margin-left:100px;
margin-top:50px;
color: #757575;
font-size:20px;
font-weight: bold;
font-family: "Pretendard-Regular"
text-align:center;
line-height :160%;
`
const Page_3_Container = styled.div`
    margin-top:100px;
    margin-bottom:100px;
    padding: 30px 30px
`

const Page_3_TextContainer = styled.div`
justify-content: center;
text-align:center;
`
const Page_3_Title = styled.div`
margin-top: 20px;
color: #01417F;
font-size:30px;
font-weight: bold;
font-family: "Pretendard-Regular"
text-align:center;
opacity: 1;
transition: 2s;
`
const Page_3_MainText = styled.div`
margin-top:50px;
color: black;
font-size:50px;
font-weight: bold;
font-family: "Pretendard-Regular"
text-align:center;
opacity: 1;
transition: 2s;
`

const Page_3_SubText = styled.div`

margin-top:50px;
color: #757575;
font-size:20px;
font-weight: bold;
font-family: "Pretendard-Regular"
text-align:center;
line-height :160%;
`

const Page_3_ImageContainer = styled.div`
display: flex;
    margin-top:100px;
    margin-bottom:100px;
    padding: 30px 30px
`
const Page_3_ImageSubContainer_1 = styled.div``
const Page_3_ImageSubContainer_2 = styled.div``
const Page_3_ImageSubContainer_3 = styled.div``

const Page_3_Image =styled.img`
    margin-left:70px;
    width: 90%;
    height: 100vh;
    overflow-x: hidden;
`


function Home() {

  return (
    <Container>
      <Header />
      <Background>
      <MainText>내 집 구하기,<br/>전문가와 현명하게!</MainText>
      <ButtonPositioner>
        <a href="https://smartstore.naver.com/gachigahome/qna?cp=1">
        <Button_1>예약하기</Button_1>
        </a>
        </ButtonPositioner>
      </Background>
      <SubText>7월 13일부터 13명의 청년들이 가치가를 선택했습니다.</SubText>
      <GraphicContainer>
        <GraphicText left="245px">서비스 만족도</GraphicText>
        <GraphicCircle>97%</GraphicCircle>
        <GraphicText left="685px">서비스 추천 의향</GraphicText>
        <GraphicCircle>95%</GraphicCircle>
        <GraphicText left="1155px">재이용 의향</GraphicText>
        <GraphicCircle>95%</GraphicCircle>
        </GraphicContainer>
        <Page_2_Container>
            <Page_2_TextContainer>
                <Page_2_Title>발품 매니저</Page_2_Title>
                <Page_2_MainText>집 구하기에도<br/>전문가가 있다는 사실,<br/>알고 계셨나요?</Page_2_MainText>
                <Page_2_SubText>풍부한 매물 확인 경험<br/>중개보조원 직무교육<br/>가치가의 서비스 교육을 모두 이수한 발품 매니저</Page_2_SubText>
            </Page_2_TextContainer>
            <Page_2_Image src={
            process.env.PUBLIC_URL + '/img/page2.jpg'
            } alt="page2_image"/>
        </Page_2_Container>
        <Page_3_Container>
            <Page_3_TextContainer>
                <Page_3_Title>가치가 페이퍼</Page_3_Title>
                <Page_3_MainText>나만을 위한 페이퍼</Page_3_MainText>
                <Page_3_SubText>60여개의 매물 확인 항목, 직접 촬영한 사진<br/>매물 현장을 생생하게 전달합니다.</Page_3_SubText>
            </Page_3_TextContainer>
            <Page_3_ImageContainer>
                <Page_3_ImageSubContainer_1>
                    <Page_3_Image src={
            process.env.PUBLIC_URL + '/img/page3_1_1.jpg'
            } alt="page3_1_1_image"/>
                </Page_3_ImageSubContainer_1>
                <Page_3_ImageSubContainer_2>

                </Page_3_ImageSubContainer_2>
                <Page_3_ImageSubContainer_3>

                </Page_3_ImageSubContainer_3>
            </Page_3_ImageContainer>
        </Page_3_Container>
        
      
      <Footer />
    </Container>
    
  );
}

export default Home;
