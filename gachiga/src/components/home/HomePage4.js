import styled from 'styled-components';
import PaperSlider from "../../hooks/PaperSlider.js"

const Page_4_Container = styled.div`
    background-color:#01417F;
    padding: 20vh 0vw;  
`
const Page_4_TextContainer = styled.div`
justify-content: center;
text-align:center;
`
const Page_4_Title = styled.div`
color: #fff;
font-size: 1.5vw;
font-weight: bold;
font-family: "Pretendard-Regular";
text-align:center;
opacity: 1;
transition: 2s;
`
const Page_4_MainText = styled.div`
margin-top:4vh;
color: #fff;
font-size:3vw;
font-weight: bold;
font-family: "Pretendard-Regular";
text-align:center;
opacity: 1;
transition: 2s;
`
const Page_4_SubText = styled.div`
margin-top:4vh;
color: #cfcfcf;
font-size:1.3vw;
font-weight: bold;
font-family: "Pretendard-Regular"
text-align:center;
line-height :160%;
`
const Page_4_SlickContainer = styled.div`
    display: flex;
    margin-left: 13vw;
    margin-right: 11vw;
    margin-top: 10vh;
`
function HomePage4(){
    return(
        <Page_4_Container>
            <Page_4_TextContainer>
                <Page_4_Title>가치가 페이퍼</Page_4_Title>
                    <Page_4_MainText>나만을 위한 페이퍼</Page_4_MainText>
                <Page_4_SubText>60여개의 매물 확인 항목, 직접 촬영한 사진<br/>매물 현장을 생생하게 전달합니다.</Page_4_SubText>
            </Page_4_TextContainer>
            <Page_4_SlickContainer>
            <PaperSlider />
            </Page_4_SlickContainer>
        </Page_4_Container>
    );
}

export default HomePage4;
