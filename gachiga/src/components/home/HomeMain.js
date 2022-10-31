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
`
const MainText = styled.div`
color: white;
font-size:60px;
font-weight: bold;
padding-left: 13vw;
padding-top: 30vh;
font-family: "Pretendard-Medium";
text-align:left;
@media screen and (max-width: 768px) {
font-size:50px;
}
`
const ButtonPositioner =styled.div`
padding-left:13vw;
padding-top: 10vh;
@media screen and (max-width: 768px) {
padding-top: 40vh;
padding-left: 20vw;
}
`
const Button = styled.button`
background:#01417F;
color:#fff;
border:none;
border-radius: 5px;
font-family: "Pretendard-Medium";
text-align:center;
font-size:18px;
font-weight: bold;
padding:2vh 5vw;
cursor:pointer;
transition:400ms ease all;
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
padding:2vh 100px;
}

`

function HomeMain(){


    return(
        <Background>
            <MainText>내 집 구하기,<br/>전문가와 현명하게!</MainText>
                <ButtonPositioner>
                    <a href="https://smartstore.naver.com/gachigahome" target="_blank"rel="noopener noreferrer">
                        <Button>서비스 예약하기</Button>
                    </a>
                </ButtonPositioner>
        </Background>

    );
}

export default HomeMain;