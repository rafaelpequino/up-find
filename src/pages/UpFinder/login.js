import LoginForm from "../../components/Access/LoginForm"

const Login = () => {
    return (
        <LoginForm
            defaultColor="var(--color-sky-1)"
            username="UpFinder"
            logo="first-logo"
            navigate="/UpFinder/"
        />
    )
}

export default Login