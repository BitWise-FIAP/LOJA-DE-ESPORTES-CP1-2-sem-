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
    padding: 15px;
    border-color: #5c0067; 
    background-color: #00d4ff;
    border-style: solid;
    border-width: 5px;
    border-radius: 15px;
}
.card img{
    
    height: 10rem;
    border-style: solid;
    border-width: 1px;
}
`