import { useContext } from "react"
import { AuthContext } from "../contexts/auth/AuthContext"

export function useAuthContext() {
    const context = useContext(AuthContext)
    if (context === null){
        throw new Error("Context must be used with provider")
    }

    return context
}