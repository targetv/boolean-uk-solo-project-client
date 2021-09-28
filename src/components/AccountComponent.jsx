import styled from "styled-components";
import Button from "./ButtonComponent";
import { useHistory } from "react-router";


const AccountContainer = styled.div`
display: grid;
grid-area: account;
background-color: #444444;

.button{
    place-self: center;
    display: grid;
    place-content: center;

}


`




function  AccountComponent(){

    const history = useHistory()
    return(
        <AccountContainer>
            <Button className="button" backgroundColor="var(--darkblue)" borderColor="none"  textColor="white" onClick={() => history.push("/account")}>Account</Button>
        </AccountContainer>
    )
}

export default AccountComponent