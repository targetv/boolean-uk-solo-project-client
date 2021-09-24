import styled from "styled-components";

const ServerImage = styled.a`

display: grid;
height: 100px;


    img{
    width: 55px;
    height: 55px;
    border-radius: 50%;
    place-self: center;
    };

`



function ServerImageLogo({Server}){


    console.log(Server)
    return(
        <ServerImage><img src={Server.serverimage} /></ServerImage>
    )
}

export default ServerImageLogo