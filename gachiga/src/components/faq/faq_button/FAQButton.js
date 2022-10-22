import styled from "styled-components";

const Button = styled.button`
margin-right: 4vw;
background:#01417F;
color:#fff;
border-radius:12px;
border:none;
font-family: "Pretendard-Medium";
text-align:center;
font-size:18px;
font-weight: bold;
padding:2vh 4vw;
cursor:pointer;
transition:800ms ease all;
outline:none;

&:hover{

background:#fff;
color:#01417F;
}
&:before,&:after{
background: #01417F;
transition:400ms ease all;
}
&:after{
right:inherit;
top:inherit;
left:0;
bottom:0;
}
&:hover:before,&:hover:after{
width:100%;
transition:800ms ease all;
}
@media screen and (max-width: 800px) {
padding:2vh 15vw;
}

`
function FAQButton({children}){


    return( 
        <Button>{children}</Button>
    );
}

export default FAQButton;