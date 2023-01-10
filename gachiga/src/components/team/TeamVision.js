import styled from "styled-components";

const Container = styled.div`
background-color: #fafafa;
padding-bottom: 15vh;
@media screen and (max-width: 768px) {
  padding-bottom: 10vh;
  }
`
const Title = styled.div`
margin: 0 auto;
padding-bottom: 4vw;
text-align:center;
justify-content:center;
color: black;
font-size:4vw;
font-weight: bold;
font-family: "Pretendard-Regular","Apple SD Gothic Neo","sans-serif";
text-align:center;
@media screen and (max-width: 768px) {
  font-size:12vw;
  }
`

const SubText = styled.div`
opacity: 1;
color: #757575;
font-size:2vw;
font-weight: bold;
font-family: "Pretendard-Regular","Apple SD Gothic Neo","sans-serif";
text-align:left;
line-height: 1.7em;
padding-left: 2vw;
padding-top: 2.5vw;
@media screen and (max-width: 768px) {
  font-size:4vw;
  padding-top:4vw;
  }
`


const ContentsContainer=styled.div`
justify-content: center;
item-align: center;
@media screen and (max-width: 768px) {
  padding-top: 30px;
  }
`
const GraphicContainer =styled.div`
display: flex;
item-align:center;
justify-content:center;
width: fit-content;
margin: 0 auto;
padding-top: 30px;
@media screen and (max-width: 768px) {
  padding-top: 10px;
  }
`
const Icon = styled.div`
margin-right: 40px;
width: 12vw;
height: 12vw;
line-height: 10vw;
overflow-x: hidden;

}@media screen and (max-width: 768px) {
    width: 24vw;
    height: 120px;
    }
  
`
const Image =styled.div`
margin 0 auto;
width: 11vw;
height: 11vw;
background-image: url(${(props) => props.imageUrl ||"/img/service_gachiga.png"});
background-position: center center;
background-size: cover;
}@media screen and (max-width: 768px) {
  width: 20vw;
  height: 20vw;
  }
`

function GraphicIcon({imageUrl}){
  return(<Icon><Image imageUrl={imageUrl} /></Icon>
    )
  
  }

function TeamVision(){
    return(
        <Container>
        <Title>Vision</Title>
        <ContentsContainer>
        <GraphicContainer>
          <GraphicIcon imageUrl="/img/economic.png"/>
          <SubText class="sub">매물의 하자 발생 가능성<br/>최소화를 통한 경제적 피해 예방</SubText>
          </GraphicContainer>
          <GraphicContainer>
          <GraphicIcon imageUrl="/img/social.png"/>
          <SubText class="sub" >대학가의 불법건축물 등<br/>청년 세대 주거 환경 의식 개선</SubText>
          </GraphicContainer>
          <GraphicContainer>
          <GraphicIcon imageUrl="/img/environmental.png"/>
          <SubText id="sub" >경력단절여성 대상 일자리 창출<br/>자립준비청년의 홀로 서기 지원</SubText>
          </GraphicContainer>
          </ContentsContainer>
          </Container>
          
    );
}

export default TeamVision;