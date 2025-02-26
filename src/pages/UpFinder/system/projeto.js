import Navbar from "../../../components/System/Navbar"
import Subheader from "../../../components/System/Subheader"
import { navItemsUpFinder } from "../../../components/System/Navbar/navItems";
import { InsideSystemContainer, SystemContainer } from "../../../components/System/SystemContainer"
import Project from "../../../components/System/Project";

const navItems = navItemsUpFinder;

const Projeto = () => {
    return (
        <SystemContainer>
            <InsideSystemContainer>
                <Navbar
                    navItems={navItems} 
                    active="Meus Projetos"
                />
                
                <div>
                    <Subheader />
                    <Project />
                </div>
            </InsideSystemContainer>
        </SystemContainer>
    )
}

export default Projeto;