import styled from "styled-components";
import LoginPageContainer from "../components/PageContainerLogin";
import InputComponent from "../components/InputComponent";
import Button from "../components/ButtonComponent";
import Form from "../components/FormComponent";




function LoginPage(){
    return(
        <LoginPageContainer>
            <div className="buttonContainer biggerCard">
                <Form>
                <InputComponent placeholder="Email"/>
                <InputComponent placeholder="Password"/> 
                <Button>Login</Button>
                <Button>Google Sign In</Button>

                </Form>
             
          
            </div>
        </LoginPageContainer>
    )
}

export default LoginPage
