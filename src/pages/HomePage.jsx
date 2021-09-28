import styled from "styled-components";
import SeverSectionComponent from "../components/ServerSectionComponent";
import ChannelsComponent from "../components/ChannelsComponent";
import MessageComponent from "../components/MessagesComponents";
import AccountComponent from "../components/AccountComponent";
import SendMessageComponent from "../components/SendMessageComponent";
import { useState } from "react";


const TestContainer = styled.div`
display: grid;
grid-template: 
"server friends messages" 1fr
"server account sendmessage" 75px / 100px minmax(100px, 225px) minmax(800px, 1fr);


`



function HomePage(){
    const [currentServer, setCurrentSever] = useState(null);
    const [currentChannel, setCurrentChannel] = useState(null);
    const [messages, setMessages] = useState([])
    
    return(
        <TestContainer>
           <SeverSectionComponent setCurrentSever={setCurrentSever}/>
           <ChannelsComponent currentServer={currentServer} setCurrentChannel={setCurrentChannel}/>
           <MessageComponent currentChannel={currentChannel} messages={messages} setMessages={setMessages}/>
           <AccountComponent/>
           <SendMessageComponent currentChannel={currentChannel} messages={messages} setMessages={setMessages}/>

           </TestContainer>  



       
    )
}

export default HomePage