import Navbar from "../../../components/System/Navbar";
import { navItemsUpFinder } from "../../../components/System/Navbar/navItems";
import PaymentsHistoric from "../../../components/System/PaymentsHistoric";
import Subheader from "../../../components/System/Subheader";
import { InsideSystemContainer, SystemContainer } from "../../../components/System/SystemContainer";

const navItems = navItemsUpFinder;

const System = () => {
    return (
        <SystemContainer>
            <InsideSystemContainer>
                <Navbar 
                    navItems={navItems} 
                    active="Histórico de Pagamentos"
                />
                
                <div>
                    <Subheader />
                    <PaymentsHistoric />
                </div>
            </InsideSystemContainer>
        </SystemContainer>
    )
}

export default System;