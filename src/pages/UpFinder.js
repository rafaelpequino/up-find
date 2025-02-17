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
        text: 'Receba até 3 orçamentos de especialistas'
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
        desc: 'Você irá preencher um formulário fornecendo todas as informações necessárias sobre o projeto',
        align: 'right'
    },
    {
        title: '2 - Direcionamento',
        desc: 'Nosso algoritmo irá selecionar os desenvolvedores que mais se enquadram em suas necessidades',
        align: 'left'
    },
    {
        title: '3 - Contato e Orçamento',
        desc: 'Até 3 profissionais entrarão em contato para fornecer informações e orçamentos',
        align: 'right'
    },
    {
        title: '4 - Fechamento',
        desc: 'Após decidir qual o profissional que irá realizar o serviço, você poderá escolher uma das formas abaixo para finalizar a contratação',
        align: 'left'
    }
    
]

const loosePlan = [
    "Pagamento e contratação são realizados diretamente com o cliente",
    "Não nos responsabilizamos por eventuais problemas com o projeto ou pagamento"
]

const upSafetyPlan = [
    "Pagamento e contratação são realizados através da plataforma",
    "Pagamento e contratação são realizados diretamente através da plataforma",
    "Mais segurança para você, para o cliente e para o projeto"
]

const depoimentsList = [
    {
        text: 'Fui muito bem atendida, o profissional foi muito educado e fez um trabalho de qualidade. Valeu a pena, orçamento grátis e não é careiro.',
        name: 'Ana Paula',
        desc: 'contratou João Pedro'
    },
    {
        text: 'Os profissionais são pessoas dedicadas com seus serviços. Tudo o que é pedido é feito da maneira como foi pedido. Aprovado!',
        name: 'Jorge',
        desc: 'contratou Alícia'
    },
    {
        text: 'Um excelente profissional, pontual e acima de tudo confiável. Foi bastante educado e atencioso com o trabalho, recomendo.',
        name: 'Osvaldo',
        desc: 'contratou Rafael'
    }
];

const UpFinder = () => {

    return (
        <div className="App">
            <Header
                logoPath="/img/iv/first-logo.png"
                logoAlt="Logo da UpFind"
                linkLogin="#"
                linkCadastro="#"
            />

            <Welcome
                defaultColor="var(--color-sky-1)"
                text="Encontre o melhor profissional para o seu projeto"
                cta="Criar"
                bkgUrl="/img/team.jpg"
            >
                Os melhores <StyledSpan $color="var(--color-sky-1)">desenvolvedores</StyledSpan> reunidos em um só lugar
            </Welcome>

            <Topics
                defaultColor="var(--color-sky-1)"
                defaultFilter="invert(27%) sepia(98%) saturate(7041%) hue-rotate(202deg) brightness(99%) contrast(104%)"
                list={listTopics}
            />
            <Process
                defaultColor="var(--color-sky-1)"
                steps={steps}
            />
            <Plans
                defaultColor="var(--color-sky-1)"
                cta="Criar Projeto"
                loosePlan={loosePlan}
                upSafetyPlan={upSafetyPlan}
            />
            <Depoiments
                defaultColor="var(--color-sky-1)"
                defaultFilter="invert(27%) sepia(98%) saturate(7041%) hue-rotate(202deg) brightness(99%) contrast(104%)"
                depoimentsList={depoimentsList}
            />
            <Questions
                defaultColor="var(--color-sky-1)"
            />
            <EndCta
                defaultColor="var(--color-sky-1)"
            />
            <Footer
                defaultColor="var(--color-sky-1)"
            />
        </div>
    )
}

export default UpFinder