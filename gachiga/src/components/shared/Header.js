import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MenubarPositioner = styled.div`
  background-color: white;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 30px;
`;

const LogoImgPositioner = styled.img`
  margin-left:20px;
  width: 100x;
  height: 50px;
  cursor: pointer;
`;

const MenuElementPositioner = styled.div`
  width: fit-content;
  margin-right: 30px;
`;

const MenuName = styled.ul`
  transition:  all 0.3s ease;
  postion: relative;
  float:left;
  font-size: 15px;
  color: #01417F;
  border-bottom:3px solid white;
  font-weight: bold;
  padding:10px 20px;
  &:hover {

    border-bottom: 3px inset #01417F;
    cursor: pointer;
  }
`;
const MenuDropDown = styled.span`
cursor: pointer; 
right: 229px;
transition: all 0.5s ease;
align-items: center;
margin-top:13px;
position: absolute;
display: block;
`
const MenuItem = styled.li`
transition: all 0.2s ease;
color: #01417F;
background-color: white;
padding:10px 35.5px;
font-weight: bold;
list-style-type:none;
font-size: 15px;

&:hover {
  color: white;
  background-color: #01417F;
  cursor: pointer;
}
`

function NavItem(props) {
  const [open, setOpen] = useState(false);
  return (
    <Link to={props.link} style={{ textDecoration: 'none' }} className="link-line">
      <MenuName 
        onMouseEnter={() => setOpen(!open)}
        onMouseLeave={() => setOpen(false)}> 
        {props.menu}
        {open && props.children}      
      </MenuName>
    </Link>

  );
}


function Header() {

  return (
 
      <MenubarPositioner>
        <Link to="/">
          <LogoImgPositioner
           src={
            process.env.PUBLIC_URL + '/img/gachiga.png'
            } alt="로고"
          />
        </Link>

        <MenuElementPositioner>
          <NavItem link ="/team" menu="회사 소개" />
          <NavItem menu="서비스 소개">
                <MenuDropDown>
                <Link to="/service" style={{ textDecoration: 'none' }} className="link-line"><MenuItem>가치가</MenuItem></Link>
                <Link to="/service" style={{ textDecoration: 'none' }} className="link-line"><MenuItem>먼저가</MenuItem></Link>
  
                </MenuDropDown>
                  
            </NavItem>
            <NavItem link="/fqa" menu="자주 묻는 질문" />
            <NavItem link="/career" menu="채용" />
 
        </MenuElementPositioner>
      </MenubarPositioner>

  );
}

export default Header;