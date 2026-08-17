import { useSearchParams } from "react-router-dom";
import { CharacterDetail } from "../characters/components/detail/CharacterDetail";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import { MainContent } from "../components/main/MainContent";


export function DetailPage() {
    
    const [searchParams] = useSearchParams()
    const id = searchParams.get('id')

    const parsedId = id ? parseInt(id as string) : undefined
    
    return (
        <>
        <Header />
        <MainContent>
            <CharacterDetail id={parsedId} />
        </MainContent>
        <Footer />
        </>
    )
}