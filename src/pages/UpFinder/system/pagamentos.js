import { useState } from "react";
import Navbar from "../../../components/System/Navbar";
import { navItemsUpFinder } from "../../../components/System/Navbar/navItems";
import PaymentsHistoric from "../../../components/System/PaymentsHistoric";
import Subheader from "../../../components/System/Subheader";
import { InsideSystemContainer, SystemContainer } from "../../../components/System/SystemContainer";

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
                    active="Histórico de Pagamentos"
                    imgLogo="first-logo"
                    defaultColor="var(--color-sky-1)"
                />
                
                <div>
                    <Subheader
                        defaultColor="var(--color-sky-1)"
                        surname="UpFinder"
                        setNavStatus={setNavStatus}
                    />
                    <PaymentsHistoric />
                </div>
            </InsideSystemContainer>
        </SystemContainer>
    )
}

export default System;