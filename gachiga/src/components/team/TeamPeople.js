import styled from "styled-components";

const Page_1_Container = styled.div`
background-color:#01417F;
padding: 10vh 0vw;  

`
const Text_Container = styled.div`
itemt-alignt:center;
text-align:left;
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
padding-bottom: 10vh;
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

          <Text_Container>
          <SubText2>
            2022 DB-SNUbiz Global Start up Challenge 파이널 라운드 진출<br />
            제4기 SNU 해동주니어 스타트업 프로그램 참가 기업 선정<br />
            SC제일은행 청년제일 프로젝트 시즌 3 참가 프로젝트 선정<br />
            서울대학교 벤처경영기업가센터 주관 2022 이상한 아이디어 공모전 소셜벤처 부문 수상<br />
            2022년도 제15기 아이디어 사업화 발표대회 SHOW ME THE ITEM_신촌점 ‘우수선정자’ 선발

          </SubText2>
          </Text_Container>
          </Page_1_Container>
          
    );
}

export default TeamPeople;