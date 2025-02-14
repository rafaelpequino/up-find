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
            />
            <Process
                defaultColor="var(--color-sky-2)"
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