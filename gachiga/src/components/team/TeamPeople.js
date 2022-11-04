import styled from "styled-components";


const Container = styled.div`
background-color:#01417F;
padding: 15vh 0;
@media screen and (max-width: 768px) {
  
  }
`
const Title = styled.div`
margin-top:3vh;
padding-bottom: 5vh;
text-align:center;
justify-content:center;
color: #fff;
font-size:4vw;
font-weight: bold;
font-family: "Pretendard-Regular";
text-align:center;
@media screen and (max-width: 768px) {
  margin: 0 auto;
  padding-bottom: 20vw;
  font-size:12vw;
  } 
`

const SubText = styled.div`
margin-top: 3vw;
color: #cfcfcf;
font-size:1.6vw;
font-weight: bold;
font-family: "Pretendard-Regular";
text-align:center;
line-height: 1.7em; 

@media screen and (max-width: 768px) {
  margin-top: 20vw;
  padding-bottom: 20vw;
  font-size: 4vw;
  } 
`
const Image =styled.div`
margin: 0 auto;
width: 50%;
height: 60vh;
background-image: url("/img/people.jpg");
background-position: center center;
background-size: cover;
overflow-x: hidden;

@media screen and (max-width: 768px) {
    width: 80vw;
    height: 60vw;
    } 
`

function TeamPeople(){
    return(
        <Container>
        <Title>People</Title>
        <Image />
          <SubText>청년이 경험하는 집 구하기에의 어려움에 공감하는
            <br />서울대학교 학생들이 주거 경험의 시작을 바꿉니다.
          </SubText>

          </Container>
          
    );
}

export default TeamPeople;