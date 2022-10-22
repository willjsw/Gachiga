import styled from 'styled-components';

const TeamMission_Container = styled.div`
background-color: #fff;

justify-content: space-between;

@media screen and (max-width: 800px) {
    display:block;
    }
`
const Background = styled.div`
width: 100vw;
height: 100vh;
-webkit-filter: brightness(0.30);filter: brightness(0.45);
background-image: url("/img/mission.png");
background-position: center center;
background-size: cover;
overflow-x: hidden;
@media screen and (max-width: 800px) {
    width: 100vw;
    height: 110vh;
    }
`;
const MainText = styled.div`
position:absolute;
top: 70vw;
color: white;
font-size:4vw;
font-weight: bold;
padding-left: 13vw;
font-family: "Pretendard-Medium";
text-align:left;
animation: fadeInText 3s 2s ease-out forwards;
@media screen and (max-width: 800px) {
font-size:30px;
}
`
const SubText = styled.div`
position:absolute;
top:75vw;
color: white;
font-size: 2vw;
font-weight: bold;
padding-top: 4vh;
padding-left: 13vw;
font-family: "Pretendard-Medium";
text-align:left;
@media screen and (max-width: 800px) {
font-size:15px;
}
`


function TeamMission(){


    return(
        <TeamMission_Container>
        <Background>
        </Background>
        <MainText>Mission</MainText>
        <SubText>홀로 서기, 든든한 시작</SubText>
        </TeamMission_Container>
    );
}

export default TeamMission;