import type { ReactNode } from "react"
import { AuthContext } from "./AuthContext"
import { useAuthReducer } from "../../hooks/useReducer"

interface ProviderProps {
    children: ReactNode
}

export const AuthProvider = ({children}: ProviderProps) => {
    const {user, isAuthenticated, register, login: dispatchLogin, logout} = useAuthReducer()

    function login(email: string, password: string){
        const userLocal = window.localStorage.getItem('user')

        if (userLocal) {
            const userParsed = JSON.parse(userLocal)

            if (userParsed.user?.email === email && userParsed.user?.password === password){
                dispatchLogin(userParsed.user)
                return true
            }
        }

        return false
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

