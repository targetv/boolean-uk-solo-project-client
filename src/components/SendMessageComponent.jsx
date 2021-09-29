import { useState } from "react";
import styled from "styled-components";

import Button from "./ButtonComponent";

const MessageForm = styled.form`

display: grid;
grid-area: sendmessage;
grid-template-columns: 80% 20%;
padding: 10px;
grid-gap: 10px;
background-color: #4a4949;

textarea:focus, input:focus{
    outline: none;

}

.button{
    place-self: center;
    display: grid;
    place-content: center;
    height: 50px;
}


`

const FormInput = styled.input`

place-self: center;
width: 100%;
height: 50px;
background-color: black;
border: none;
border-radius: 20px;
padding: 15px;
background-color: white;
font-size: 1.1rem;


`


function SendMessageComponent({currentChannel}){
    let currentUser = JSON.parse(localStorage.getItem("user"));
    const apiUrl = process.env.REACT_APP_API_URL;

    const [messageToSend, setMessage] = useState({})

    const handleChange = (event) => {
        const message = event.target.value
        const userId = currentUser.id
        const channelId = currentChannel

        setMessage({message: message, userId: userId, channelId: channelId})
       
    }

    const onSubmitMessage = (event) => {
        event.preventDefault()
        fetch(`${apiUrl}/post`, {
            method: "POST",
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(messageToSend)

        })
       .then(res => {
           if(res.ok){
               setMessage({message: ""})
               
           }
           
       })

       
       

    }





    return(
        <MessageForm onSubmit={onSubmitMessage}>
            <FormInput placeholder="Message" type="text" id="message" name="message" value={messageToSend.message} onChange={handleChange}  />
            <Button className="button" onClick={onSubmitMessage}>Send</Button>
        </MessageForm>

    )
}

export default SendMessageComponent