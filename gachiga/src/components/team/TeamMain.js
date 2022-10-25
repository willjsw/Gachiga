import styled from 'styled-components';

const MainContainer =styled.div`
display: flex;
background-color: #f3f3f3;
justify-content: space-between;
padding: 25vh 0;
@media screen and (max-width: 800px) {
    display:block;
    }
`
const MainImage = styled.div`
margin-right:11vw;
margin-top: 2vw;
width: 47%;
height: 25vw;
background-image: url("/img/logo.png");
background-position: center center;
background-size: cover;
overflow-x: hidden;
@media screen and (max-width: 800px) {
    width: 50%;
    height: 27vw;
    }
`;

const TextContainer = styled.div`
margin-left:13vw;

`
const MainText = styled.div`

color: black;
font-size:3.5vw;
font-weight: bold;

font-family: "Pretendard-Medium";
text-align:left;

animation: fadeInText 3s 2s ease-out forwards;
@media screen and (max-width: 800px) {
font-size:30px;
}
`
const HomeSubText = styled.div`
color: #333d4b;
font-size: 1.5vw;
font-weight: bold;
padding-top: 17vh;
font-family: "Pretendard-Medium";
text-align:left;
@media screen and (max-width: 800px) {
font-size:15px;
}
`

function TeamMain(){


    return(
        <MainContainer>
            <TextContainer><MainText>당신을 위한<br/><span style={{ color: "#01417F" }}>편안한</span><br/> 집 구하기</MainText>
        <HomeSubText>가치가는 국내유일 집 구하기 <br/>온디맨드 서비스 O2O 플랫폼입니다</HomeSubText></TextContainer>           
        <MainImage />
        </MainContainer>

    );
}

export default TeamMain;