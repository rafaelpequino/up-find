import Navbar from "../../../components/System/Navbar";
import { navItemsUpFound } from "../../../components/System/Navbar/navItems";
import Subheader from "../../../components/System/Subheader";
import { InsideSystemContainer, SystemContainer } from "../../../components/System/SystemContainer";
import ProfessionalData from "../../../components/System/ProfessionalData";
import { useState } from "react";

const navItems = navItemsUpFound;

const DadosProfissionais = () => {
    const [navStatus, setNavStatus] = useState('close');
    
    return (
        <SystemContainer>
            <InsideSystemContainer>
                <Navbar 
                    navStatus={navStatus}
                    setNavStatus={setNavStatus}
                    navItems={navItems} 
                    active="Dados Profissionais"
                    imgLogo="first-logo-for-devs"
                    defaultColor="var(--color-sky-2)"
                />
                
                <div>
                    <Subheader
                        defaultColor="var(--color-sky-2)"
                        surname="Dev"
                        setNavStatus={setNavStatus}
                    />
                    <ProfessionalData
                        defaultColor="var(--color-sky-2)"
                    />
                </div>
            </InsideSystemContainer>
        </SystemContainer>
    )
}

export default DadosProfissionais;