import axios from "axios";
import { LoadAbort } from "../utilities/LoadAbort";
import type { Character } from "../characters/model/Character.model";
import type { Params } from "../hooks/useGetList";

export interface Pagination{
    totalElements: number;
    elementsOnPage: number;
    currentPage: number;
    totalPages: number;
    previousPage:string;
    nextPage: string;
}

export interface APIResponseList{
    pagination: Pagination
    content: Character[]

}

export interface ParamsUnique{
    name?: string;
    id?: number;
}

export interface APIResponseUnique{
    content: Character[]
}
const BASE_URL = "https://www.demonslayer-api.com/api/v1/characters"

export function getCharacters({ page, limit, name }: Params) {
    const controller = LoadAbort()
    return { call: axios.get<APIResponseList>(`${BASE_URL}`, {
        signal: controller.signal,
        params: {page, limit, name}
        }),
    controller,
    }

}

export function getCharacter({ name, id }: ParamsUnique = {}) {
    const controller = LoadAbort()
    return {call: axios.get<APIResponseUnique>(`${BASE_URL}`, {
        signal: controller.signal,
        params: { name, id }
        }),
    controller
    }
}