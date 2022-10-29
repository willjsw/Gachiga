import styled from "styled-components";
import { Link } from 'react-router-dom';

const Page_6_Container = styled.div`
background-color: #fff;
justify-content: space-between;
padding: 20vh 0;
@media screen and (max-width: 768px) {
    display:block;
    }
`
const Page_6_ServiceCardContainer = styled.div`
display:flex;
margin-top:8vh;
margin-left: 13vw;
margin-right:11vw;
justify-content: space-between;
`
const Page_6_ServiceCard = styled.div`
width: 35vw;
overflow-x: hidden;
box-shadow: 0.5vw 0.5vw 1vw gray;
`
const CardImage = styled.div`
background-image: url(${(props) => props.imageUrl ||"/img/service_gachiga.png"});
width: 35vw;
height:40vh;
background-position: center center;
background-size: cover;
overflow-x: hidden;
`
function Page_6_CardImage({imageUrl}){
    return(
        <CardImage imageUrl={imageUrl} />
    );

}
const Page_6_CardTitle = styled.div`
color: #333d4b;
font-family: "Pretendard-Regular";
font-size: 1.5vw;
font-weight: bold;
text-align:center;
padding: 1vw;
`
const Page_6_CardText = styled.div`
color: #333d4b;
font-family: "Pretendard-Regular";
font-size: 1.2vw;
font-weight: bold;
text-align:center;
padding-bottom: 1vw;
`

const Page_6_TextContainer = styled.div`
justify-content: center;
text-align:center;
`

const Page_6_MainText = styled.div`

color: #333d4b;
font-size:3vw;
font-weight: bold;
font-family: "Pretendard-Regular";
text-align:center;
opacity: 1;
transition: 2s;
`
const Page_6_SubText = styled.div`
margin-top: 5vh;

color: #01417F;
font-size: 1.5vw;
font-weight: bold;
font-family: "Pretendard-Regular"
text-align:center;
opacity: 1;
transition: all 1s ease;
`

function HomePage6(){
    return(
        <Page_6_Container>
        <Page_6_TextContainer>
            <Page_6_MainText>가치가의 서비스</Page_6_MainText>
            <Page_6_SubText>지금 바로 이용해보세요</Page_6_SubText>
        </Page_6_TextContainer>
        <Page_6_ServiceCardContainer>
        <Link to="/service/gachiga" style={{ textDecoration: 'none' }} className="link-line">
        <Page_6_ServiceCard>
            <Page_6_CardImage imageUrl="/img/service_gachiga.png" />
            <Page_6_CardTitle>가치가</Page_6_CardTitle>
            <Page_6_CardText>집 구하기 동행 서비스</Page_6_CardText>
        </Page_6_ServiceCard>
        </Link>
        <Link to="/service/meonjeoga" style={{ textDecoration: 'none' }} className="link-line">
        <Page_6_ServiceCard>
        <Page_6_CardImage imageUrl="/img/service_meonjeoga.png" />
        <Page_6_CardTitle>먼저가</Page_6_CardTitle>
            <Page_6_CardText>매물 사전 점검 서비스</Page_6_CardText>
        </Page_6_ServiceCard >
        </Link>
        </Page_6_ServiceCardContainer>
    </Page_6_Container>
    );
}

export default HomePage6;