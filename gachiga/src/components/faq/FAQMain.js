import styled from 'styled-components';
import FAQButton from './faq_button/FAQButton';
import ControlledAccordions from "../../hooks/acordian"

const MainContainer =styled.div`

background-color: #f3f3f3;
justify-content: space-between;
padding: 25vh 0;
@media screen and (max-width: 800px) {
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
justify-content: space-between;

padding-top: 30vh;
}
`
const ArcordianPositioner =styled.div`
margin-top: 10vh;
}
`

function FAQMain(){


    return(
        <MainContainer>
            <TextContainer>
                <MainText>자주 묻는 질문</MainText>
     
                <ButtonPositioner>
                        <FAQButton>가치가</FAQButton>
                        <FAQButton>먼저가</FAQButton>
                        <FAQButton>발품 매니저</FAQButton>
                        <FAQButton>기타</FAQButton>
                        <ArcordianPositioner>
                        <ControlledAccordions />
                        </ArcordianPositioner>
                        

                </ButtonPositioner>
            </TextContainer>
        </MainContainer>

    );
}

export default FAQMain;