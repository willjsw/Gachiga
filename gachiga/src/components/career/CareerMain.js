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
width: 37%;
height: 60vh;
background-image: url("/img/career.png");
background-position: center center;
background-size: cover;
overflow-x: hidden;
@media screen and (max-width: 800px) {
    width: 47%;
    height: 26vw;
    }
`;

const TextContainer = styled.div`
margin-left:13vw;

`
const MainText = styled.div`

color: black;
font-size:3vw;
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
font-size: 20px;
font-weight: bold;
padding-top: 12vh;
font-family: "Pretendard-Medium";
text-align:left;
@media screen and (max-width: 800px) {
font-size:15px;
}
`
const ButtonPositioner =styled.div`

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


function CareerMain(){


    return(
        <MainContainer>
            <TextContainer>
                <MainText>가치가의 파트너,<br/><span style={{ color: "#01417F" }}>발품 매니저</span></MainText>
                <HomeSubText>월 최소 20만원의 수입,<br/>원하는 시간에 서비스를 진행하는<br/>발품 매니저에 지원해보세요! </HomeSubText>
                <ButtonPositioner>
                    <a href="https://smartstore.naver.com/gachigahome" target="_blank"rel="noopener noreferrer">
                        <Button_1>30초만에 지원하기</Button_1>
                     </a>
                </ButtonPositioner>
            </TextContainer>
           
            
        <MainImage>
            

        </MainImage>
        </MainContainer>

    );
}

export default CareerMain;