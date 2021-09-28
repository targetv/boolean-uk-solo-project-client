import styled from "styled-components";
import LoginPageContainer from "../components/PageContainerLogin"
import {IoAddCircleOutline} from "react-icons/io5"
import { AddServerIcon } from "../components/ServerSectionComponent";
import Button from "../components/ButtonComponent";

const CardContainer = styled.div`


border-radius: 20px;
padding: 50px;
display: grid;
grid-template-rows: 100px 1fr;
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


function AccountPage(){

    const user = JSON.parse(localStorage.getItem("user"));
 
    return(
        <LoginPageContainer backgroundColor="#444444">
            <div className="biggerCard">
                <CardContainer>
                <FirstRow>
                    <AddServerIcon><IoAddCircleOutline className="icon"/></AddServerIcon>
                    <div className="boxContainer"><p>{user.username}</p></div>
                    {/* <p className="boxContainer">My name is sean</p> */}
                    <div className="boxContainer"><Button className="button">Edit Profile</Button></div>
                </FirstRow>
                <SecondRow>
                    <h3 className="emailText">{user.email}</h3>
                    {/* <div className="button"><p>Hello world</p></div> */}
                    <Button className="button">Edit Email</Button>

                </SecondRow>
                

                </CardContainer>
            </div>
        </LoginPageContainer>
    )
}

export default AccountPage