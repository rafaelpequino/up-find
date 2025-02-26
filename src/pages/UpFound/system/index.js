import Navbar from "../../../components/System/Navbar";
import { navItemsUpFound } from "../../../components/System/Navbar/navItems";
import Subheader from "../../../components/System/Subheader";
import Profile from "../../../components/System/Profile";
import { InsideSystemContainer, SystemContainer } from "../../../components/System/SystemContainer";

const navItems = navItemsUpFound;

const System = () => {
    return (
        <SystemContainer>
            <InsideSystemContainer>
                <Navbar 
                    navItems={navItems} 
                    active="Dados Pessoais"
                    imgLogo="first-logo-for-devs"
                    defaultColor="var(--color-sky-2)"
                />
                
                <div>
                    <Subheader
                        defaultColor="var(--color-sky-2)"
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