import Navbar from "../../../components/System/Navbar"
import Subheader from "../../../components/System/Subheader"
import { navItemsUpFinder } from "../../../components/System/Navbar/navItems";
import { InsideSystemContainer, SystemContainer } from "../../../components/System/SystemContainer"
import Project from "../../../components/System/Project";
import { useState } from "react";

const navItems = navItemsUpFinder;

const Projeto = () => {
    const [navStatus, setNavStatus] = useState('close');
    
    return (
        <SystemContainer>
            <InsideSystemContainer>
                <Navbar 
                    navStatus={navStatus}
                    setNavStatus={setNavStatus}
                    navItems={navItems} 
                    imgLogo="first-logo"
                    defaultColor="var(--color-sky-1)"
                />
                
                <div>
                    <Subheader
                        defaultColor="var(--color-sky-1)"
                        surname="UpFinder"
                        setNavStatus={setNavStatus}
                    />
                    <Project />
                </div>
            </InsideSystemContainer>
        </SystemContainer>
    )
}

export default Projeto;