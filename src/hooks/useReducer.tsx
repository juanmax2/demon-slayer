import { useEffect, useReducer } from "react";
import { initialState, reducer } from "../reducers/auth.reducer";
import type { User } from "../users/model/user.model";

function engageLocal(){
        const localData= window.localStorage.getItem('user')
        return localData ? JSON.parse(localData) : initialState
}

export function useAuthReducer() {

    const [state, dispatch]  = useReducer(reducer,initialState, engageLocal)
    
    useEffect(() => {
        window.localStorage.setItem('user', JSON.stringify(state))
    }, [state])

    const register = (user: User) => {
        dispatch({type: 'REGISTER', payload: user})
    }

    const login = (user: User) => {
        dispatch({type: 'LOGIN', payload: user})
    }

    const logout = () => {
        dispatch({type: 'LOGOUT'})
    }

    return {
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        register,
        login,
        logout
    }

}