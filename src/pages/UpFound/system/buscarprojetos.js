import { useState } from "react";
import Navbar from "../../../components/System/Navbar";
import { navItemsUpFound } from "../../../components/System/Navbar/navItems";
import Subheader from "../../../components/System/Subheader";
import { InsideSystemContainer, SystemContainer } from "../../../components/System/SystemContainer";

const navItems = navItemsUpFound;

const System = () => {
    const [navStatus, setNavStatus] = useState('close');
    
    return (
        <SystemContainer>
            <InsideSystemContainer>
                <Navbar 
                    navStatus={navStatus}
                    setNavStatus={setNavStatus}
                    navItems={navItems} 
                    active="Buscar Projetos"
                    imgLogo="first-logo-for-devs"
                    defaultColor="var(--color-sky-2)"
                />
                
                <div>
                    <Subheader
                        defaultColor="var(--color-sky-2)"
                        surname="Dev"
                        setNavStatus={setNavStatus}
                    />
                </div>
            </InsideSystemContainer>
        </SystemContainer>
    )
}

export default System;