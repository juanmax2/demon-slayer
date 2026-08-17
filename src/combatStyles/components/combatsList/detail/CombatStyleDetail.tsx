import { Navigate } from "react-router-dom";
import { useFetchUnique } from "../../../../hooks/useGetUnique";
import { getCombatStyle } from "../../../../service/CombatStyle.service";
import { CardDetailCombat } from "./cardDetail/CardDetailCombat";

interface Props {
    id?: number
    name?: string
}

export function CombatStyleDetail({id, name}: Props) {
    


    const {data, loading, error} = useFetchUnique(getCombatStyle, {id, name})
    
    if (!id && !name) {
        return <Navigate to="/combatSyles" />
    }

    
    return (
        <>
            {loading && <p>Cargando...</p>}
            {error && <p>{error.message}</p>}
            {(data?.content && data?.content.length > 0) && 
                <CardDetailCombat combatStyle={data.content[0]}/>}
        </>
    )
}