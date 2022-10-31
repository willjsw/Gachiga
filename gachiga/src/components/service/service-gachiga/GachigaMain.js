import styled from 'styled-components';

const Background = styled.div`
width: 100vw;
height: 110vh;
background-image: url("/img/main.png");
background-position: center center;
background-size: cover;
overflow-x: hidden;
@media screen and (max-width: 768px) {
    background-position: -520px center;
    width: 100vw;
    height: 100vh;
    }
`;
const MainText = styled.div`
color: white;
font-size:5vw;
font-weight: bold;
padding-left: 13vw;
padding-top: 30vh;
font-family: "Pretendard-Medium";
text-align:left;
animation: fadeInText 3s 2s ease-out forwards;
@media screen and (max-width: 800px) {
font-size:40px;
}
`
const SubText = styled.div`
color: white;
font-size: 2vw;
font-weight: bold;
padding-top: 4vh;
padding-left: 13vw;
font-family: "Pretendard-Medium";
text-align:left;
@media screen and (max-width: 800px) {
font-size:20px;
}
`



function GachigaMain(){


    return(
        <Background>
            <MainText>가치가 서비스</MainText>
            <SubText>고객 맞춤 집 구하기 동행 서비스</SubText>
        </Background>

    );
}

export default GachigaMain;