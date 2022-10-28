import styled from 'styled-components';

const Background = styled.div`
width: 100vw;
height: 110vh;
background-image: url("/img/main.png");
background-position: center center;
background-size: cover;
overflow-x: hidden;
@media screen and (max-width: 768px) {
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
@media screen and (max-width: 768px) {
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
@media screen and (max-width: 768px) {
font-size:15px;
}
`
const ButtonPositioner =styled.div`
padding-left:13vw;
padding-top: 10vh;
@media screen and (max-width: 768px) {
justify-content: center;
padding-left:30vw;
padding-top: 30vh;
}
`
const Button_1 = styled.button`
background:#01417F;
color:#fff;
border:none;
font-family: "Pretendard-Medium";
text-align:center;
font-size:18px;
font-weight: bold;
padding:2vh 5vw;
cursor:pointer;
transition:800ms ease all;
outline:none;

&:hover{

background:#fff;
color:#01417F;
}
&:before,&:after{
background: #01417F;
transition:400ms ease all;
}
&:after{
right:inherit;
top:inherit;
left:0;
bottom:0;
}
&:hover:before,&:hover:after{
width:100%;
transition:800ms ease all;
}
@media screen and (max-width: 768px) {
padding:2vh 15vw;
}

`

function HomeMain(){


    return(
        <Background>
            <MainText>내 집 구하기,<br/>전문가와 현명하게!</MainText>
            <HomeSubText>혼자 가기 불안한 발품 팔기,<br/>같이 가!</HomeSubText>
                <ButtonPositioner>
                    <a href="https://smartstore.naver.com/gachigahome" target="_blank"rel="noopener noreferrer">
                        <Button_1>가치가 예약하기</Button_1>
                     </a>
                </ButtonPositioner>
        </Background>

    );
}

export default HomeMain;