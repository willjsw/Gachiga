import styled from "styled-components";

const Page_1_Container = styled.div`
background-color: #fafafa;
padding: 15vh 0; 
`
const Page_1_Title = styled.div`
padding-bottom: 15vh;
text-align:center;
justify-content:center;
color: black;
font-size:2.3vw;
font-family: "Pretendard-Regular","Apple SD Gothic Neo","sans-serif";
font-weight: bold;
line-height: 1.7em;
text-align:center;
@media screen and (max-width: 768px) {
  font-size:6vw;
  padding-bottom: 50px;
  }
`
const GraphicContainer =styled.div`
item-align:center;
justify-content:center;
display: flex;
width: fit-content;
margin: 0 auto;
`
const GraphicCircle = styled.div`
line-height: 4.5vw;
text-align: center;
margin-left: 2.785vw;
margin-right: 2.75vw;
width: 17vw;
height: 17vw;
background: #bcd1f9ff;
color:#01417F;
border-radius: 50%;
box-shadow: 0.5vw 0.5vw 1vw gray;
@media screen and (max-width: 768px) {
  width: 21vw;
  height: 21vw;
  }
`
const StyledGraphicText = styled.div`
color: #01417F;
font-size: ${(props) => props.fontsize || "20px"};
font-weight: ${(props) => props.fontweight || "600"};
font-family: "Pretendard-Regular","Apple SD Gothic Neo","sans-serif";
text-align:center;
margin-top:${(props) => props.margintop || "0"};
@media screen and (max-width: 768px) {
padding-top: 10px;
  }
`
function GraphicText({children,fontsize,fontweight,margintop}){
return (
    <StyledGraphicText fontsize={fontsize} fontweight={fontweight} margintop={margintop}>
      {children}
    </StyledGraphicText>
  );
}

function HomePage1(){
    return(
        <Page_1_Container>
        <Page_1_Title>22년 7월 13일부터 30명의 청년들이<br/>가치가를 선택했습니다.</Page_1_Title>
        <GraphicContainer>
          <GraphicCircle>
          <GraphicText fontsize="1.5vw" margintop="2.5vw">서비스 만족도</GraphicText>
          <GraphicText fontsize="5vw"fontweight="bold">97%</GraphicText>
          </GraphicCircle>
          <GraphicCircle>
              <GraphicText fontsize="1.5vw" margintop="2.5vw">서비스 추천 의향</GraphicText>
              <GraphicText fontsize="5vw"fontweight="bold">95%</GraphicText>
          </GraphicCircle>
          <GraphicCircle>
              <GraphicText fontsize="1.5vw" margintop="2.5vw">재이용 의향</GraphicText>
              <GraphicText fontsize="5vw"fontweight="bold">95%</GraphicText>
          </GraphicCircle>
          </GraphicContainer>
          </Page_1_Container>
    );
}

export default HomePage1;