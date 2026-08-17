import olaImg from '../../assets/ola.webp';
import './Footer.css'
export function Footer() {
    return (
        <footer>
            <p>Footer</p>
            <img className="ola-img-footer" src={olaImg} alt="Ola de dibujo" />
        </footer>
    )
}