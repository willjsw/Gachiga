import styled from "styled-components";
import NewsSlider from "../../hooks/NewsSlider.js";


const Page_1_Container = styled.div`
background-color: #fafafa;
padding: 20vh 0vw;  
`
const Page_1_Title = styled.div`
padding-bottom: 5vh;
text-align:center;
justify-content:center;
color: black;
font-size:4vw;
font-weight: bold;
font-family: "Pretendard-Regular";

text-align:center;
`

const Page_4_SlickContainer = styled.div`

padding: 2vw 0;
    display: flex;
    margin-left: 13vw;
    margin-right: 11vw;
    margin-top: 3vh;
`

function TeamNews(){
    return(
        <Page_1_Container>
        <Page_1_Title>News</Page_1_Title>
      <Page_4_SlickContainer>
        <NewsSlider />
      </Page_4_SlickContainer>
          </Page_1_Container>
          
    );
}

export default TeamNews;

