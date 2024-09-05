import { ProdutosStyle } from "../css/ProdutosStyle";
import kit from "../assets/kit-academia-tenis-garrafa.jpg"
const Produtos=()=>{
    return(
        <>
        <ProdutosStyle>
            <body className="corpo">
                <div className="cardholder"> 
                    <div className="card">
                        <img src={kit} alt="IMG CARD 1"></img>
                        <p>texto do card</p>
                    </div>
                    <div className="card">
                        <img src="#" alt="IMG CARD 2"></img>
                        <p>texto do card</p>
                    </div>
                    <div className="card">
                        <img src="#" alt="IMG CARD 2"></img>
                        <p>texto do card</p>
                    </div>
                </div>
            </body>
        </ProdutosStyle>
        </>
    )
}

export default Produtos