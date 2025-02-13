import Depoiments from "../components/Depoiments"
import Header from "../components/Header"
import Plans from "../components/Plans"
import Process from "../components/Process"
import Questions from "../components/Questions"
import Topics from "../components/Topics"
import Welcome from "../components/Welcome"
import EndCta from "../components/EndCta"
import Footer from "../components/Footer"

const UpFinder = () => {
    return (
        <div className="App">
            <Header
                logoPath="/img/iv/first-logo.png"
                logoAlt="Logo da UpFind"
                linkLogin="#"
                linkCadastro="#"
            />
            <Welcome />
            <Topics />
            <Process />
            <Plans />
            <Depoiments />
            <Questions />
            <EndCta />
            <Footer />
        </div>
    )
}

export default UpFinder