import styled from "styled-components";
import GachigaTimeLine from "../../../hooks/GachigaTimeLine"

const Container = styled.div`
background-color: #fafafa;
padding: 15vh 0; 
justify-content: space-between;
`
const Title = styled.div`

text-align: center;
justify-content:center;
color: black;
font-size:3vw;
font-weight: bold;
font-family: "Pretendard-Regular";
@media screen and (max-width: 768px) {
    font-size: 25px;
    }

`

function GachigaProgress(){
    return(
        <Container>
            <Title>가치가 서비스는 이렇게 진행됩니다!</Title>
            <GachigaTimeLine />
        </Container>
        
    );
}

export default GachigaProgress;