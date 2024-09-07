import styled from "styled-components";

export const ContatosStyle = styled.section`


.corpo{
    background-image: radial-gradient(circle, #1e0e64 0%, #00d4ff 100%);
    max-width: 100%;
    margin: 0;
    padding: 0;
}
.estruturabanner{
    position: relative;
    width: 100%;
}
.bannerdiv{
    max-width: 100%;
    height:30rem;
}
.banner{
    width: 100%;
    position: absolute;
    height: 30rem;
    object-fit: none 
}
.bannertitle{
    position: absolute;
    top: 5rem;
    left: 50%;
    transform: translate(-50%);
    font-size: 4rem;
    color: white;
    text-align: center;
}
.flexdiv{
    display: flex;
    justify-content: center;
}
.grid{
    font-size: 1.25rem;
    color:#9fdbfd;
    text-shadow: 2px 1px #120303;
    filter: drop-shadow(0 0 1.2rem #000000);
    padding: 10vh;
}
.grid img{
    filter: brightness(10);
}
`