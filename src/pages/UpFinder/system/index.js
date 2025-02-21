import Navbar from "../../../components/System/Navbar";
import { navItemsUpFinder } from "../../../components/System/Navbar/navItems";
import Subheader from "../../../components/System/Subheader";
import Profile from "../../../components/System/Profile";
import { InsideSystemContainer, SystemContainer } from "../../../components/System/SystemContainer";

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
                    <Profile
                        defaultColor="var(--color-sky-1)"
                    />
                </div>
            </InsideSystemContainer>
        </SystemContainer>
    )
}

export default System;