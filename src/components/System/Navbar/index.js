import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

const NavbarContainer = styled.nav`
    width: 300px;
    min-width: 300px;
    min-height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    padding: 20px;
    background-color: var(--color-shadow-deep);
    z-index: 10;

    &.nav-open {
        left: 0;
    }

    &.nav-close {
        left: -100%;
    }
    
    @media (max-width: 1200px) {
        top: 0;
        width: max-content;
        transition: .3s;
    }
`

const ImagesContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
`

const ImgLogo = styled.img`
    display: block;
    width: 80%;
    max-width: 120px;
`

const ImgClose = styled.img`
    filter: invert(1);
    width: 20px;
    display: none;

    @media (max-width: 1200px) {
        display: block;
    }
`

const TopicsSection = styled.div`
    width: 100%;
    padding: 10px 0;
`

const TopicsSectionTitle = styled.div`
    color: var(--color-white);
    opacity: .5;
    margin-bottom: 10px;
    font-size: 14px;
`

const TopicsList = styled.ul`
    list-style: none;

    & li {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 15px;
        padding: 5px 30px 5px 5px;
        border-raius: 10px;
        margin-bottom: 10px;
        cursor: pointer;
        transition: .2s;
        border-radius: 10px;
    }

    & li.active {
        background-color: var(--color-shadow-soft);
    }

    & li.active span {
        background-color: ${props => props.$defaultColor || "red"};
    }

    & li:hover {
        background-color: var(--color-shadow-soft);
    }

    & li span {
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 40px;
        max-width: 40px;
        height: 40px;
        border-radius: 10px;
        background-color: var(--color-shadow-soft);
        color: var(--color-white);
        padding: 4px;
    }

    & li span img {
        width: 60%;
        filter: invert(1);
    }

    & li div {
        display: block;
        color: var(--color-white);
        font-size: 14px;
        opacity: .8;
    }
`

const useWindowWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return width;
};
const Navbar = ({ navStatus, setNavStatus, imgLogo, navItems, defaultColor, active }) => {
    const navigate = useNavigate();
    const width = useWindowWidth();

    useEffect(() => {
        if (width > 1200) {
            setNavStatus('open');
        } else {
            setNavStatus('close');
        }
    }, [width, setNavStatus]);

    return (
        <NavbarContainer className={navStatus === 'open' ? 'nav-open' : 'nav-close'}>
            <ImagesContainer>
                <ImgLogo src={`/img/iv/${imgLogo}.png`} alt="Logo da UpFind" />
                <ImgClose
                    src="/img/icons/close.svg"
                    alt="Ícone em X para fechar navbar"
                    onClick={() => setNavStatus('close')}
                />
            </ImagesContainer>

            {navItems.map(sec => (
                <TopicsSection key={sec.key}>
                    <TopicsSectionTitle>{sec.secNavTitle}</TopicsSectionTitle>
                    <TopicsList $defaultColor={defaultColor}>
                        {sec.secNavItem.map((item, index) => (
                            <li 
                                key={"item-" + index} 
                                className={`${item.text === active ? 'active' : ''}`}
                                onClick={() => navigate( item.router ) }    
                            >
                                <span>
                                    <img src={`/img/icons/nav-system/${item.icon}.svg`} />
                                </span>
                                <div>{item.text}</div>
                            </li>
                        ))}
                    </TopicsList>
                </TopicsSection>
            ))}
        </NavbarContainer>
    );
};


export default Navbar;