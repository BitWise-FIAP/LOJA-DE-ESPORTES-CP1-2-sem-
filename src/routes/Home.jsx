import { HomeStyle } from "../css/HomeStyle";
import bike_swift from "../assets/bike-profissional-swift.jpeg"
const Home=()=>{
    return(
        <>
        <HomeStyle>
            <body className="corpo">
                <img className="banner" src={bike_swift}></img>
                <h1>Bem vindo a nossa loja de esportes!</h1>
                <p>Encontre tudo o que você precisa para suas atividades esportivas, desde equipamentos até roupas especializadas.</p>

            </body>
        </HomeStyle>
        </>
    )
}

export default Home