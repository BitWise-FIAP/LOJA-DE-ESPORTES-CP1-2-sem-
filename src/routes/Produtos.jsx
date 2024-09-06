import { ProdutosStyle } from "../css/ProdutosStyle";
import kit_rosa from "../assets/kit-academia-tenis-garrafa.jpg"
import kit_caminhada from "../assets/kit-de-caminhada.jpg"
import bike_swift from "../assets/bike-profissional-swift.jpeg"
import tenis_basquete from "../assets/tenis-de-basquete.jpg"
import kit_escalada from "../assets/kit-escalada.jpg"
import kit_natacao from "../assets/kit-natacao.jpg"
const Produtos=()=>{
    return(
        <>
        <ProdutosStyle>
            <body className="corpo">
                <div className="cardholder"> 
                    <div className="card">
                        <div className="cardcontent">
                            <img src={kit_rosa} alt="IMG CARD 1"></img>
                            <p className="textocard">Kit de Academia Rosa (Tênis e Garrafa)</p>
                            <p className="preco">R$599,90</p>
                            <button className="botao">Comprar</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="cardcontent">
                            <img src={kit_caminhada} alt="IMG CARD 2"></img>
                            <p className="textocard">Kit de Caminhada (Tênis e Smart Watch)</p>
                            <p className="preco">R$799,90</p>
                            <button className="botao">Comprar</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="cardcontent">
                            <img src={bike_swift} alt="IMG CARD 2"></img>
                            <p className="textocard">Kit de Academia Rosa (Tênis e Garrafa)</p>
                            <p className="preco">R$1200,99</p>
                            <button className="botao">Comprar</button>
                        </div>
                    </div>
                </div>
                <div className="cardholder"> 
                    <div className="card">
                        <div className="cardcontent">
                            <img src={tenis_basquete} alt="IMG CARD 1"></img>
                            <p className="textocard">Tênis de Basquete Cano Alto</p>
                            <p className="preco">R$490,50</p>
                            <button className="botao">Comprar</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="cardcontent">
                            <img src={kit_escalada} alt="IMG CARD 2"></img>
                            <p className="textocard">Kit de Escalada profissional</p>
                            <p className="preco">R$1799,90</p>
                            <button className="botao">Comprar</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="cardcontent">
                            <img src={kit_natacao} alt="IMG CARD 2"></img>
                            <p className="textocard">Kit de Natação Speedo</p>
                            <p className="preco">R$250,90</p>
                            <button className="botao">Comprar</button>
                        </div>
                    </div>
                </div>
            </body>
        </ProdutosStyle>
        </>
    )
}

export default Produtos