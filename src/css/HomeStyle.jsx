import styled from "styled-components"

export const HomeStyle = styled.section`

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

.corpo{
    background-image: radial-gradient(circle, #5c0067 0%, #00d4ff 100%);
    max-width: 100%;
    margin: 0;
    padding: 0;
}
.banner{
    position: absolute;
    width: 100%;
    height: 30rem;
    object-fit: none 
}
.bannertitle{
    position: absolute;
    top: 15rem;
    left: 50%;
    transform: translate(-50%);
    font-size: 4rem;
    color: white;
    text-align: center;
}
.bannerDiv{
    width:100%;
    height:30rem;
}
`