import { ProdutosStyle } from "../css/ProdutosStyle";
import kit_rosa from "../assets/kit-academia-tenis-garrafa.jpg"
import kit_caminhada from "../assets/kit-de-caminhada.jpg"
import bike_swift from "../assets/bike-profissional-swift.jpeg"
import tenis_basquete from "../assets/tenis-de-basquete.jpg"
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
                        </div>
                    </div>
                    <div className="card">
                        <div className="cardcontent">
                            <img src={kit_caminhada} alt="IMG CARD 2"></img>
                            <p className="textocard">Kit de Caminhada (Tênis e Smart Watch)</p>
                            <p className="preco">R$799,90</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="cardcontent">
                            <img src={bike_swift} alt="IMG CARD 2"></img>
                            <p className="textocard">Kit de Academia Rosa (Tênis e Garrafa)</p>
                            <p className="preco">R$1200,99</p>
                        </div>
                    </div>
                </div>
                <div className="cardholder"> 
                    <div className="card">
                        <div className="cardcontent">
                            <img src={tenis_basquete} alt="IMG CARD 1"></img>
                            <p className="textocard">Tênis de Basquete Cano Alto</p>
                            <p className="preco">R$500,85</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="cardcontent">
                            <img src={kit_caminhada} alt="IMG CARD 2"></img>
                            <p className="textocard">Kit de Caminhada (Tênis e Smart Watch)</p>
                            <p className="preco">R$799,90</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="cardcontent">
                            <img src={bike_swift} alt="IMG CARD 2"></img>
                            <p className="textocard">Kit de Academia Rosa (Tênis e Garrafa)</p>
                            <p className="preco">R$1200,99</p>
                        </div>
                    </div>
                </div>
            </body>
        </ProdutosStyle>
        </>
    )
}

export default Produtos