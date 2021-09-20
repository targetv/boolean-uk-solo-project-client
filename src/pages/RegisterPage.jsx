import styled from "styled-components";
import InputComponent from "../components/InputComponent";

import LoginPageContainer from "../components/PageContainerLogin";
import Form from "../components/FormComponent";
import Button from "../components/ButtonComponent";

function RegisterPage(){
    return(
        <LoginPageContainer>
            <div className="buttonContainer biggerCard">
            <Form className="test">
                <InputComponent placeholder="Username"/>
                <InputComponent placeholder="Email" type="email"/>
                <InputComponent placeholder="Password" type="password"/>
                <InputComponent placeholder="Re Type Password" type="password"/>
                <Button>Submit</Button>
            </Form>

            </div>
        </LoginPageContainer>
    )
}

export default RegisterPage