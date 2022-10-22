import styled from "styled-components";

const Page_1_Container = styled.div`
background-color: #fafafa;
padding: 20vh 0vw;  
`
const Page_1_Title = styled.div`
padding-bottom: 17vh;
text-align:center;
justify-content:center;
color: black;
font-size:2.5vw;
font-family: "Pretendard-Regular";
font-weight: bold;
text-align:center;
`
const GraphicContainer =styled.div`
item-align:center;
justify-content:center;
display: flex;
width: fit-content;
margin-left: 14.725vw;
margin-right: 21.275vw;
`
const GraphicCircle = styled.div`
border: 1vw solid #01417F;
line-height: 4.5vw;
text-align: center;
margin-right: 5.5vw;
width: 17vw;
height: 17vw;
background: white;
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

function HomePage1(){
    return(
        <Page_1_Container>
        <Page_1_Title>7월 13일부터 13명의 청년들이 가치가를 선택했습니다.</Page_1_Title>
        <GraphicContainer>
          <GraphicCircle>
          <GraphicText fontsize="1.3vw" margintop="2.5vw">서비스 만족도</GraphicText>
          <GraphicText fontsize="6vw"fontweight="bold">97%</GraphicText>
          </GraphicCircle>
          <GraphicCircle>
              <GraphicText fontsize="1.3vw" margintop="2.5vw">서비스 추천 의향</GraphicText>
              <GraphicText fontsize="6vw"fontweight="bold">95%</GraphicText>
          </GraphicCircle>
          <GraphicCircle>
              <GraphicText fontsize="1.3vw" margintop="2.5vw">재이용 의향</GraphicText>
              <GraphicText fontsize="6vw"fontweight="bold">95%</GraphicText>
          </GraphicCircle>
          </GraphicContainer>
          </Page_1_Container>
    );
}

export default HomePage1;