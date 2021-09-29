import styled from "styled-components";
import InputComponent from "../components/InputComponent";

import LoginPageContainer from "../components/PageContainerLogin";
import Form from "../components/FormComponent";
import Button from "../components/ButtonComponent";
import { useState } from "react";
import { useHistory } from "react-router";


function RegisterPage({setAuthenticatedUser}){

    const history = useHistory()
    const [newUser, setNewUser] = useState({email: "", username: "", password: ""})
    const [reTypePassword, setReTypePassword] = useState("")

    const apiUrl = process.env.REACT_APP_API_URL;

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
    
        setNewUser({ ...newUser, [name]: value })


    }

    const handleSubmit = (event) => {
        event.preventDefault()
        
        fetch(`${apiUrl}/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
             body: JSON.stringify({...newUser})
         })
         .then(res => res.json())
         .then(data => {
           
             const user = data.createUser
            if(user){
                setAuthenticatedUser(user)
                localStorage.setItem("user", JSON.stringify(user))

                history.push("/home")
            }
         })
        
    } 

    return(
        <LoginPageContainer>
            <div className="buttonContainer biggerCard">
            <Form className="test" onSubmit={handleSubmit}>
                <InputComponent placeholder="Username" id="username" name="username" onChange={handleChange} />
                <InputComponent placeholder="Email" type="email"  id="email" name="email" onChange={handleChange}/>
                <InputComponent placeholder="Password" type="password" id="password" name="password" onChange={handleChange}/>
                <InputComponent placeholder="Re Type Password" type="password" id="reTypePassword" name="reTypePassword" onChange={(event) => { setReTypePassword(event.target.value)}}/>
                <Button onClick={handleSubmit}>Submit</Button>
            </Form>

            </div>
        </LoginPageContainer>
    )
}

export default RegisterPage