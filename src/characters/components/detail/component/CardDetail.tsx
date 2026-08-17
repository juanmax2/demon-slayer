import { Link } from "react-router-dom";
import type { Character } from "../../../model/Character.model";
import './CardDetail.css'

interface Props {
    char: Character
}

export function CardDetail({char}: Props) {

    return (
        <div key={char.id} className="char-detail-comtainer">
            <img className="char-detail-img" src={char.img} alt={char.name} />
            <div>
                <strong className="char-detail-name" >{char.name}</strong>
                <p>{char.description}</p>

                {char.combat_style.map(cs => (
                    <div key={cs.id} className="char-combat-style">
                        <strong>Combat Stayle</strong>
                        <strong>{cs.name}</strong>
                        <p>{cs.description}</p>
                        <Link to={`/private/cdetail?id=${cs.id}`}>Ver estilo</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}