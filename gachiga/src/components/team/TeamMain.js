import styled from 'styled-components';

const MainContainer =styled.div`
display: flex;
background-color: #f3f3f3;
justify-content: space-between;
padding: 25vh 0;
@media screen and (max-width: 768px) {
    diplay: block;
    justify-content:center;
    padding: 20vh 0;
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
@media screen and (max-width: 768px) {
    display: none;
    width: 60%;
    height: 120px;
    }
`
const MainImage_Media  = styled.div`
display: none;

@media screen and (max-width: 768px) {
width: 47%;
height: 25vw;
background-image: url("/img/logo.png");
background-position: center center;
background-size: cover;
overflow-x: hidden;
    display: block;
    margin: 0 auto;
    width: 100%;
    height: 150px;
    }
`
const TextContainer = styled.div`
margin-left:13vw;
@media screen and (max-width: 800px) {
    margin: 0 auto;
    }
`
const MainText = styled.div`

color: black;
font-size:3.5vw;
font-weight: bold;
font-family: "Pretendard-Medium";
text-align:left;
animation: fadeInText 3s 2s ease-out forwards;
@media screen and (max-width: 768px) {
margin-bottom: 50px;
font-size:50px;
text-align:center;
}
`
const SubText = styled.div`
color: #333d4b;
font-size: 1.5vw;
font-weight: bold;
padding-top: 17vh;
font-family: "Pretendard-Medium";
text-align:left;
@media screen and (max-width: 768px) {
font-size:20px;
text-align:center;
margin: 0 auto;
padding-top: 10vh;
}
`

function TeamMain(){


    return(
        <MainContainer>
            <TextContainer>
                <MainText>당신을 위한<br/><span style={{ color: "#01417F" }}>편안한</span><br/> 집 구하기</MainText>
            <MainImage_Media />
        <SubText>가치가는 국내유일 집 구하기 <br/>온디맨드 서비스 O2O 플랫폼입니다</SubText>
        </TextContainer>           
        <MainImage />
        </MainContainer>

    );
}

export default TeamMain;