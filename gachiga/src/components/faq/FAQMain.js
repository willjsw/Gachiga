import React, { useState } from 'react';
import styled from 'styled-components';
import ControlledAccordions from "../../hooks/accordian"

const MainContainer =styled.div`
background-color: #f3f3f3;
justify-content: space-between;
padding: 25vh 0;
@media screen and (max-width: 800px) {
    padding-top: 120px;
    padding-bottom: 30px;
    display:block;
    }
`

const TextContainer = styled.div`
margin-left:13vw;
margin-right:11vw;
`
const MainText = styled.div`
padding-bottom: 2vw;
border-bottom: 3px solid #333d4b;
color: black;
font-size:3vw;
font-weight: bold;

font-family: "Pretendard-Medium","Apple SD Gothic Neo","sans-serif";
text-align:left;

animation: fadeInText 3s 2s ease-out forwards;
@media screen and (max-width: 800px) {
font-size:30px;
}
`
const ButtonPositioner =styled.div`
display: flex;
padding-top: 10vh;
@media screen and (max-width: 768px) {
padding-top: 10vw;
display: block;
margin: 0 auto;
}
`

const Button = styled.button`
margin-right: 4vw;
background:#01417F;
color:#fff;
border-radius:5px;
border:none;
font-family: "Pretendard-Medium","Apple SD Gothic Neo","sans-serif";
text-align:center;
font-size:18px;
font-weight: bold;
padding:2vh 4vw;
cursor:pointer;
transition:200ms ease all;
outline:none;

&:hover{

background:#fff;
color:#01417F;
}
&:before,&:after{
background: #01417F;
transition:200ms ease all;
}
&:after{
right:inherit;
top:inherit;
left:0;
bottom:0;
}
&:hover:before,&:hover:after{
width:100%;
transition:400ms ease all;
}
@media screen and (max-width: 768px) {
padding:4vw 7vw;
font-size:4vw;
}

`

const AccordianPositioner =styled.div`
margin-top: 10vh;
}
`
const Media_Container =styled.div`
display: flex;
@media screen and (max-width: 768px) {
    display: block;
    padding: 10px;
    }

`


function FAQMain(){

    const [category, setCategory] = useState("category1");
    
    const category1 = () => {
        setCategory("category1");
        
    };
    const category2 = () => {
        setCategory("category2");
    };
    const category3 = () => {
        setCategory("category3");
    };
    const category4 = () => {
        setCategory("category4");
    };

    
    return(
        <MainContainer>
            <TextContainer>
                <MainText>자주 묻는 질문</MainText>
     
            <ButtonPositioner>
                    <Media_Container>
                        <Button onClick={category1}>가치가</Button>
                        <Button onClick={category2}>먼저가</Button>
                    </Media_Container>
                    <Media_Container>
                        <Button onClick={category3}>발품 매니저</Button>
                        <Button onClick={category4}>기타</Button>
                        </Media_Container>
             
                    </ButtonPositioner>
                        <AccordianPositioner>
                            <ControlledAccordions category={category}/>
                        </AccordianPositioner>
            
            </TextContainer>
        </MainContainer>

    );
}

export default FAQMain;