import styled from 'styled-components';

const Background = styled.div`
width: 100vw;
height: 110vh;
background-image: url("/img/meonjeogaMain.png");
background-position: center center;
background-size: cover;
overflow-x: hidden;
@media screen and (max-width: 800px) {
    width: 100vw;
    height: 110vh;
    }
`;
const MainText = styled.div`
color: white;
font-size:60px;
font-weight: bold;
padding-left: 13vw;
padding-top: 30vh;
font-family: "Pretendard-Medium";
text-align:left;
animation: fadeInText 3s 2s ease-out forwards;
@media screen and (max-width: 800px) {
font-size:30px;
}
`
const HomeSubText = styled.div`
color: white;
font-size: 20px;
font-weight: bold;
padding-top: 4vh;
padding-left: 13vw;
font-family: "Pretendard-Medium";
text-align:left;
line-height: 1.7em;
@media screen and (max-width: 768px) {
font-size:15px;
}
`


function MeonjeogaMain(){

    return(
        <Background>
            <MainText>먼저가 서비스</MainText>
            <HomeSubText>국내유일 매물 사전 점검 서비스</HomeSubText>
        </Background>

    );
}

export default MeonjeogaMain;