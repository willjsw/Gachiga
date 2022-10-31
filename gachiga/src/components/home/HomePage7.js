import styled from 'styled-components';
import ReviewSlider from "../../hooks/ReviewSlider.js"

const Page_4_Container = styled.div`
    background-color:#333d4b;
    padding: 10vh 0vw;  
`
const Page_4_TextContainer = styled.div`
justify-content: center;
text-align:center;
`
const Page_4_MainText = styled.div`
margin-left: 13vw;
margin-top:4vh;
color: #fff;
font-size:3vw;
font-weight: bold;
font-family: "Pretendard-Regular";
text-align: left;
@media screen and (max-width: 768px) {
    margin: 0 auto;
    text-align: center;
    font-size: 30px;
    } 
`
const Page_4_SlickContainer = styled.div`

padding: 2vw 0;
    display: flex;
    margin-left: 13vw;
    margin-right: 11vw;
    margin-top: 10vh;
`
function HomePage7(){
    return(
        <Page_4_Container>
            <Page_4_TextContainer>
                    <Page_4_MainText>믿을 수 있는 가치가의 서비스!</Page_4_MainText>
            </Page_4_TextContainer>
            <Page_4_SlickContainer>
            <ReviewSlider />
            </Page_4_SlickContainer>
        </Page_4_Container>
    );
}

export default HomePage7;
