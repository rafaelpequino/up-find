import styled from "styled-components";

const NavbarContainer = styled.nav`
    min-width: max-content;
    max-width: 320px;
`

const ImgLogo = styled.img`
    width: 80%;
    max-width: 120px;
    margin-bottom: 30px;
`

const TopicsSection = styled.div`
    width: 100%;
    padding: 20px 0;
`

const TopicsSectionTitle = styled.div`
    color: var(--color-white);
    opacity: .5;
    margin-bottom: 10px;
`

const TopicsList = styled.ul`
    list-style: none;

    & li {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 20px;
        padding: 10px;
        border-raius: 10px;
        margin-bottom: 20px;
    }

    & li span {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 10px;
        background-color: var(--color-shadow-soft);
        color: var(--color-white);
    }

    & li div {
        display: block;
        color: var(--color-white);
    }
`

const Navbar = () => {
    return (
        <NavbarContainer>
            <ImgLogo src="/img/iv/first-logo.png" alt="Logo da UpFind" />
            <TopicsSection>
                <TopicsSectionTitle>Minha conta</TopicsSectionTitle>
                <TopicsList>
                    <li>
                        <span>icon</span>
                        <div>Dados Pessoais</div>
                    </li>
                    <li>
                        <span>icon</span>
                        <div>Meus projetos</div>
                    </li>
                    <li>
                        <span>icon</span>
                        <div>Histórico de pagamentos</div>
                    </li>
                </TopicsList>
            </TopicsSection>

            <TopicsSection>
                <TopicsSectionTitle>UpFind</TopicsSectionTitle>
                <TopicsList>
                    <li>
                        <span>icon</span>
                        <div>Suporte</div>
                    </li>
                </TopicsList>
            </TopicsSection>
        </NavbarContainer>
    )
}

export default Navbar;