import { Link, useNavigate } from "react-router-dom"
import { useAuthContext } from "../../../hooks/useAuthContext"
import './NavBar.css'

export function NavBar() {
    const {isAuthenticated, logout} = useAuthContext()
    const navigate = useNavigate()


    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        logout()
        navigate("/login")

    }

    const url = window.location.pathname
    console.log(url)
    
    return (

            <nav className="nav-bar">
                <ul>
                    {
                        isAuthenticated ? 
                            <>
                            <li className={`${url === '/private/characters' ? 'active-link' : ''}`}><Link to='/private/characters'>Characters</Link></li>
                            <li className={`${url === '/private/combatStyles' ? 'active-link' : ''}`}><Link to='/private/combatStyles'>Combat Styles</Link></li>
                            <li>
                                <button className="btn" onClick={handleClick}>
                                    Logout
                                </button>
                            </li>
                            </>
                            :
                            <>
                            <li><Link to='/login'>Login</Link></li>
                            <li><Link to='/register'>Register</Link></li>
                            </>
                    }
                </ul>
            </nav>
    )
}