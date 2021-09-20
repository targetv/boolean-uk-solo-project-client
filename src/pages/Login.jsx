import styled from "styled-components";
import LoginPageContainer from "../components/PageContainerLogin";
import InputComponent from "../components/InputComponent";
import Button from "../components/ButtonComponent";


const Form = styled.form`
display: grid;
width: 80%;
height: auto;
place-items: center;
place-self: center;
grid-template-rows: 75px 75px 50px 50px ;
grid-gap: 20px;




`


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
