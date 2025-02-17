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

const loosePlan = [
    "Pagamento e contratação são realizados diretamente com o profissional",
    "Não nos responsabilizamos por eventuais problemas com o projeto ou pagamento"
]

const upSafetyPlan = [
    "Pagamento e contratação são realizados através da plataforma",
    "Qualquer eventual problema será resolvido diretamente pela plataforma",
    "Mais segurança para você, para o cliente e para o projeto"
]

const depoimentsList = [
    {
        text: 'Fui muito bem atendida, o profissional foi muito educado e fez um trabalho de qualidade. Valeu a pena, orçamento grátis e não é careiro.',
        name: 'João Pedro',
        desc: ' - desenvolvedor frontend'
    },
    {
        text: 'Os profissionais são pessoas dedicadas com seus serviços. Tudo o que é pedido é feito da maneira como foi pedido. Aprovado!',
        name: 'Jorge',
        desc: ' - desenvolvedor backend'
    },
    {
        text: 'Um excelente profissional, pontual e acima de tudo confiável. Foi bastante educado e atencioso com o trabalho, recomendo.',
        name: 'Osvaldo',
        desc: ' - desenvolvedor mobile'
    }
];

const questionsList = [
    {
        key: 'question01',
        question: 'Preciso pagar para me cadastrar?',
        answer: 'Não. Você apenas paga pelos trabalhos que contratar. Não existe nenhum custo adicional por parte da plataforma.'
    },
    {
        key: 'question02',
        question: 'Quanto custa?',
        answer: 'Não. Você apenas paga pelos trabalhos que contratar. Não existe nenhum custo adicional por parte da plataforma.'
    },
    {
        key: 'question03',
        question: 'Como funciona o pagamento pelo modo UpSafety?',
        answer: 'Não. Você apenas paga pelos trabalhos que contratar. Não existe nenhum custo adicional por parte da plataforma.'
    },
    {
        key: 'question04',
        question: 'A plataforma oferece garantia em relação ao pagamento?',
        answer: 'Não. Você apenas paga pelos trabalhos que contratar. Não existe nenhum custo adicional por parte da plataforma.'
    },
    {
        key: 'question05',
        question: 'Posso fechar o serviço por fora da plataforma?',
        answer: 'Não. Você apenas paga pelos trabalhos que contratar. Não existe nenhum custo adicional por parte da plataforma.'
    },
    {
        key: 'question06',
        question: 'O que faço se tiver um problema com um cliente?',
        answer: 'Não. Você apenas paga pelos trabalhos que contratar. Não existe nenhum custo adicional por parte da plataforma.'
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
                cta="Buscar Projeto"
                loosePlan={loosePlan}
                upSafetyPlan={upSafetyPlan}
            />
            <Depoiments
                defaultColor="var(--color-sky-2)"
                defaultFilter="invert(38%) sepia(90%) saturate(1586%) hue-rotate(255deg) brightness(90%) contrast(97%)"
                depoimentsList={depoimentsList}
            />
            <Questions
                defaultColor="var(--color-sky-2)"
                questionsList={questionsList}
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