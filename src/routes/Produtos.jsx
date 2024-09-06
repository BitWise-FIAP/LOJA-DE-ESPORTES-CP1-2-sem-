import { ProdutosStyle } from "../css/ProdutosStyle";
import kit_rosa from "../assets/kit-academia-tenis-garrafa.jpg"
import kit_caminhada from "../assets/kit-de-caminhada.jpg"
import bike_swift from "../assets/bike-profissional-swift.jpeg"
const Produtos=()=>{
    return(
        <>
        <ProdutosStyle>
            <body className="corpo">
                <div className="cardholder"> 
                    <div className="card">
                        <img src={kit_rosa} alt="IMG CARD 1"></img>
                        <p>texto do card</p>
                    </div>
                    <div className="card">
                        <img src={kit_caminhada} alt="IMG CARD 2"></img>
                        <p>texto do card</p>
                    </div>
                    <div className="card">
                        <img src={bike_swift} alt="IMG CARD 2"></img>
                        <p>texto do card</p>
                    </div>
                </div>
            </body>
        </ProdutosStyle>
        </>
    )
}

export default Produtos