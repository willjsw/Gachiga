import styled from "styled-components";

const Container =styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 0 1rem;
background: #fff;
padding: 3rem 0;
`

const Wrapper = styled.div`
padding: 2rem;
border-radius: 15px;
`

const TimelineUl = styled.ul`
list-style:none;
margin-top: 2rem;
border-radius: 12px;
position: relative;
`

const TimeLineli = styled.li`
    padding-bottom: 1.5rem;
    border-left: 1px solid#01417F;
    position: relative;
    padding-left: 20px;
    margin-left: 10px;
  }&:last-child {
    border: 0px;
    padding-bottom: 0;
  }&:before {
    content: "";
    width: 15px;
    height: 15px;
    background:#01417F;
    border: 1px solid #4e5ed3;
    border-radius: 50%;
    position: absolute;
    left: -9px;
    top: 0px;
  }
`
const TimeLineContent = styled.p`
color: #01417F;
font-family: "Pretendard-Medium";
font-size: 1.3vw;
line-height: 1.5;
margin-top: 0.4rem;
`




function TimeLine(){
    return(
<Container>
  <Wrapper>
    <TimelineUl>
      <TimeLineli>
        <TimeLineContent>2022 DB-SNUbiz Global Start up Challenge 파이널 라운드 진출</TimeLineContent>
      </TimeLineli>
      <TimeLineli>
        <TimeLineContent>제4기 SNU 해동주니어 스타트업 프로그램 참가 기업 선정</TimeLineContent>
      </TimeLineli>
      <TimeLineli>
        <TimeLineContent>SC제일은행 청년제일 프로젝트 시즌 3 참가 프로젝트 선정</TimeLineContent>
      </TimeLineli>
      <TimeLineli>
        <TimeLineContent>서울대학교 벤처경영기업가센터 주관 2022 이상한 아이디어 공모전 소셜벤처 부문 수상</TimeLineContent>
      </TimeLineli>
      <TimeLineli>
        <TimeLineContent>2022년도 제15기 아이디어 사업화 발표대회 SHOW ME THE ITEM_신촌점 ‘우수선정자’ 선발</TimeLineContent>
      </TimeLineli>
    </TimelineUl>
  </Wrapper>
</Container>
    );
}

export default TimeLine;

