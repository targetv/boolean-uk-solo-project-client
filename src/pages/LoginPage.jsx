
import styled from "styled-components"

const LoginPageContainer = styled.div`
display: grid;
place-content: center;
background-color: white;

 
.buttonContainer{
  
    display: grid;
    grid-template-rows: repeat(2,1fr);
    width: 400px;
    height: 400px;
    justify-content: center;
    box-shadow: 1px 1px 6px 2.5px rgba(0, 0, 0, 0.2);
    background-color: var(--darkblue);
    border-radius: 20px;
    grid-gap: 20px;
    
}

a{
    display: grid;
    place-items: center;
}

.positionBottom{
    place-self:end;
    
}



`;

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








function LoginPage(){
   
    return(
      <LoginPageContainer >
           <section className="buttonContainer">
            <Button className="positionBottom"  >Login In</Button>
            <Button color="black" >Sign Up</Button>
           </section>
      </LoginPageContainer>
         
    
     


    )
}

export default LoginPage 



