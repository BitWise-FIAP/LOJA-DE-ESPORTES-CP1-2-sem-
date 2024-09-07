import {ContatosStyle} from "../css/ContatosStyle"
import banner_contato from "../assets/banner-contato.jpg"
import fale_conosco from "../assets/fale-conosco.png"
const Contatos=()=>{
    return(
        <>
        <ContatosStyle>
            <section className="corpo">
                <div className="estruturabanner">
                        <div className="bannerdiv">
                            <img className="banner" src={banner_contato}></img>
                            <h1 className="bannertitle">CONTATO</h1>
                            <h5 className="bannertitle"><br></br>Prezamos pelo melhor atendimento!</h5>
                        </div>
                        <div className="flexdiv">
                    <div className="grid">
                        <img src={fale_conosco}></img>
                    </div>
                    <div className="grid">
                        <h1>Fale Conosco: lojaesportesbitwise@email.com</h1>
                        <h3>Telefone: (11) 2222-1000</h3>
                    </div>   
                </div>  
                    </div>
            </section>
        </ContatosStyle>
        </>
    )
}
export default Contatos