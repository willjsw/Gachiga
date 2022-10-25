import styled from "styled-components";

const Page_1_Container = styled.div`
background-color: #fafafa;
padding: 20vh 0vw;  
`
const Page_1_Title = styled.div`
margin: 0 auto;
padding-bottom: 4vw;
text-align:center;
justify-content:center;
color: black;
font-size:4vw;
font-weight: bold;
font-family: "Pretendard-Regular";

text-align:center;
`

const SubText = styled.div`
display: none;
opacity: 1;
color: #757575;
font-size:1vw;
font-weight: bold;
font-family: "Pretendard-Regular";
text-align:left;
line-height: 5vh;

`


const Image =styled.div`
margin 0 auto;
width: 11vw;
height: 11vw;
background-image: url(${(props) => props.imageUrl ||"/img/service_gachiga.png"});
background-position: center center;
background-size: cover;
&:hover {
   opacity: 0.2;
   transition: 0.5s;
   filter: brightness(10%);
   cursor: pointer;
 }

`
const Container=styled.div`
justify-content: center;
item-align: center;
`
const ContentsContainer=styled.div`
justify-content: center;
item-align: center;
`
const GraphicContainer =styled.div`
item-align:center;
justify-content:center;
display: flex;
width: fit-content;
margin 0 auto;

`



const Circle = styled.div`
margin-left: 40px;
margin-right: 40px;
width: 18vw;
height: 18vw;
border-radius: 50%;
overflow-x: hidden;
box-shadow: 0vw 0vw 1vw gray; &:hover {
  color: #01417F;
  border-bottom: 3px inset #01417F;
  cursor: pointer;
}@media screen and (max-width: 800px) {
    margin-top: 14vh;
    margin-left: 13vw;
    width: 18vw;
    height: 18vw;
    }
    &:hover {
      background-color: e1e1e1;
     border: 1px solid black;
      opacity: 0.1;
      transition: 0.5s;
      filter: brightness(10%);
      cursor: pointer;
      
    }
    &:hover > #sub{
      display: block;
      font-size: 3vw;
    }
`

const StyledGraphicText = styled.div`
color: #01417F;
font-size: ${(props) => props.fontsize || "20px"};
font-weight: ${(props) => props.fontweight || "600"};
font-family: "Pretendard-Regular";
text-align:center;
margin: 0 auto;
`
function GraphicCircle({imageUrl,children,fontsize,fontweight}){
  return(<Circle>
     <Image imageUrl={imageUrl} />
    <ContentsContainer>
        <StyledGraphicText fontsize={fontsize} fontweight={fontweight}>
          {children}
        </StyledGraphicText>
    </ContentsContainer>
    </Circle>
    )
  
  }

function TeamVision(){
    return(
        <Page_1_Container>
        <Page_1_Title>Vision</Page_1_Title>
        <Container>
        
        <GraphicContainer>
          <GraphicCircle imageUrl="/img/economic.png" fontsize="30px" fontweight="bold">
          <SubText id="sub" >경력단절여성 대상 일자리 창출<br/><br/>자립준비청년의<br/>홀로 서기 지원</SubText>
        <SubText class="sub">매물의 하자 발생 가능성<br/>최소화를 통한 경제적 피해 예방</SubText>
        <SubText class="sub" >대학가의 불법건축물 등<br/>청년 세대 주거 환경 의식 개선</SubText>
            Economic<br/>Impact</GraphicCircle>
        </GraphicContainer>
        
        <GraphicContainer>
          <GraphicCircle imageUrl="/img/social.png" fontsize="30px" fontweight="bold" >Social<br/>Impact</GraphicCircle>
          <GraphicCircle imageUrl="/img/environmental.png" fontsize="30px" fontweight="bold">Environmental<br/>Impact</GraphicCircle>
        </GraphicContainer>
          </Container>
          </Page_1_Container>
          
    );
}

export default TeamVision;