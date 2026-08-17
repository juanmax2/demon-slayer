import { useFetchUnique } from "../../../hooks/useGetUnique"
import { getCharacter } from "../../../service/Character.service"
import olaImg from "../../../assets/ola.webp"
import { CardDetail } from "./component/CardDetail"
import { Navigate } from "react-router-dom"


interface Props{
    id?: number,
    name?: string
}

export function CharacterDetail({id, name}: Props) {

    const {data, loading, error} = useFetchUnique(getCharacter, {id, name})

    if (!id && !name) {
        return <Navigate to="/characters" replace />
    }   


    return (
        <>
            {loading && <img className="ola-img" src={olaImg} alt="Ola de dibujo" />}
            {error && <p>{error.message}</p>}
            {data?.content && data.content.length > 0 && (
                <CardDetail char={data?.content[0]} />
            )}
        </>
        
    )
}