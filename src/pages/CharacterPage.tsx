
import { CharacterList } from "../characters/components/list/CharacterList";
import { Layout } from "../components/layout/Layout";
import './CharacterPage.css'

export function CharactersPage() {
   
    return (
       <>
            <Layout>
                <h1 className="character-title">Characters</h1>
                <CharacterList />
            </Layout>
       </>
    )
}