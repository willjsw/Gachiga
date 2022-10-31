import styled from "styled-components";
import MeonjeogaTimeLine from "../../../hooks/MeonjeogaTimeLine";

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

function MeonjeogaProgress(){
    return(
        <Container>
            <Title>먼저가 서비스는 이렇게 진행됩니다!</Title>
            <MeonjeogaTimeLine />
        </Container>
          
    );
}

export default MeonjeogaProgress;