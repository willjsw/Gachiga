import React from 'react';
import styled from 'styled-components';

const FooterPositioner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center ;
  padding: 60px 10px;
  padding=top: 30px;
  background-color: #434343;

  @media screen and (max-width: 800px) {
    padding: 60px 40px;
  }
`;

const LogoImgPositioner = styled.img`
  margin-right:15px;
  width: 100x;
  height: 50px;
  cursor: pointer;
`;

const CardPositioner = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  margin-bottom: 8px;
`;

const Anchor = styled.a`
  list-style: none;
  text-decoration-line: none;
`;

const Card = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 20px 10px;
  color: white;
  background-color: #434343;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
`;

const IconImgPositioner = styled.img`
margin-right: 10px;
  padding: 15px 10px;
  width: 30x;
  height: 30px;
  cursor: pointer;
`;

const BottomPositioner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
`;
const TextPositioner = styled.span`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const ContactPositioner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: left;
`;


const Contact = styled.div`
font-weight: 900;
  font-size: 14px;
  color: white;
  line-height: 14px;
  letter-spacing: -0.025em;
`;

const Copyright = styled.div`
  font-weight: 900;
  font-size: 14px;
  color: white;
  line-height: 14px;
  letter-spacing: -0.025em;
  margin-top: 10px;
  margin-bottom: 5px;
`;

function Footer() {
  return (
    <FooterPositioner>
      
      <CardPositioner>
      
        <Anchor href="https://www.skku.edu/skku/etc/private.do" target="_blank">
          <Card>블로그</Card>
        </Anchor>
        <Anchor href="https://www.skku.edu/skku/etc/netizen.do" target="_blank">
          <Card>이용약관</Card>
        </Anchor>
        <Anchor
          href="https://www.skku.edu/skku/etc/pop_email.do"
          target="_blank">
          <IconImgPositioner src={
            process.env.PUBLIC_URL + '/img/instagram_icon.png'
            } alt="로고" />
        </Anchor>
      </CardPositioner>
      
      <BottomPositioner>
      <LogoImgPositioner
           src={
            process.env.PUBLIC_URL + '/img/gachiga_white.png'
            } alt="로고"
          />
      <TextPositioner> 
 
        <Contact>EMAIL | gachiga.home@gmail.com</Contact>
    
        <Copyright>
          COPYRIGHT ⓒ GACHIGA ALL RIGHTS RESERVED
        </Copyright>
      </TextPositioner>
      </BottomPositioner>
    </FooterPositioner>
  );
}

export default Footer;
