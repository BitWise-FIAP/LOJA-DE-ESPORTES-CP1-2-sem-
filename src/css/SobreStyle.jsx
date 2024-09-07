import styled from 'styled-components'

export const SobreStyle = styled.section`
*{
    font-family: cursive;
}

.content{
    background-image: radial-gradient(circle, #1e0e64 0%, #00d4ff 100%);
    padding: 15px;
}
.content h1{
    font-size: 30px;
}

.sobrepor{
    width: 100%;
    height: 650px;
    border-style: solid;
    border-color: #1e0e64;
    border-width: 5px;
}
.content img{
    width: 100%;
    height: 100%;
    position: absolute;
    filter: brightness(75%);
    object-fit: none 
}
.sobrepor h3{
    left: 50%;
    top: 50%;
    position:absolute;
    transform: translate(-50%,-100%);
    font-size: 50px;
    text-align: center;
    color: #FFFFFF;
    text-shadow: 0 4px #414141;       
    filter: drop-shadow(0 0 1.5rem #FFFFFF);
}
.texto{
    font-size: 1.25rem;
    color: #FFFFFF;
    text-align: center;
    text-shadow: 2px 1px #414141;
    filter: drop-shadow(0 0 1.2rem #000000);
    padding: 5vh;
    
       

}
.sobrepor{
    position: relative;
    margin-bottom: 5vh;
}
`