import styled from "styled-components";
import {IoAddCircleOutline} from "react-icons/io5"
import { useState, useEffect } from "react";
import ServerImageLogo from "./ServerImageLogo";


const AsideSection = styled.aside`
    grid-area: server;
    display: grid;
    padding: 5px;
    grid-template-rows: repeat(auto-fit, minmax(100px, 100px));
    background-color: #444444;
    

`




const AddServerIcon = styled.a`

display: grid;
height: 100px;


.icon{
    width: 70%;
    height: auto;
   place-self: center;
   color: white;
   :hover{
       color: var(--lightgreen);
       cursor: pointer;
   }
}


`

function SeverSectionComponent({setCurrentSever}){

    const [servers, setServers] = useState([])


    let user = localStorage.getItem("user")
    user = JSON.parse(user)

  

  


   

    useEffect(() => {
        fetch(`http://localhost:3030/user/${user.id}`) .then(res => res.json()) .then(data => {
            const parsedData = [
                ...data.getUser[0].ownedServers,
                data.getUser[0].memberServers[0].server

            ]
            setServers(parsedData)
          
            
        })
       

    },[setServers])



    
    return(
        <AsideSection>
        <AddServerIcon><IoAddCircleOutline className="icon"/></AddServerIcon>

        {servers.map(server => {
            return(
                <ServerImageLogo Server={server} setCurrentSever={setCurrentSever}/>
            )
        })}
       
        </AsideSection>
    )
}

export default SeverSectionComponent