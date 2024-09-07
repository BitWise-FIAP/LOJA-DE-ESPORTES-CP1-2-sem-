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
                        <p>Encontre tudo o que você precisa para suas atividades esportivas,
                             desde equipamentos até roupas especializadas.
                              Oferecemos uma ampla variedade de produtos para diferentes modalidades,
                               como futebol, basquete, corrida, natação e muito mais.
                                Nossa equipe está sempre pronta para
                                 ajudar você a encontrar o que precisa e oferecer as melhores recomendações.
                                  Venha nos visitar e descubra como podemos ajudar você a alcançar seus objetivos
                                   esportivos!</p> 
                    </div>
                    <div className="grid">
                        <h1>Venha Participar da Comunidade Esportiva!</h1>
                        <p>Os esportes desempenham um papel fundamental
                             na promoção de um estilo de vida saudável e ativo.
                              Além de melhorar a condição física,
                               a prática esportiva também contribui para o bem-estar mental,
                                ajudando a reduzir o estresse e a ansiedade.
                                 Participar de esportes em equipe pode fortalecer habilidades sociais
                                  e promover o espírito de colaboração e camaradagem.
                                   Seja através de competições profissionais ou atividades recreativas,
                                    os esportes têm o poder de unir pessoas de diferentes origens e culturas, 
                                    criando um senso de comunidade e pertencimento.</p> 
                    </div>   
                </div>
                
            </body>
        </HomeStyle>
        </>
    )
}

export default Home