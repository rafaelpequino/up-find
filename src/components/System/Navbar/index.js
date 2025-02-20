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
    font-size: 14px;
`

const TopicsList = styled.ul`
    list-style: none;

    & li {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 20px;
        padding: 10px 20px 10px 10px;
        border-raius: 10px;
        margin-bottom: 20px;
        cursor: pointer;
        transition: .2s;
        border-radius: 10px;
    }

    & li.active {
        background-color: var(--color-shadow-soft);
    }

    & li.active span {
        background-color: var(--color-sky-1);
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
        padding: 5px;
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

const Navbar = (props) => {
    return (
        <NavbarContainer>
            <ImgLogo src="/img/iv/first-logo.png" alt="Logo da UpFind" />


            { props.navItems.map(sec => (
                <TopicsSection key={ sec.key }>
                    <TopicsSectionTitle>{ sec.secNavTitle }</TopicsSectionTitle>
                    <TopicsList>
                        { sec.secNavItem.map((item, index) => (
                            <li key={"item-" + index} className={`${item.text == props.active ? 'active' : ''}`}>
                                <span>
                                    <img src={"/img/icons/nav-system/" + item.icon + ".svg"} />
                                </span>
                                <div>{ item.text }</div>
                            </li>
                        )) }
                    </TopicsList>
                </TopicsSection>
            )) }

        </NavbarContainer>
    )
}

export default Navbar;