import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";
import styled from 'styled-components';
import "https://code.jquery.com/jquery-3.3.1.min.js"

const Container = styled.div`
  background-color: #fafafa;
`;
const Background = styled.div`
    width: 100vw;
    height: 110vh;
    background-image: url("/img/main.png");
    background-position: center center;
    background-size: cover;
    overflow-x: hidden;
    @media screen and (max-width: 800px) {
        width: 100vw;
        height: 110vh;
        }
`;
const MainText = styled.div`
color: white;
font-size:60px;
font-weight: bold;
padding-left: 13vw;
padding-top: 30vh;
font-family: "Pretendard-Medium";
text-align:left;
@media screen and (max-width: 800px) {
    font-size:30px;
    }
`
const HomeSubText = styled.div`
color: white;
font-size: 20px;
font-weight: bold;
padding-top: 4vh;
padding-left: 13vw;
font-family: "Pretendard-Medium";
text-align:left;
@media screen and (max-width: 800px) {
    font-size:15px;
    }
`

const ButtonPositioner =styled.div`
   padding-left:13vw;
   padding-top: 10vh;
   @media screen and (max-width: 800px) {
    justify-content: center;
    padding-left:30vw;
    padding-top: 30vh;
    }
`
const Button_1 = styled.button`
    background:#01417F;
    color:#fff;
    border:none;
    font-family: "Pretendard-Medium";
    text-align:center;
    font-size:18px;
    font-weight: bold;
    padding:2vh 5vw;
    cursor:pointer;
    transition:800ms ease all;
    outline:none;
  
  &:hover{
    
    background:#fff;
    color:#01417F;
  }
  &:before,&:after{
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
const Page_1_Container = styled.div`
    background-color: #fafafa;
    padding: 20vh 0vw;  
`
const Page_1_Title = styled.div`
    padding-bottom: 20vh;
    text-align:center;
    justify-content:center;
    color: black;
    font-size:2.5vw;
    font-family: "Pretendard-Regular"
    text-align:center;
`
const GraphicContainer =styled.div`
    item-align:center;
    justify-content:center;
    display: flex;
    width: fit-content;
    margin-left: 13vw;
    margin-right: 13vw;
`
const GraphicCircle = styled.div`
    line-height: 5vw;
    text-align: center;
    margin-right: 5.5vw;
    width: 21vw;
    height: 21vw;
    background: #bcd1f9ff;
    color:#01417F;
    border-radius: 50%;
    box-shadow: 20px 20px 40px gray;
`
const StyledGraphicText = styled.div`
    color: #01417F;
    font-size: ${(props) => props.fontsize || "20px"};
    font-weight: ${(props) => props.fontweight || "600"};
    font-family: "Pretendard-Regular";
    text-align:center;
    margin-top:${(props) => props.margintop || "0"};
    
`
function GraphicText({children,fontsize,fontweight,margintop}){
    return (
        <StyledGraphicText fontsize={fontsize} fontweight={fontweight} margintop={margintop}>
          {children}
        </StyledGraphicText>
      );
}
const Page_2_Container = styled.div`
    background-color: #fff;
    display:flex;
    padding: 20vh 0;
`
const Page_2_ImageContainer = styled.div`

`
const Page_2_Image =styled.img`
    margin-right:11vw;
    width:50vw;
    object-fit: cover
    overflow-x: hidden;
    box-shadow: -20px 20px 40px gray;
`
const Page_2_TextContainer = styled.div`

`

const Page_2_Title = styled.div`
margin-left: 13vw;
color: #01417F;
font-size: 18px;
font-weight: bold;
font-family: "Pretendard-Regular"
text-align:center;
opacity: 1;
transition: 2s;
`

const Page_2_MainText = styled.div`
margin-left: 13vw;

color: black;
font-size: 40px;
font-weight: bold;
font-family: "Pretendard-Regular"
text-align:center;
opacity: 1;
transition: 2s;
`

const Page_2_SubText = styled.div`
margin-left:200px;
margin-top:50px;
color: #757575;
font-size:20px;
font-weight: bold;
font-family: "Pretendard-Regular"
text-align:center;
line-height :160%;
`
const Page_3_Container = styled.div`
    padding: 20vh 0vw;  
`
const Page_3_TextContainer = styled.div`
justify-content: center;
text-align:center;
`
const Page_3_Title = styled.div`
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
    margin-left:200px;
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
      <HomeSubText>혼자 가기 불안한 발품 팔기,<br/>같이 가!</HomeSubText>
            <ButtonPositioner>
                <a href="https://smartstore.naver.com/gachigahome/qna?cp=1">
                    <Button_1>가치가 예약하기</Button_1>
                </a>
            </ButtonPositioner>
      </Background>

      <Page_1_Container>
      <Page_1_Title>7월 13일부터 13명의 청년들이 가치가를 선택했습니다.</Page_1_Title>
      <GraphicContainer>
        
        <GraphicCircle>
        <GraphicText fontsize="1.3vw" margintop="2.5vw">서비스 만족도</GraphicText>
        <GraphicText fontsize="7vw"fontweight="bold">97%</GraphicText>
        </GraphicCircle>
        <GraphicCircle>
            <GraphicText fontsize="1.3vw" margintop="2.5vw">서비스 추천 의향</GraphicText>
            <GraphicText fontsize="7vw"fontweight="bold">95%</GraphicText>
        </GraphicCircle>
        <GraphicCircle>
            <GraphicText fontsize="1.3vw" margintop="2.5vw">재이용 의향</GraphicText>
            <GraphicText fontsize="7vw"fontweight="bold">95%</GraphicText>
        </GraphicCircle>
        </GraphicContainer>
        </Page_1_Container>

        <Page_2_Container>
            <Page_2_TextContainer>
                <Page_2_Title>발품 매니저</Page_2_Title>
                <Page_2_MainText>집 구하기에도<br/>전문가가 있다는 사실,<br/>알고 계셨나요?</Page_2_MainText>
                <Page_2_SubText>풍부한 매물 확인 경험<br/>중개보조원 직무교육<br/>가치가의 서비스 교육을 모두 이수한 발품 매니저</Page_2_SubText>
            </Page_2_TextContainer>
            <Page_2_ImageContainer>
            <Page_2_Image src={
            process.env.PUBLIC_URL + '/img/page2.jpg'
            } alt="page2_image"/>
            </Page_2_ImageContainer>
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
