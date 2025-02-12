import styled from "styled-components";

const HeaderContainer = styled.header`
    max-width: 100%;
    padding: 0 20px;
    height: 80px;
    background-color: #121212;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Logo = styled.img`
    width: 120px; /* Ajuste o tamanho conforme necessário */
    height: auto; /* Mantém a proporção */
    cursor: pointer; /* Exemplo: torna a logo clicável */
    
    /* Exemplo: adicionando um efeito ao passar o mouse */
    &:hover {
        opacity: 0.8;
        transition: opacity 0.3s ease-in-out;
    }
`;

const LinksContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
`;

const LinkLogin = styled.a`
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;
`;

const LinkCadastro = styled.a`
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;
    padding: 8px 30px;
    border-radius: 15px;
    border: 2px solid #fff;
`;

const Header = (props) => {
    return (
        <HeaderContainer>
            <Logo src={props.logoPath} alt={props.logoSrc} />
            <LinksContainer>
                <LinkLogin href={props.linkLogin}>Entrar</LinkLogin>
                <LinkCadastro href={props.linkCadastro}>Cadastre-se</LinkCadastro>
            </LinksContainer>
        </HeaderContainer>
    );
};

export default Header;
