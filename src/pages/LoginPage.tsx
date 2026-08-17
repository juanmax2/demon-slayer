import { LoginForm } from "../components/form/LoginForm";
import { Layout } from "../components/layout/Layout";


export function LoginPage() {
    return (
        <Layout>
            <h1>Login</h1>
            <LoginForm />
        </Layout>
    )
}