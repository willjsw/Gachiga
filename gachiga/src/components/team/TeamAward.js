import styled from "styled-components";
import TimeLine from "../../hooks/Timeline";

const Container = styled.div`
display: flex;
background-color:#fff;
padding: 10vh 0vw;  
justify-content: space-between;
@media screen and (max-width: 768px) {
    display: block;
    padding: 5vh 0vw; 
    } 
`

const Title = styled.div`
margin-left: 13vw;
margin-top:3vh;
padding-top: 6vw;
text-align:center;
justify-content:center;
color: #01417F;
font-size:3.5vw;
font-weight: bold;
font-family: "Pretendard-Regular";
text-align:center;
@media screen and (max-width: 768px) {
    font-size:40px;
    margin: 0 auto;
    } 
`
const TimeLineContainer = styled.div`
margin-right: 11vw;
display: flex;
background-color:#fff;
justify-contet: space-between;
@media screen and (max-width: 768px) {
    margin: 0 auto;
    display: block;
    } 
`


function TeamAward(){
    return(
        <Container>
          <Title>팀 수상 경력</Title>
          <TimeLineContainer>
          <TimeLine />
          </TimeLineContainer>
        </Container>
          
    );
}

export default TeamAward;