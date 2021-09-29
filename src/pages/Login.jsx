import styled from "styled-components";
import LoginPageContainer from "../components/PageContainerLogin";
import InputComponent from "../components/InputComponent";
import Button from "../components/ButtonComponent";
import Form from "../components/FormComponent";
import {useEffect, useState} from "react"
import { useHistory } from "react-router";





function LoginPage({setAuthenticatedUser, authenticatedUser}){

    const history = useHistory()
    const apiUrl = process.env.REACT_APP_API_URL;

    const [user, setUser] = useState({ email: "",
    password: "",})

    const handleSubmit = (event)=> {
        event.preventDefault()
   
        console.log(user)

    
        fetch(`${apiUrl}/signin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({...user})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const user = data.user

            if (user) {
                setAuthenticatedUser(user)
      
                localStorage.setItem("user", JSON.stringify(user))
      
                history.push("/home")
              }
        })
    }
    const handleChange = event => {
        const name = event.target.name
        const value = event.target.value
    
        setUser({ ...user, [name]: value })
      }
    return(
        <LoginPageContainer>
            <div className="buttonContainer biggerCard">
                <Form onSubmit={handleSubmit} >
                <InputComponent placeholder="Email" type="email" id="email" name="email" onChange={handleChange}/>
                <InputComponent placeholder="Password"  type="password"
          id="password"
          name="password" onChange={handleChange}/> 
                <Button onClick={handleSubmit}>Login</Button>
                <Button>Google Sign In</Button>

                </Form>
             
          
            </div>
        </LoginPageContainer>
    )
}

export default LoginPage
