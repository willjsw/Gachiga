import styled from "styled-components";

const Page_1_Container = styled.div`
background-color: #fafafa;
padding: 20vh 0vw;  
`
const Page_1_Title = styled.div`
padding-bottom: 17vh;
text-align:center;
justify-content:center;
color: black;
font-size:3vw;
font-weight: bold;
font-family: "Pretendard-Regular";

text-align:center;
`

function MeonjeogaProgress(){
    return(
        <Page_1_Container>
            <Page_1_Title>먼저가 서비스는 이렇게 진행됩니다!</Page_1_Title>
        </Page_1_Container>
          
    );
}

export default MeonjeogaProgress;