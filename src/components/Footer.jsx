import { FooterStyle } from '../css/FooterStyle'
import footer_apple from '../assets/footer_apple.png' 
import footer_google from '../assets/footer_google.png' 

const Footer = () => {
    return (
        <>
            <FooterStyle>
                <footer className='footer'>
                    <h5>@2024 - Todos os direitos reservados</h5>
                    
                    {/* Link para a Apple Store */}
                    <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                        <img src={footer_apple} className='apple' alt='Baixe na APPLE STORE' />
                    </a>
                    
                    {/* Link para a Google Play */}
                    <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                        <img src={footer_google} className='google' alt='Baixe na Google Play' />
                    </a>

                </footer>
            </FooterStyle>
        </>
    )
}

export default Footer
