import styled from "styled-components";
import { useEffect, useState } from "react";

const HeaderContainer = styled.header`
    width: 98%;
    max-width: 98%;
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

    @media (max-width: 768px) {
        width: calc(100% - 40px);
        max-width: calc(100% - 40px);
    }
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

const LinkLogin = styled.a`
    color: var(--color-white);
    text-decoration: none;
    font-weight: normal;
    transition: color 0.3s ease;
    display: block;

    @media (max-width: 768px) {
        display: none;
    }
`;

const LinkCadastro = styled.a`
    color: var(--color-white);
    text-decoration: none;
    font-weight: normal;
    transition: color 0.3s ease;
    padding: 8px 30px;
    border-radius: 15px;
    border: 2px solid var(--color-white);
    display: block;

    @media (max-width: 768px) {
        display: none;
    }
`;

const ImgInsideMobile = styled.img`
    width: 15px;
    filter: invert(1);
    padding: 11px 15px;
    border: 2px solid var(--color-black);
    border-radius: 20px;
    display: none;

    @media (max-width: 768px) {
        display: block;
    }
`;

const Header = (props) => {
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
                <LinkLogin href={props.linkLogin}>Entrar</LinkLogin>
                <LinkCadastro href={props.linkCadastro}>Cadastre-se</LinkCadastro>
                <a href="#"><ImgInsideMobile src="/img/icons/big-lock.svg" alt="Ícone de cadeado" /></a>
            </LinksContainer>
        </HeaderContainer>
    );
};

export default Header;