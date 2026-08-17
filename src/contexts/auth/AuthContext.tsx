import { createContext} from "react";
import { type User } from "../../users/model/user.model";




interface AuthContextType {
    user: User
    isAuthenticated: boolean
    register: (userData: User) => void
    login: (email: string, password:string) => boolean
    logout: () => void
}

export const AuthContext = createContext<AuthContextType | null>(null)

