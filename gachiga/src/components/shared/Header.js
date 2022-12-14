import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineMenu } from "react-icons/ai";
import CloseIcon from '@mui/icons-material/Close';

const MenubarPositioner = styled.div`
position: fixed;
top: 0;
  background-color: white;
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  transition: all 0.5s ease-in-out;
  z-index: 100;

`
const MainContainer = styled.div`
position: fixed;
background-color: white;
top: 0;
background-color: white;
width: 100%;
height: 70px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

transition: all 0.5s ease-in-out;
z-index: 101;
`
const SubContainer = styled.div`
display: none;
position: fixed;
top: ${(props) => (!props.SideMenuOpen ? "-500px" : "70px")};
  background-color: white;
  width: 100%;
  height: 500px;
  display: none;
  align-items: center;
  justify-content: space-between;
  padding-top: 30px;
  transition: all 0.5s ease-in-out;
  z-index: 100;
  @media screen and (max-width: 800px) {
    display:block;
    }

`
const LogoImgPositioner = styled.img`
  margin-left: 13vw;
  width: 80x;
  height: 40px;
  cursor: pointer;
`
const MenuElementPositioner = styled.div`
  width: fit-content;
  margin-right: 11vw;
  @media screen and (max-width: 800px) {
    display: none;
    }
`

const MenuButton = styled.button`
width: fit-content;
margin-right: 11vw;
padding: 0.5em 1em;
text-align: center;
display: inline-block;
background-color: #fff;
border: none;
display: none;

&:hover {
  cursor: pointer;
}

@media screen and (max-width: 800px) {
  display: block;
  }
`
const MenuUl = styled.ul`
list-style:none; 
margin:0; 
padding:0;
`

const MenuName = styled.li`
  text-align:center; 
  display:inline-block;
  position:relative;
  width:${(props) => (props.width || "100px")};
  font-size: 15px;
  font-family: "Pretendard-Medium","Apple SD Gothic Neo","sans-serif";
  font-weight: bold;
  color: black;
  border-bottom:3px solid white;
  padding:10px 20px;
  transition:  all 0.3s ease;
  &:hover {
    color: #01417F;
    border-bottom: 3px inset #01417F;
    cursor: pointer;
  }
`
const MenuDropDown = styled.ul`
cursor: pointer; 
position:absolute;
top:42px; 
left:-29%;
transition: all 0.5s ease;


`
const MenuItem = styled.li`
display:inline-block;
text-align:center;
margin: 0 auto;
transition: all 0.2s ease;
color: black;
background-color: white;
width:100px; 
padding:10px 20px;
list-style-type:none;
font-size: 15px;
font-weight: bold;
font-family: "Pretendard-Medium","Apple SD Gothic Neo","sans-serif";

&:hover {
  color: #01417F;
  background-color: #f1f1f1;
  cursor: pointer;
}
`
const DropMenu = styled.div`
font-size: 30px;
color: black;
padding: 20px 13vw;
font-family: "Pretendard-Medium","Apple SD Gothic Neo","sans-serif";
&:hover {
  color: #01417F;
  background-color: #f1f1f1;
  cursor: pointer;
}
`
const DropSubMenu = styled.div`
transition: all 0.5s ease-in-out;
font-size: 20px;
color: black;
font-family: "Pretendard-Medium","Apple SD Gothic Neo","sans-serif";
padding: 10px 13vw;
&:hover {
  color: #01417F;
  background-color: #e1e1e1;
  cursor: pointer;
}
`

function NavItem(props) {
  const [open, setOpen] = useState(false);
  return (
    <Link to={props.link} style={{ textDecoration: 'none' }}>
      <MenuName width={props.width}
        onMouseEnter={() => setOpen(!open)}
        onMouseLeave={() => setOpen(false)}> 
        {props.menu}
        {open && props.children}      
      </MenuName>
    </Link>

  );
}

function DropMenuItem(props){
  const [DropMenuOpen, setDropMenuOpen] = useState(false);
  return(
  <Link to={props.link} style={{ textDecoration: 'none' }} >
    <DropMenu
        onClick={() => setDropMenuOpen((prev) => !prev)}
        > 
        {props.menu}
        
    </DropMenu>
    {DropMenuOpen && props.children} 
  </Link>
  );
}
function DropSubMenuItem(props){
  return(
  <Link to={props.link} style={{ textDecoration: 'none' }} >
    <DropSubMenu>
    {props.children}
    </DropSubMenu>
  </Link>
  );
}


function Header() {

  const [SideMenuOpen, setSideMenuOpen] = useState(false);
  const IsSideMenuOpen =() => {
    setSideMenuOpen((prev) => !prev);
  };

  
  return (
      <MenubarPositioner >
        <MainContainer>
        <Link to="/">
          <LogoImgPositioner
           src={
            process.env.PUBLIC_URL + '/img/gachiga.png'
            } alt="??????"
          />
        </Link>
        <MenuElementPositioner>
          <MenuUl>
          <NavItem  width="90px" link ="/team" menu="?????? ??????" />
          <NavItem  width="100px" menu="????????? ?????? ???">
                <MenuDropDown>
                <Link to="/service/gachiga" style={{ textDecoration: 'none' }} ><MenuItem>?????????</MenuItem></Link>
                <Link to="/service/meonjeoga" style={{ textDecoration: 'none' }}><MenuItem>?????????</MenuItem></Link>
                </MenuDropDown>
            </NavItem>
            <NavItem width="110px" link="/faq" menu="?????? ?????? ??????" />
            <NavItem  width="60px" link="/career" menu="??????" />
            </MenuUl>
        </MenuElementPositioner>
        <MenuButton>
        {!SideMenuOpen ? <AiOutlineMenu size="30" onClick ={IsSideMenuOpen}/> : <CloseIcon size="30" onClick ={IsSideMenuOpen}/>}
        </MenuButton>
        </MainContainer>
        <SubContainer SideMenuOpen={SideMenuOpen}>
        <DropMenuItem link ="/team" menu="?????? ??????"></DropMenuItem>
        <DropMenuItem menu="????????? ?????? ???" >
          <DropSubMenuItem link ="/service/gachiga" >????????? ?????????</DropSubMenuItem>
          <DropSubMenuItem link ="/service/meonjeoga" >????????? ?????????</DropSubMenuItem>
        </DropMenuItem>

        <DropMenuItem link ="/faq" menu="?????? ?????? ??????" ></DropMenuItem>
        <DropMenuItem link ="/career" menu="??????"></DropMenuItem>
        </SubContainer>
        
      </MenubarPositioner>
  
  );
}

export default Header;