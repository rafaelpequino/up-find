import Navbar from "../../../components/System/Navbar"
import Subheader from "../../../components/System/Subheader"
import { navItemsUpFinder } from "../../../components/System/Navbar/navItems";
import { InsideSystemContainer, SystemContainer } from "../../../components/System/SystemContainer"

const navItems = navItemsUpFinder;

const MeusProjetos = () => {
    return (
        <SystemContainer>
            <InsideSystemContainer>
                <Navbar
                    navItems={navItems} 
                    active="Meus Projetos"
                />
                
                <div>
                    <Subheader />
                </div>
            </InsideSystemContainer>
        </SystemContainer>
    )
}

export default MeusProjetos