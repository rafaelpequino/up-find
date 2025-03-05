import Navbar from "../../../components/System/Navbar";
import { navItemsUpFinder } from "../../../components/System/Navbar/navItems";
import Subheader from "../../../components/System/Subheader";
import Profile from "../../../components/System/Profile";
import { InsideSystemContainer, SystemContainer } from "../../../components/System/SystemContainer";
import { useState } from "react";

const navItems = navItemsUpFinder;

const System = () => {
    const [navStatus, setNavStatus] = useState('close');
    
    return (
        <SystemContainer>
            <InsideSystemContainer>
                <Navbar 
                    navStatus={navStatus}
                    setNavStatus={setNavStatus}
                    navItems={navItems} 
                    active="Dados Pessoais"
                    imgLogo="first-logo"
                    defaultColor="var(--color-sky-1)"
                />
                
                <div>
                    <Subheader
                        defaultColor="var(--color-sky-1)"
                        surname="UpFinder"
                        setNavStatus={setNavStatus}
                    />
                    <Profile
                        defaultColor="var(--color-sky-1)"
                    />
                </div>
            </InsideSystemContainer>
        </SystemContainer>
    )
}

export default System;