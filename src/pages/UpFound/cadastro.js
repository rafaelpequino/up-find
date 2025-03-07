import CadastroForm from "../../components/Access/CadastroForm"

const Cadastro = () => {
    return (
        <CadastroForm
            defaultColor="var(--color-sky-2)"
            username="UpFound"
            logo="first-logo-for-devs"
            shadowColor="rgba(121, 20, 141, 0.1)"  
            navigate="/UpFound/"
        />
    )
}

export default Cadastro