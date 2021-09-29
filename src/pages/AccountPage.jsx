import styled from "styled-components";
import LoginPageContainer from "../components/PageContainerLogin"
import {IoAddCircleOutline} from "react-icons/io5"
import { AddServerIcon } from "../components/ServerSectionComponent";
import Button from "../components/ButtonComponent";
import { useState } from "react";
import { useEffect } from "react";

const CardContainer = styled.div`


border-radius: 20px;
padding: 50px;
display: grid;
grid-template-rows: 100px 1fr 1fr;
background-color: white;



`

const FirstRow = styled.div`

    display: grid;
    grid-template-columns: 100px repeat(2, 1fr);

    .boxContainer{
        display: grid;
        place-content: center;
    }
    
    .icon{
        color: black;
    }


`

const SecondRow = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 20px;
    grid-gap: 10px;

    .emailText{
        margin-top: 20px;
    }

    

    .button{
        display: grid;
        justify-content: center;
        width: 100%;
    }
  

`

const ThirdRow = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    ul{
        list-style-type: none;
    }

    .requests{
        display: grid;
        grid-template-rows: 50px 1fr;
    }



`


function AccountPage(){

    const user = JSON.parse(localStorage.getItem("user"));

    const [friendRequests, setFriendRequests] = useState()
    
    const apiUrl = process.env.API_URL;

    useEffect(() => {
        fetch(`${apiUrl}/friendsrequest/${user.id}`).then(res => res.json()).then(data => setFriendRequests(data))
        console.log("requests",friendRequests)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[setFriendRequests])
 
    return(
        <LoginPageContainer backgroundColor="#444444">
            <div className="biggerCard">
                <CardContainer>
                <FirstRow>
                    <AddServerIcon><IoAddCircleOutline className="icon"/></AddServerIcon>
                    <div className="boxContainer"><p>{user.username}</p></div>
                    <div className="boxContainer"><Button className="button">Edit Profile</Button></div>
                </FirstRow>
                <SecondRow>
                    <h3 className="emailText">{user.email}</h3>
                    <Button className="button">Edit Email</Button>
                </SecondRow>
                <ThirdRow>
                    <div className="requests">
                        <h3>Friend Requests From</h3>
                    <ul>
                   { friendRequests === undefined ? <p>No Requests</p> :  friendRequests.map(item => {
                       if(item === undefined){
                           return(
                               <li>No Requests</li>
                           )
                       }
                       return(
                           <li>{item.sender.username}</li>
                       )
                   })}
                    </ul> 
                    </div>
                    
                </ThirdRow>

                

                </CardContainer>
            </div>
        </LoginPageContainer>
    )
}

export default AccountPage