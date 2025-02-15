import Depoiments from "../components/Depoiments"
import Header from "../components/Header"
import Plans from "../components/Plans"
import Process from "../components/Process"
import Questions from "../components/Questions"
import Topics from "../components/Topics"
import Welcome from "../components/Welcome"
import EndCta from "../components/EndCta"
import Footer from "../components/Footer"
import { StyledSpan } from "../components/Title"

const listTopics = [
    {
        icon: 'document',
        text: 'Receba o contato direto de leads qualificados'
    },
    {
        icon: 'web',
        text: 'Tudo feito 100% online, sem sair de casa'
    },
    {
        icon: 'lock',
        text: 'Garanta sua segurança com o modo UpSafety'
    }
]

const steps = [
    {
        title: '1 - Criação do projeto',
        desc: 'O cliente irá preencher um formulário fornecendo todas as informações necessárias sobre o projeto',
        align: 'right'
    },
    {
        title: '2 - Direcionamento',
        desc: 'Nosso algoritmo irá selecionar os desenvolvedores que mais se enquadram no projeto',
        align: 'left'
    },
    {
        title: '3 - Contato e Orçamento',
        desc: 'Os projetos compatíveis com suas skills aparecerão no seu painel de dev. Você escolhe em quais quer participar e recebe o contato do cliente para negociar diretamente',
        align: 'right'
    },
    {
        title: '4 - Fechamento',
        desc: 'Se o cliente decidir fechar o projeto com você, vocês devem definir juntos a melhor forma de fechamento entre as duas opções abaixo',
        align: 'left'
    }
    
]

const UpFound = () => {
    return (
        <div className="App">
            <Header
                logoPath="/img/iv/first-logo-for-devs.png"
                logoAlt="Logo da UpFind"
                linkLogin="#"
                linkCadastro="#"
            />

            <Welcome
                defaultColor="var(--color-sky-2)"
                text="Leads qualificados para todo tipo de programador"
                cta="Buscar"
                bkgUrl="/img/code.jpg"
            >
                Dev, esqueça a dificuldade para encontrar <StyledSpan $color="var(--color-sky-2)">clientes</StyledSpan>
            </Welcome>

            <Topics
                defaultColor="var(--color-sky-2)"
                defaultFilter="invert(38%) sepia(90%) saturate(1586%) hue-rotate(255deg) brightness(90%) contrast(97%)"
                list={listTopics}
            />
            <Process
                defaultColor="var(--color-sky-2)"
                steps={steps}
            />
            <Plans
                defaultColor="var(--color-sky-2)"
            />
            <Depoiments
                defaultColor="var(--color-sky-2)"
            />
            <Questions
                defaultColor="var(--color-sky-2)"
            />
            <EndCta
                defaultColor="var(--color-sky-2)"
            />
            <Footer
                defaultColor="var(--color-sky-2)"
            />
        </div>
    )
}

export default UpFound