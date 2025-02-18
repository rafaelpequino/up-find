import LoginForm from "../../components/Access/LoginForm"

const Login = () => {
    return (
        <LoginForm
            defaultColor="var(--color-sky-2)"
            username="UpFound"
            logo="first-logo-for-devs"
            shadowColor="rgba(121, 20, 141, 0.1)"
            navigate="/upfound/"
        />
    )
}

export default Login