import { useAuthContext } from "../hooks/useAuthContext";
import { Navigate, Outlet } from "react-router-dom";



export function PrivateGuard() {
    
    const {isAuthenticated} = useAuthContext()

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />


}