import styled from "styled-components";
import SeverSectionComponent from "../components/ServerSectionComponent";


const TestContainer = styled.div`
display: grid;
grid-template: 
"server friends messages" 1fr
"server account sendmessage" 75px / 100px minmax(100px, 225px) minmax(800px, 1fr);

.server{
    grid-area: server;
    background-color: green;
}

.friends{
    grid-area: friends;
    background-color: red;
}
.messages{
    grid-area: messages;
    background-color: yellow;
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
    return(
        <TestContainer>
           <SeverSectionComponent/>
           <div className="friends"></div>
           <div className="messages"></div>
           <div className="account"></div>
           <div className="sendmessage"></div>

           </TestContainer>  



       
    )
}

export default HomePage