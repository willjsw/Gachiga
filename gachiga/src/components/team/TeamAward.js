import styled from "styled-components";
import TimeLine from "../../hooks/Timeline";

const Container = styled.div`
display: flex;
background-color:#fff;
padding: 10vh 0vw;  
justify-content: space-between;
`

const Title = styled.div`
margin-left: 13vw;
margin-top:3vh;
padding-top: 6vw;
text-align:center;
justify-content:center;
color: #01417F;
font-size:4vw;
font-weight: bold;
font-family: "Pretendard-Regular";

text-align:center;
`
const TimeLineContainer = styled.div`
margin-right: 11vw;
display: flex;
background-color:#fff;
justify-contet: space-between;
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