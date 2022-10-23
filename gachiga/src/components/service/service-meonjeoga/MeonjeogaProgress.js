import styled from "styled-components";
import MeonjeogaTimeLine from "../../../hooks/MeonjeogaTimeLine";

const Page_1_Container = styled.div`
background-color: #fafafa;
padding: 20vh 0vw; 
justify-content: space-between;
`
const Page_1_Title = styled.div`

text-align: center;
justify-content:center;
color: black;
font-size:3vw;
font-weight: bold;
font-family: "Pretendard-Regular";

`

function MeonjeogaProgress(){
    return(
        <Page_1_Container>
            <Page_1_Title>먼저가 서비스는 이렇게 진행됩니다!</Page_1_Title>
            <MeonjeogaTimeLine />
        </Page_1_Container>
          
    );
}

export default MeonjeogaProgress;