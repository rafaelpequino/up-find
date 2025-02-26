import Navbar from "../../../components/System/Navbar";
import { navItemsUpFound } from "../../../components/System/Navbar/navItems";
import Subheader from "../../../components/System/Subheader";
import { InsideSystemContainer, SystemContainer } from "../../../components/System/SystemContainer";
import ProfessionalData from "../../../components/System/ProfessionalData";

const navItems = navItemsUpFound;

const DadosProfissionais = () => {
    return (
        <SystemContainer>
            <InsideSystemContainer>
                <Navbar 
                    navItems={navItems} 
                    active="Dados Profissionais"
                    imgLogo="first-logo-for-devs"
                    defaultColor="var(--color-sky-2)"
                />
                
                <div>
                    <Subheader
                        defaultColor="var(--color-sky-2)"
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