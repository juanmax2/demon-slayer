import { useSearchParams } from "react-router-dom";
import { useGetCharacters } from "../../../hooks/useGetList";
import { getCombatStyles } from "../../../service/CombatStyle.service";
import olaImg from "../../../assets/ola.webp"
import { CombatCard } from "./components/CombatCard";
import { Pagination } from "../../../characters/components/pagination/Pagination";
import './CombatList.css'
import { SearchName } from "../../../characters/components/list/components/SearchName";

export function CombatStyleList(){

    const [searchParams, setSearchParams] = useSearchParams()
    const page = parseInt(searchParams.get("page") || "1")
    const name = searchParams.get("name") || ""

    const params = {page: page, limit: 8, name: name}

    const {data, loading, error} = useGetCharacters(getCombatStyles, params)

    return (

        <>
        {loading && <img className="ola-img" src={olaImg} alt="Ola de dibujo" />}
        {error && <p>{error.message}</p>}
        {data && (
            <>  
                <SearchName placeholder="Sun Breathing..." />
                <ul>
                    {data.content.map((cs) => (
                        <CombatCard key={cs.id} combatStyle={cs} />
                    ))}
                </ul>

                <Pagination 
                    currentPage={data?.pagination?.currentPage || 1}
                    totalPages={data?.pagination?.totalPages || 1}
                    onPageChange={(newPage) => {
                        setSearchParams({page: newPage.toString(), name: name})
                    }} />
            </>
        )}
        </>
    )

}