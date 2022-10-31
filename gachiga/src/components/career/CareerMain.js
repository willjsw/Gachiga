import styled from 'styled-components';

const MainContainer =styled.div`
display: flex;
background-color: #f3f3f3;
justify-content: space-between;
padding: 20vh 0;
@media screen and (max-width: 768px) {
    display:block;
    padding: 15vh 0;
    }
`
const MainImage = styled.div`
margin-right:11vw;
width: 37%;
height: 60vh;
background-image: url("/img/career.png");
background-position: center center;
background-size: cover;
overflow-x: hidden;
box-shadow: -0.5vw 0.5vw 1vw gray;
@media screen and (max-width: 768px) {
    display: none;
    }
`

const MainImage_Media = styled.div`
display: none;
@media screen and (max-width: 768px) {
 
    display: block;
    margin: 0 auto;
width: 70%;
height: 50vh;
background-image: url("/img/career.png");
background-position: center center;
background-size: cover;
overflow-x: hidden;
box-shadow: -0.5vw 0.5vw 1vw gray;
    }
`

const TextContainer = styled.div`
margin-left:13vw;
@media screen and (max-width: 768px) {
    margin: 0 auto;
    }

`
const MainText = styled.div`
color: black;
font-size:3vw;
font-weight: bold;
font-family: "Pretendard-Medium";
text-align:left;
@media screen and (max-width: 768px) {
    margin-bottom: 50px;
    font-size:50px;
    text-align:center;
    }
`
const SubText = styled.div`
color: #333d4b;
font-size: 20px;
font-weight: bold;
padding-top: 10vh;
font-family: "Pretendard-Medium";
text-align:left;
line-height: 1.7em;
@media screen and (max-width: 768px) {
font-size:20px;
padding-top: 0vh;
padding-bottom: 5vh;
margin: 0 auto;
text-align:center;
}
`
const ButtonPositioner =styled.div`

padding-top: 10vh;
@media screen and (max-width: 768px) {
justify-content: center;
padding-left:13vw;
padding-top: 5vh;
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
padding:2vh 120px;
}

`


function CareerMain(){


    return(
        <MainContainer>
            <TextContainer>
                <MainText>가치가의 파트너,<br/><span style={{ color: "#01417F" }}>발품 매니저</span></MainText>
                
                <SubText>월 최소 20만원의 수입,<br/>원하는 시간에 서비스를 진행하는<br/>발품 매니저에 지원해보세요! </SubText>
                <MainImage_Media />
                <ButtonPositioner>
                    <a href="https://smartstore.naver.com/gachigahome" target="_blank"rel="noopener noreferrer">
                        <Button>30초만에 지원하기</Button>
                     </a>
                </ButtonPositioner>
            </TextContainer>
           
            
        <MainImage />
        </MainContainer>

    );
}

export default CareerMain;