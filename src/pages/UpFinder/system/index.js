import styled from "styled-components";
import Navbar from "../../../components/System/Navbar";
import { navItemsUpFinder } from "../../../components/System/Navbar/navItems";
import Subheader from "../../../components/System/Subheader";
import Profile from "../../../components/System/Profile";

const SystemContainer = styled.div`
    width: 100%;
    margin: auto;
    min-height: 100vh;
    background-color: var(--color-shadow-deep);
`

const InsideSystemContainer = styled.div`
    width: 100%;
    max-width: 1920px;
    margin: auto;
    display: flex;
    gap: 40px;
    padding: 20px;

    & div {
        width: 100%;
    }
`

const navItems = navItemsUpFinder;

const System = () => {
    return (
        <SystemContainer>
            <InsideSystemContainer>
                <Navbar 
                    navItems={navItems} 
                    active="Dados Pessoais"
                />
                
                <div>
                    <Subheader />
                    <Profile />
                </div>
            </InsideSystemContainer>
        </SystemContainer>
    )
}

export default System;