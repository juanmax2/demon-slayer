import type { AxiosResponse } from "axios"
import axios from "axios"
import { useCallback, useEffect, useState } from "react"

export interface Params {
    page: number;
    limit: number;
    name?: string;
}

export interface useFetchProps<T>{
    call: Promise<AxiosResponse<T>>,
    controller: AbortController
}

export type Data<T> = T | null
export type CustomError = Error | null

export interface FetchResponse<T>{
    data: Data<T>;
    loading: boolean;
    error: CustomError;
    fetch: (params: Params) => void
}

export function useGetCharacters<T,>(apiCall: (params: Params) => useFetchProps<T>, params: Params): FetchResponse<T> {
    const [data, setData] = useState<Data<T>>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<CustomError>(null)
    const {page, limit, name} = params
    const fetch = useCallback(() => {
        setLoading(true)
        setError(null)
        const {call, controller} = apiCall({ page, limit, name })
        call.then(response => {
            setData(response.data)
        }).catch((err: Error) => {
            if (!axios.isCancel(err)) {
                setError(err)
                return
            }
        }).finally(() => {
            setLoading(false)
        })

        return () => controller.abort()
    }, [apiCall, page, limit, name])

    useEffect(() => {
        return fetch()
    }, [fetch])

    return {data, loading, error, fetch}
}