import Header from "../components/Header"
import Welcome from "../components/Welcome"

const UpFinder = () => {
    return (
        <div className="App">
            <Header
                logoPath="/img/iv/logo3.png"
                logoAlt="Logo da UpFind"
                linkLogin="#"
                linkCadastro="#"
            />
            <Welcome />
        </div>
    )
}

export default UpFinder