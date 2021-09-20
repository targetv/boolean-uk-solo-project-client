
import styled from "styled-components"

import LoginPageContainer from "../components/PageContainerLogin"
import Button from "../components/ButtonComponent"






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



