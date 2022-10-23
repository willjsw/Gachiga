import styled from 'styled-components';

const Background = styled.div`
width: 100vw;
height: 110vh;
background-image: url("/img/main.png");
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
@media screen and (max-width: 800px) {
font-size:15px;
}
`
const ButtonPositioner =styled.div`
padding-left:13vw;
padding-top: 10vh;
@media screen and (max-width: 800px) {
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
@media screen and (max-width: 800px) {
padding:2vh 15vw;
}

`



function GachigaMain(){


    return(
        <Background>
            <MainText>가치가 서비스</MainText>
            <HomeSubText>고객 맞춤 집 구하기 동행 서비스</HomeSubText>
        </Background>

    );
}

export default GachigaMain;