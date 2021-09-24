

import LoginPageContainer from "../components/PageContainerLogin"
import Button from "../components/ButtonComponent"
import { useHistory } from "react-router"






function LoginPage(){

  const history = useHistory()
   
    return(
      <LoginPageContainer >
           <section className="buttonContainer">
            <Button className="positionBottom" onClick={() => { history.push("/login")}} >Login In</Button>
            <Button color="black" onClick={() => { history.push("/register")}}>Sign Up</Button>
           </section>
      </LoginPageContainer>
         
    
     


    )
}

export default LoginPage 



