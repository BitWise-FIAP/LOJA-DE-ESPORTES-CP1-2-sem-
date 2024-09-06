import { HomeStyle } from "../css/HomeStyle";
import bike_swift from "../assets/bike-profissional-swift.jpeg"
const Home=()=>{
    return(
        <>
        <HomeStyle>
            <body className="corpo">
                <div className="bannerDiv">
                    <img className="banner" src={bike_swift}></img>
                    <h1 className="bannertitle">70% OFF PRIMEIRA COMPRA</h1>
                </div>
                <div className="flexdiv">
                    <div className="grid">
                        <h1>Bem vindo a nossa loja de esportes!</h1>
                        <p>Encontre tudo o que você precisa para suas atividades esportivas, desde equipamentos até roupas especializadas.</p> 
                    </div>
                    <div className="grid">
                        <h1>Bem vindo a nossa loja de esportes!</h1>
                        <p>Encontre tudo o que você precisa para suas atividades esportivas, desde equipamentos até roupas especializadas.</p> 
                    </div>   
                </div>
                
            </body>
        </HomeStyle>
        </>
    )
}

export default Home