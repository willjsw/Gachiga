import styled from "styled-components";

const Br_Media = styled.br`
display: none;
@media screen and (max-width: 768px) {
    display: block;
    } 
`

function Br(){
    return(
       <Br_Media />     
    );
}
export default Br;