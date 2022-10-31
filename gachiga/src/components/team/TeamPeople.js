import styled from "styled-components";


const Container = styled.div`
background-color:#01417F;
padding: 15vh 0;  

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
  font-size: 40px;
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
  margin-top: 40px;
  font-size: 20px;
  } 
`
const Image =styled.div`
margin: 0 auto;
width: 30%;
height: 60vh;
background-image: url("/img/teampeople.jpeg");
background-position: center center;
background-size: cover;
overflow-x: hidden;

@media screen and (max-width: 768px) {
    width: 60%;
    height: 50vh;
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