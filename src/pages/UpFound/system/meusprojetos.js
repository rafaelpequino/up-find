import { useState } from "react";
import Navbar from "../../../components/System/Navbar";
import { navItemsUpFound } from "../../../components/System/Navbar/navItems";
import Subheader from "../../../components/System/Subheader";
import { InsideSystemContainer, SystemContainer } from "../../../components/System/SystemContainer";
import MyProjects from "../../../components/System/MyProjects";

const navItems = navItemsUpFound;

const projectsList =  [
    {
        priority: "Alta",
        type: "Aplicativo",
        title: "App de delivery para restaurante",
        desc: "Preciso de um app intuitivo, que permita pedidos personalizados e integração com meios de pagamento."
    },
    {
        priority: "Baixa",
        type: "Plataforma",
        title: "Sistema de gerenciamento para academia",
        desc: "Um sistema que permita cadastrar alunos, acompanhar pagamentos e agendar aulas."
    },
    {
        priority: "Alta",
        type: "Website",
        title: "Landing page para lançamento de produto",
        desc: "Uma página moderna e impactante para atrair leads e aumentar as vendas."
    },
    {
        priority: "Média",
        type: "Website",
        title: "Portfólio para fotógrafo",
        desc: "Um site clean e profissional para exibir meu trabalho e facilitar o contato com clientes."
    },
    {
        priority: "Média",
        type: "E-commerce",
        title: "Loja virtual de eletrônicos",
        desc: "Preciso de um e-commerce responsivo e seguro, com carrinho de compras e integração com estoque."
    },
    {
        priority: "Baixa",
        type: "Aplicativo",
        title: "App de controle financeiro pessoal",
        desc: "Um app simples para organizar despesas e receitas, com gráficos e relatórios mensais."
    }
];


const MeusProjetos = () => {
    const [navStatus, setNavStatus] = useState('close');

    return (
        <SystemContainer>
            <InsideSystemContainer>
                <Navbar 
                    navStatus={navStatus}
                    setNavStatus={setNavStatus}
                    navItems={navItems} 
                    active="Meus Projetos"
                    imgLogo="first-logo-for-devs"
                    defaultColor="var(--color-sky-2)"
                />
                
                <div>
                    <Subheader
                        defaultColor="var(--color-sky-2)"
                        surname="UpFinder"
                        setNavStatus={setNavStatus}
                    />

                    <MyProjects
                        projectsList={projectsList}
                    />
                </div>
            </InsideSystemContainer>
        </SystemContainer>
    )
}

export default MeusProjetos