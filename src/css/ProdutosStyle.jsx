import styled from 'styled-components'

export const ProdutosStyle = styled.section`

.corpo{
    background-image: radial-gradient(circle, #5c0067 0%, #00d4ff 100%);
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
}
.card{
    border-color: #5c0067; 
    background-color: #00d4ff;
    border-style: solid;
    border-width: 5px;
    border-radius: 15px;
}
.cardcontent{
    padding: 15px;
    text-align: center;
}
.cardcontent img{
    filter: contrast(130%);
    height: 10rem;
    border-style: solid;
    border-width: 2px;
    
}
.textocard{
    font-size: 20px;
}
.preco{
    font-size: 20px;
    font-weight: 600;
}
`