import { useId, useRef, type ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";
import './SearchName.css'

interface Props {
    placeholder: string
}

export function SearchName({placeholder}: Props){
    
    const searchId = useId()
    const timeoutRef = useRef<number | null>(null)
    const [searchParams, setSearchParams] = useSearchParams()
    const page = searchParams.get("page") || "1"
    function onTextFilter(event: ChangeEvent<HTMLInputElement>) {
        const value = event.target.value

        if (timeoutRef.current){
            clearTimeout(timeoutRef.current)
        }
        if (value.trim() === "") {
            setSearchParams({ page: page})
        }else{
            timeoutRef.current = setTimeout(() =>{
            setSearchParams({ page: page, name: value })
        }, 600)
        }

    }

    return(
        <form className="form-search">
            <input 
            id={searchId}
            className="input-search" 
            type="text" 
            placeholder={placeholder}
            defaultValue={searchParams.get("name") || ""}
            onChange={onTextFilter}
            />
        </form>
    )
}