import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";


const ChannelUl = styled.ul`
    list-style: none;
    display: grid;
    grid-template-rows: repeat(auto-fit, minmax(100px, 100px));
    padding-top: 5px;
    overflow: scroll;

    a{
        cursor: pointer;
    }


`

const ChannelElement = styled.li`

  display: grid;
  place-items: center;

  

`

const ChannelSection = styled.section`
    background-color: #4a4949;
    color: white;
    grid-area: friends;
`

function ChannelsComponent({currentServer, setCurrentChannel}){
    const [channels, setChannels] = useState([])
    

    function getAllChannels(){
        
        if( channels === undefined || channels.length === 0){
            return(
                <h1>No Channels</h1>
            )
        }
        return(
               
                       <ChannelUl>
                                {channels.map(channel => {
                                    return(
                                        <a onClick={() => {setCurrentChannel(channel.id)}}><ChannelElement>{channel.channelName}</ChannelElement></a>
                                    )
                                })}
                       </ChannelUl>
                    
                    
                   )
                 
        }

    



    useEffect(() => {
        fetch(`http://localhost:3030/channel/${currentServer}`).then(res => res.json()).then(data => {
           setChannels(data.getChannels)
        })
    },[currentServer])

    return(
        <ChannelSection>
             {getAllChannels()}
        </ChannelSection>
    
       
     
       
      
    )
}

export default ChannelsComponent