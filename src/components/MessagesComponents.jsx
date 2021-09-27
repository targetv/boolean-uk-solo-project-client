
import styled from "styled-components";
import { useState, useEffect } from "react";

const MessageSection = styled.section`
grid-area: messages;
padding-top: 10px;
background-color: #444444;

`

const MessagesContainer = styled.ul`

display: grid;
grid-template-rows: repeat(auto-fit, minmax(50px, 50px));
list-style: none;
grid-gap: 5px;
padding: 10px;


`

const Message = styled.li`
   
display: grid;
grid-template-rows: 20px 1fr;
font-size: 1.2rem;
padding: 10px;
color: white;

div{
    font-size: 0.8rem;
}

`

function MessageComponent({currentChannel}){

    const [messages, setMessages] = useState([])
    const [fetching, setFetching] = useState(false)

    const fetchRequest = () => {
        fetch(`http://localhost:3030/post/${currentChannel}`).then(res => res.json()).then(data => {
            setMessages(data.getPost)
         })
    }

   useEffect(() => {
            fetchRequest()
            setFetching(true)

   },[currentChannel])

   useEffect(() => {
       const interval = setInterval(() => {
           fetchRequest()
       }, 5000);
       return () => clearInterval(interval)
   },[fetching, currentChannel])

 

    function ShowMessage(){
        if(messages === undefined){
            return(
                <p>No Message</p>
            )
        }
        return(
            <MessagesContainer>
                 {console.log(messages)}
                {messages.map(message => {
                    return(
                        <Message><div>{message.user.username}</div>{message.message}</Message>
                       
                    )
                })}
            </MessagesContainer>
            
        )
       
       
        
       
    }
    return(
        <MessageSection>
           
                {ShowMessage()}
           
        </MessageSection>
    )
}

export default MessageComponent