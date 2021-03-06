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



function ServerImageLogo({Server, setCurrentSever}){

    const handleClick = () => {
        setCurrentSever(Server.id)
    }


    console.log(Server)
    return(
        // eslint-disable-next-line jsx-a11y/alt-text
        <ServerImage onClick={handleClick}><img src={Server.serverimage} /></ServerImage>
    )
}

export default ServerImageLogo