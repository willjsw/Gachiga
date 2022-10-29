

import styled from "styled-components";

const Container = styled.div`
`




function SideMenu(){

    var menuBtn = document.querySelector('.menu-btn');
var nav = document.querySelector('nav');
var lineOne = document.querySelector('nav .menu-btn .line--1');
var lineTwo = document.querySelector('nav .menu-btn .line--2');
var lineThree = document.querySelector('nav .menu-btn .line--3');
var link = document.querySelector('nav .nav-links');
menuBtn.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
    lineOne.classList.toggle('line-cross');
    lineTwo.classList.toggle('line-fade-out');
    lineThree.classList.toggle('line-cross');
    link.classList.toggle('fade-in');
})
    return(
        <Container>
<nav>
  <div class="menu-btn">
    <div class="line line--1"></div>
    <div class="line line--2"></div>
    <div class="line line--3"></div>
  </div>

  <div class="nav-links">
    <a href="" class="link">Home</a>
    <a href="" class="link">Contact</a>
    <a href="" class="link">Profile</a>
    <a href="" class="link">About</a>
  </div>
</nav>

          </Container>
          
    );
}

export default SideMenu;