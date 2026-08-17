import axios from "axios";
import type { CombatStyleAlone } from "../combatStyles/model/CombatStyle.models";
import type { Params } from "../hooks/useGetList";
import { LoadAbort } from "../utilities/LoadAbort";
import type { ParamsUnique } from "./Character.service";

interface Pagination {
    totalElements: number;
    elementsOnPage: number;
    currentPage: number;
    totalPages: number;
}
interface APICombatResponse {
    pagination: Pagination
    content: CombatStyleAlone[]
}

interface APICombatResponseUnique {
    content: CombatStyleAlone[]
}

const BASE_URL_COMBAT = "https://www.demonslayer-api.com/api/v1/combat-styles"


export function getCombatStyles({page, limit, name}: Params) {
    const controller = LoadAbort()
    return {call: axios.get<APICombatResponse>(`${BASE_URL_COMBAT}`, {
        params: {page, limit, name},
        signal: controller.signal
    }), controller
}


}

export function getCombatStyle({id, name}: ParamsUnique = {}) {
    const controller = LoadAbort()
    return {call: axios.get<APICombatResponseUnique>(`${BASE_URL_COMBAT}`, {
        params: {id, name},
        signal: controller.signal
    }), controller
}
}