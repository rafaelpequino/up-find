import CadastroForm from "../../components/Access/CadastroForm"

const Cadastro = () => {
    return (
        <CadastroForm
            defaultColor="var(--color-sky-1)"
            username="UpFinder"
            logo="first-logo"
            shadowColor="rgba(0, 123, 255, .1)"  
            navigate="/upfinder/"
        />
    )
}

export default Cadastro