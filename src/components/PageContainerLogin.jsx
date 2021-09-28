import styled from "styled-components";

 const LoginPageContainer = styled.div`
display: grid;
place-content: center;
background-color: ${props => props.backgroundColor || "white"};

 
.buttonContainer{
  
    display: grid;
    grid-template-rows: repeat(2,1fr);
    width: 400px;
    height: 400px;
    box-shadow: 1px 1px 6px 2.5px rgba(0, 0, 0, 0.2);
    background-color: var(--darkblue);
    border-radius: 20px;
    grid-gap: 20px;
    padding: 20px;
 
    
}

a{
    display: grid;
    place-items: center;
    justify-self: center;
}

.positionBottom{
    place-self:end;
    justify-self: center;
}

.biggerCard{
    width: 60vw;
    height: 500px; 
    grid-template-rows: auto;
}

.test{
    grid-template-rows: repeat(5, 75px);
}




`;

export default LoginPageContainer

