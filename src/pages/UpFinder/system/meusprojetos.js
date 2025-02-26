import Navbar from "../../../components/System/Navbar"
import Subheader from "../../../components/System/Subheader"
import { navItemsUpFinder } from "../../../components/System/Navbar/navItems";
import { InsideSystemContainer, SystemContainer } from "../../../components/System/SystemContainer"
import MyProjects from "../../../components/System/MyProjects";

const navItems = navItemsUpFinder;

const MeusProjetos = () => {
    return (
        <SystemContainer>
            <InsideSystemContainer>
                <Navbar 
                    navItems={navItems} 
                    active="Meus Projetos"
                    imgLogo="first-logo"
                    defaultColor="var(--color-sky-1)"
                />
                
                <div>
                    <Subheader
                        defaultColor="var(--color-sky-1)"
                    />
                    <MyProjects />
                </div>
            </InsideSystemContainer>
        </SystemContainer>
    )
}

export default MeusProjetos