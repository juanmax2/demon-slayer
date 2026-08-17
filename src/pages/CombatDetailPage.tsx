import { useSearchParams } from "react-router-dom";
import { Header } from "../components/header/Header";
import { MainContent } from "../components/main/MainContent";
import { CombatStyleDetail } from "../combatStyles/components/combatsList/detail/CombatStyleDetail";
import { Footer } from "../components/footer/Footer";


export function CombatDetailPage() {

    const [searchParams] = useSearchParams()

    const id = searchParams.get('id')

    const parsedId = id ? parseInt(id as string) : undefined

    return (
        <>
        <Header />
        <MainContent>
            <CombatStyleDetail id={parsedId} />
        </MainContent>
        <Footer />
        </>
    )

    
}