import { SobreStyle } from "../css/SobreStyle"
import banner_sobre from "../assets/banner-sobre.jpg"
const Sobre=()=>{
    return(
        <>
        <SobreStyle>
            <section className="content">
                <div className="sobrepor">
                    <img src={banner_sobre} alt="imagem acima do texto"></img>
                    <h3>A Importância de Praticar Esportes para a Saúde e Bem-Estar</h3>
                </div>
                <p className="texto">Sobre nós: Incentivamos a prática esportiva! Praticar esportes é fundamental para manter uma vida saudável e equilibrada.
                            A atividade física regular ajuda a prevenir uma série de doenças crônicas, como diabetes, hipertensão e doenças cardiovasculares.
                            Além disso, melhora a saúde mental, reduzindo os níveis de estresse e ansiedade, e promovendo uma sensação de bem-estar através da liberação de endorfinas.
                            Esportes também são essenciais para o controle do peso corporal, pois aumentam o gasto calórico e ajudam a manter um metabolismo ativo.
                            A prática esportiva fortalece os músculos e ossos, melhora a flexibilidade e a coordenação motora, e aumenta a resistência física.
                                Outro benefício importante é a melhoria da qualidade do sono, que é essencial para a recuperação do corpo e da mente.
                                Além dos benefícios físicos, praticar esportes promove a socialização e o desenvolvimento de habilidades como trabalho em equipe, disciplina e liderança.
                                Aprática regular de esportes é uma das melhores formas de garantir uma vida longa, saudável e feliz.
                                Além disso, a prática de esportes pode ser uma excelente forma de lazer e diversão.
                                    Participar de atividades esportivas em grupo ou individualmente pode proporcionar momentos de alegria e descontração,
                                    ajudando a aliviar a rotina diária e a criar memórias positivas. Esportes como futebol, basquete, natação e ciclismo,
                                    entre outros, oferecem oportunidades para explorar novos hobbies e interesses,
                                    além de incentivar um estilo de vida mais ativo e dinâmico.</p>
            </section>
        </SobreStyle>
        </>
    )
}
export default Sobre

