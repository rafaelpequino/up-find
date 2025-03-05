import Navbar from "../../../components/System/Navbar";
import { navItemsUpFound } from "../../../components/System/Navbar/navItems";
import Subheader from "../../../components/System/Subheader";
import Profile from "../../../components/System/Profile";
import { InsideSystemContainer, SystemContainer } from "../../../components/System/SystemContainer";
import { useState } from "react";

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
                    active="Dados Pessoais"
                    imgLogo="first-logo-for-devs"
                    defaultColor="var(--color-sky-2)"
                />
                
                <div>
                    <Subheader
                        defaultColor="var(--color-sky-2)"
                        surname="Dev"
                        setNavStatus={setNavStatus}
                    />
                    <Profile
                        defaultColor="var(--color-sky-2)"
                    />
                </div>
            </InsideSystemContainer>
        </SystemContainer>
    )
}

export default System;