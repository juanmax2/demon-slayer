import { Footer } from "../components/footer/Footer";
import { RegisterForm } from "../components/form/RegisterForm";
import { Header } from "../components/header/Header";
import { MainContent } from "../components/main/MainContent";


export function RegisterPage() {

    return(
        <>
            <Header />
            <MainContent>
                <RegisterForm />
            </MainContent>
            <Footer />
        </>
    )
}