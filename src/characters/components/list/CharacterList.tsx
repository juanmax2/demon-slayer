import { useGetCharacters } from "../../../hooks/useGetList";
import { getCharacters } from "../../../service/Character.service";
import olaImg from "../../../assets/ola.webp"
import type { Character } from "../../model/Character.model";
import { CharacterCard } from "../card/CharacterCard";
import "./CharacterList.css"
import { Pagination } from "../pagination/Pagination";
import { useSearchParams } from "react-router-dom";
import { SearchName } from "./components/SearchName";


export function CharacterList(){
    
    const [searchParams, setSearchParams] = useSearchParams()
    const page = parseInt(searchParams.get("page") || "1")
    const name = searchParams.get("name") || ""


    const params = {page:page, limit: 8, name: name}
    const {data, loading, error} = useGetCharacters(getCharacters, params)



    return (
        <>
            
            {loading && <img className="ola-img" src={olaImg} alt="Ola de dibujo" />}
            {error && <p>{error.message}</p>}
            {data && (
                <>
                    <SearchName placeholder="Rengoku..-" />
                    <ul>
                        {data.content.map((character: Character) => {
                            return (<CharacterCard key={character.id} character={character} />)
                        })}
                    </ul>
                    <Pagination 
                        currentPage={data?.pagination?.currentPage || 1}
                        totalPages={data?.pagination?.totalPages || 1}
                        onPageChange={(newPage: number) => {
                            setSearchParams({ page: newPage.toString(), name: name })
                        }}
                    />
                </>
            )}
        </>
    )
}