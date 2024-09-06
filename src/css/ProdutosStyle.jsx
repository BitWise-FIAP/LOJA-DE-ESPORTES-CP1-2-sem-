import styled from 'styled-components'

export const ProdutosStyle = styled.section`

.corpo{
    background-image: radial-gradient(circle, #1e0e64 0%, #00d4ff 100%);
    padding: 15px;
    max-width: 100%;
    height: 90vh;
    margin: 0;
}
.cardholder{
    display: flex;
    justify-content: space-around;
    padding: 15px;
    border-bottom: solid;
    border-color: #000000; 
}
.card{
    border-color: #161868; 
    background-color: #9fdbfd;
    border-style: solid;
    border-width: 5px;
    border-radius: 15px;
    width: 350px;
}
.cardcontent{
    padding: 15px;
    text-align: center;
}
.cardcontent img{
    filter: contrast(130%);
    height: 10rem;
    border-style: solid;
    border-width: 3px;
    border-color: black;
    
}
.textocard{
    font-size: 20px;
    font-weight: 900;
}
.preco{
    font-size: 20px;
    font-weight: 600;
    text-decoration: underline;
}
.botao{
    border: solid;
    border-color: #161868;
    border-radius: 200px;
    height: 50px;
    width: 120px;
    background-color: #161868;
    color: #9fdbfd;
    font-size: 15px;
    font-weight: bolder;
    cursor: pointer;

}
.botao:hover{
    transform: scale(1.2);
}
`