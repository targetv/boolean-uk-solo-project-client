
import styled from "styled-components"


const Button = styled.a`

width: 200px;
height: 60px;
padding: 15px;
border-radius: 20px;
background-color:  ${props => props.backgroundColor || "white"};
border: 1px solid ${props => props.borderColor || "lightgrey" };
color: ${props => props.textColor || "var(--darkblue)"};
font-weight: 600;
cursor: pointer;

:hover{
    background-color: var(--lightgreen);
    border: var(--lightgreen);
    
}
`
export default Button
