import Header from "../components/Header"
import Plans from "../components/Plans"
import Process from "../components/Process"
import Topics from "../components/Topics"
import Welcome from "../components/Welcome"

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
        </div>
    )
}

export default UpFinder