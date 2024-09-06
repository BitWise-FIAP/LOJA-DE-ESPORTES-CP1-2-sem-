import styled from 'styled-components'

export const SobreStyle = styled.section`
.content{
    background-image: radial-gradient(circle, #1e0e64 0%, #00d4ff 100%);
    padding: 15px;
}
.content h1{
    font-size: 30px;
}
.content img{
    width: 100%;
    height: 650px;
    border-style: solid;
    border-color: #1e0e64;
    border-width: 5px;
    position: absolute;
    filter: brightness(75%);
    
    
}
.texto{
    font-size: 20px;
    font-family: cursive;
    color: #00d4ff;
    text-align: justify;
    text-shadow: 2px 1px #1e0e64;
    position: absolute;
    width: 800px;
    padding-left: 985px;
    
    
}
.sobrepor{
    position: relative;
    margin-bottom: 700px;
}
`