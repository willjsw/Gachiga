import styled from "styled-components";

const Page_1_Container = styled.div`
background-color: #fafafa;
padding: 15vh 0;

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
opacity: 1;
color: #757575;
font-size:2vw;
font-weight: bold;
font-family: "Pretendard-Regular";
text-align:left;
line-height: 1.7em;
padding-left: 2vw;
padding-top: 2.5vw;
`


const Image =styled.div`
margin 0 auto;
width: 11vw;
height: 11vw;
background-image: url(${(props) => props.imageUrl ||"/img/service_gachiga.png"});
background-position: center center;
background-size: cover;
`
const Container=styled.div`
justify-content: center;
item-align: center;

`
const GraphicContainer =styled.div`
display: flex;
item-align:center;
justify-content:center;
width: fit-content;
margin: 0 auto;
padding-top: 30px;
`
const Circle = styled.div`
margin-right: 40px;
width: 12vw;
height: 12vw;
line-height: 10vw;
overflow-x: hidden;

}@media screen and (max-width: 800px) {
    margin-top: 14vh;
    margin-left: 13vw;
    width: 18vw;
    height: 18vw;
    }
  
`

function GraphicCircle({imageUrl}){
  return(<Circle><Image imageUrl={imageUrl} /></Circle>
    )
  
  }

function TeamVision(){
    return(
        <Page_1_Container>
        <Page_1_Title>Vision</Page_1_Title>
        <Container>
        <GraphicContainer>
          <GraphicCircle imageUrl="/img/economic.png"/>
          <SubText class="sub">매물의 하자 발생 가능성<br/>최소화를 통한 경제적 피해 예방</SubText>
          </GraphicContainer>
          <GraphicContainer>
          <GraphicCircle imageUrl="/img/social.png"/>
          <SubText class="sub" >대학가의 불법건축물 등<br/>청년 세대 주거 환경 의식 개선</SubText>
          </GraphicContainer>
          <GraphicContainer>
          <GraphicCircle imageUrl="/img/environmental.png"/>
          <SubText id="sub" >경력단절여성 대상 일자리 창출<br/>자립준비청년의 홀로 서기 지원</SubText>
          </GraphicContainer>
          
          
        
        <GraphicContainer>
          
          
        </GraphicContainer>
          </Container>
          </Page_1_Container>
          
    );
}

export default TeamVision;