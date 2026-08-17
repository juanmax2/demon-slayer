
import { NavBar } from "./components/NavBar";
import './Header.css'
import logoImg from '../../assets/logo.webp';

export function Header() {

    return (
        <header>
            <img className="logo-img" src={logoImg} alt="Logo Demon Slayer" />
            <NavBar />
        </header>
    )
}