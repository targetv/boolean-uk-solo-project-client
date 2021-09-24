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

function SeverSectionComponent(){

    const [servers, setServers] = useState([])

    let user = localStorage.getItem("user")
    user = JSON.parse(user)
  


   

    useEffect(() => {
        fetch(`http://localhost:3030/server/${user.id}`, {
            method: "GET",
            headers:{
                "Content-Type" : "application/json"
            },
        }) .then(res => res.json()) .then(data => {
            setServers(data.getServers)
        })

    },[setServers])

    
    return(
        <AsideSection>
        <AddServerIcon><IoAddCircleOutline className="icon"/></AddServerIcon>
        {/* {console.log(servers[0].id)} */}
        {servers.map(server => {
            if(servers.length === 0){
                return(
                    <p>Loading Content</p>
                )
            }
          
            else{
                return(
                  <ServerImageLogo Server={server}/>
                )
            }
           
        })}
        </AsideSection>
    )
}

export default SeverSectionComponent