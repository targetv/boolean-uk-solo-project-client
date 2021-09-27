import styled from "styled-components";
import SeverSectionComponent from "../components/ServerSectionComponent";
import ChannelsComponent from "../components/ChannelsComponent";
import MessageComponent from "../components/MessagesComponents";
import { useState } from "react";


const TestContainer = styled.div`
display: grid;
grid-template: 
"server friends messages" 1fr
"server account sendmessage" 75px / 100px minmax(100px, 225px) minmax(800px, 1fr);

.server{
    grid-area: server;
    background-color: green;
}


.account{
    grid-area: account;

}
.sendmessage{
    grid-area: sendmessage;
    background-color: blue;
}


`



function HomePage(){
    const [currentServer, setCurrentSever] = useState(null);
    const [currentChannel, setCurrentChannel] = useState(null);
    
    return(
        <TestContainer>
           <SeverSectionComponent setCurrentSever={setCurrentSever}/>
           <ChannelsComponent currentServer={currentServer} setCurrentChannel={setCurrentChannel}/>
           <MessageComponent currentChannel={currentChannel}/>
           <div className="account"></div>
           <div className="sendmessage"></div>

           </TestContainer>  



       
    )
}

export default HomePage