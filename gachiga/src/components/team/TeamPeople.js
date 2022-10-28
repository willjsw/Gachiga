import styled from "styled-components";
import TimeLine from "../../hooks/Timeline";

const Page_1_Container = styled.div`
background-color:#01417F;
padding: 10vh 0vw;  

`
const Text_Container = styled.div`
itemt-alignt:center;
text-align:center;
justify-content: center;
`
const Title1 = styled.div`
margin-top:3vh;
padding-bottom: 10vh;
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
const SubText1 = styled.div`
color: #cfcfcf;
font-size:1.3vw;
font-weight: bold;
font-family: "Pretendard-Regular";
text-align:center;
opacity: 1;
transition: 1s;
`
const SubText2 = styled.span`
color: #cfcfcf;
font-size:1vw;
font-weight: bold;
font-family: "Pretendard-Regular";
text-align:center;
opacity: 1;
transition: 1s;
`


function TeamPeople(){
    return(
        <Page_1_Container>
        <Title1>People</Title1>
          <SubText1>청년이 경험하는 집 구하기에의 어려움에 공감하는
            <br />서울대학교 학생들이 주거 경험의 시작을 바꿉니다.
          </SubText1>
          <br />
          <br /><br />
          <Title2>팀 수상 경력</Title2>
            <TimeLine></TimeLine>
          </Page_1_Container>
          
    );
}

export default TeamPeople;