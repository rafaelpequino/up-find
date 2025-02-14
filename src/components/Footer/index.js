import styled from "styled-components";
import { Paragraph } from "../Paragraph";

const FooterContainer = styled.footer`
    max-width: 100%;
    background-color: var(--color-shadow-deep);
    margin-top: -41px;
    padding: 70px 20px;
` 

const DivInsideFooter = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 64px 32px;

    @media (max-width: 999px) {
        flex-direction: column;
    }
`

const ImgLogo = styled.img`
    height: 50px;
`

const DivInsta = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    opacity: .7;

    & span {
        display: block;
        color: var(--color-white);
    }
`

const ImgInsta = styled.img`
    width: 30px;
    filter: invert(1);
`

const List = styled.ul`
    list-style: none;

    & li {
        margin: 10px 0;
    }

    & li a {
        font-size: 16px;
        text-decoration: none;
        color: var(--color-white);
        opacity: .7;
    }
`

const Footer = (props) => {
    return (
        <FooterContainer>
            <DivInsideFooter>
                <div>
                    <ImgLogo src="/img/iv/logo6.png" alt="Logo da UpFind" />
                    <Paragraph color="var(--color-white)" opacity=".7" align="left">Copyright © Plataforma UpFind - deu match</Paragraph>
                    <DivInsta>
                        <ImgInsta src="/img/icons/instagram.svg" alt="Ícone do instagram" />
                        <span>@UpFind</span>
                    </DivInsta>
                </div>
                <div>
                    <Paragraph color="var(--color-white)"><strong>UpFind</strong></Paragraph>
                    <List>
                        <li><a href="#">Quem Somos</a></li>
                        <li><a href="#">Como Funciona</a></li>
                        <li><a href="#">Dúvidas Frequentes</a></li>
                        <li><a href="#">Trabalhe Conosco</a></li>
                    </List>
                </div>
                <div>
                    <Paragraph color="var(--color-white)"><strong>Acesso Rápido</strong></Paragraph>
                    <List>
                        <li><a href="#">Dados Pessoais</a></li>
                        <li><a href="#">Meus Projetos</a></li>
                        <li><a href="#">Histórico de Pagamentos</a></li>
                    </List>
                </div>
                <div>
                    <Paragraph color="var(--color-white)"><strong>Documentos</strong></Paragraph>
                    <List>
                        <li><a href="#">Preciso de Ajuda</a></li>
                        <li><a href="#">Termos de Uso</a></li>
                        <li><a href="#">Politicas de Privacidade</a></li>
                    </List>
                </div>
            </DivInsideFooter>
        </FooterContainer>
    )
}

export default Footer;