import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HeaderContainer = styled.header.withConfig({
    shouldForwardProp: (prop) => prop !== 'isScrolled'
})`
    width: 100%;
    max-width: 100%;
    padding: 0 20px;
    height: 80px;
    background-color: ${(props) => (props.isScrolled ? "var(--color-black)" : "transparent")};
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    transition: background-color 0.2s ease;
`;


const Logo = styled.img`
    width: 120px;
    height: auto;
    cursor: pointer;

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

const LinkLogin = styled.button`
    background-color: transparent;
    border: none;
    color: var(--color-white);
    text-decoration: none;
    font-weight: normal;
    transition: color 0.3s ease;
    display: block;
    cursor: pointer;

    @media (max-width: 999px) {
        display: none;
    }
`;

const LinkCadastro = styled.button`
    background-color: transparent;
    border: none;
    color: var(--color-white);
    text-decoration: none;
    font-weight: normal;
    transition: color 0.3s ease;
    padding: 8px 30px;
    border-radius: 15px;
    border: 2px solid var(--color-white);
    display: block;
    cursor: pointer;

    @media (max-width: 999px) {
        display: none;
    }
`;

const DivInsideMobile = styled.button`
    background-color: transparent;
    border: none;
    display: none;
    cursor: pointer;

    @media (max-width: 999px) {
        display: block;
    }
`

const ImgInsideMobile = styled.img`
    width: 50px;
    filter: invert(1);
    padding: 11px 15px;
    border-radius: 20px;
`;

const Header = (props) => {
    const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <HeaderContainer isScrolled={isScrolled}>
            <Logo src={props.logoPath} alt={props.logoSrc} />
            <LinksContainer>
                <LinkLogin onClick={() => navigate("./login")}>Entrar</LinkLogin>
                <LinkCadastro onClick={() => navigate("./cadastro")}>Cadastre-se</LinkCadastro>

                <DivInsideMobile onClick={() => navigate("./login")}>
                    <ImgInsideMobile src="/img/icons/big-lock.svg" alt="Ícone de cadeado" />
                </DivInsideMobile>
            </LinksContainer>
        </HeaderContainer>
    );
};

export default Header;