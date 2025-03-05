import Navbar from "../../../components/System/Navbar"
import Subheader from "../../../components/System/Subheader"
import { navItemsUpFinder } from "../../../components/System/Navbar/navItems";
import { InsideSystemContainer, SystemContainer } from "../../../components/System/SystemContainer"
import MyProjectsUpFinder from "../../../components/System/MyProjectsUpFinder";
import { useState } from "react";

const navItems = navItemsUpFinder;

const MeusProjetos = () => {
    const [navStatus, setNavStatus] = useState('close');

    return (
        <SystemContainer>
            <InsideSystemContainer>
                <Navbar 
                    navStatus={navStatus}
                    setNavStatus={setNavStatus}
                    navItems={navItems} 
                    active="Meus Projetos"
                    imgLogo="first-logo"
                    defaultColor="var(--color-sky-1)"
                />
                
                <div>
                    <Subheader
                        defaultColor="var(--color-sky-1)"
                        surname="UpFinder"
                        setNavStatus={setNavStatus}
                    />
                    <MyProjectsUpFinder
                        defaultColor="var(--color-sky-1)"
                    />
                </div>
            </InsideSystemContainer>
        </SystemContainer>
    )
}

export default MeusProjetos