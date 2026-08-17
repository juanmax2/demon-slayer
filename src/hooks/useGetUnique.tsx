import type { AxiosResponse } from "axios";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import type { ParamsUnique } from "../service/Character.service";



interface useFetchProps<T>{
    call: Promise<AxiosResponse<T>>
    controller: AbortController
}

type Data<T> = T | null
type CustomError = Error | null

export interface FetchUniqueResponse<T>{
    data: Data<T>;
    loading: boolean;
    error: CustomError
    fetch: (params?: ParamsUnique) => () => void
}


export function useFetchUnique<T,>(apiCall:(params?: ParamsUnique) => useFetchProps<T>, params?: ParamsUnique): FetchUniqueResponse<T> {
    const [data, setData] = useState<Data<T>>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<CustomError>(null)

    const id = params?.id
    const name = params?.name

    const fetchUnique = useCallback((p?: ParamsUnique) => {
        
        setLoading(true)
        setError(null)
        
        const { call, controller } = apiCall(p || {id, name})
        
        
        call.then(response => {
            setData(response.data)
        })
        .catch((err: Error) => {
            if (!axios.isCancel(err)) {
                setError(err)
            }
        })
        .finally(() => {
            setLoading(false)
        })

        return () => controller.abort()
    }, [apiCall, name, id])



    useEffect(()=> {
        const cleanup = fetchUnique()
        return () => {
            if (cleanup) cleanup();
        }
    }, [fetchUnique])

    return { data, loading, error, fetch:fetchUnique}
}