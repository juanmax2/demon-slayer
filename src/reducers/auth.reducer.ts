import { EmptyUser, type User } from "../users/model/user.model";

export interface AuthState {
    user: User
    isAuthenticated: boolean
}
export const initialState: AuthState = {
    user: EmptyUser,
    isAuthenticated: false
}

type AuthActions =
 | {type: 'REGISTER'; payload: User}
 | {type: 'LOGIN'; payload: User}
 | {type: 'LOGOUT'}


export const reducer = (state: AuthState, action: AuthActions) => {
    const { type } = action
    
    switch(type){
        case 'REGISTER': {
            return {
                ...state,
                user: action.payload
            }
        }
        case 'LOGIN':{ 
        return {
            ...state,
            user: action.payload,
            isAuthenticated: true
        }}

        case 'LOGOUT':{
            return initialState
        }

        default:
            return state
    }
}