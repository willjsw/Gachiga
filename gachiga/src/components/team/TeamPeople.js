import styled from "styled-components";
import TimeLine from "../../hooks/Timeline";

const Page_1_Container = styled.div`
background-color:#01417F;
padding: 15vh 0vw;  

`
const Title1 = styled.div`
margin-top:3vh;
padding-bottom: 5vh;
text-align:center;
justify-content:center;
color: #fff;
font-size:4vw;
font-weight: bold;
font-family: "Pretendard-Regular";

text-align:center;
`
const Title2 = styled.div`
margin-top:3vh;
text-align:center;
justify-content:center;
color: #fff;
font-size:2vw;
font-weight: bold;
font-family: "Pretendard-Regular";

text-align:center;
`
const SubText = styled.div`
margin-top: 3vw;
color: #cfcfcf;
font-size:1.6vw;
font-weight: bold;
font-family: "Pretendard-Regular";
text-align:center;
line-height: 1.7em; 
opacity: 1;
transition: 1s;
`
const People_Image =styled.div`
margin: 0 auto;
width: 30%;
height: 60vh;
background-image: url("/img/teampeople.jpeg");
background-position: center center;
background-size: cover;
overflow-x: hidden;

@media screen and (max-width: 768spx) {
    width: 80%;
    height: 40vh;
    } 
`

function TeamPeople(){
    return(
        <Page_1_Container>
        <Title1>People</Title1>
        <People_Image />
          <SubText>청년이 경험하는 집 구하기에의 어려움에 공감하는
            <br />서울대학교 학생들이 주거 경험의 시작을 바꿉니다.
          </SubText>

          </Page_1_Container>
          
    );
}

export default TeamPeople;