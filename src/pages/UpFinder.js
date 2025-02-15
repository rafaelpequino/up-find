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
            />
            <Plans
                defaultColor="var(--color-sky-1)"
            />
            <Depoiments
                defaultColor="var(--color-sky-1)"
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