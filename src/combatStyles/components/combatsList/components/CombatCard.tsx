import { Link } from "react-router-dom";
import type { CombatStyleAlone } from "../../../model/CombatStyle.models";
import './CombatCard.css'
import logoImg from '../../../../assets/logo.webp';


interface Props{
    combatStyle: CombatStyleAlone
}

export function CombatCard({combatStyle}: Props){

    return (
        <li className="combat-container">
            <img className={`${combatStyle.img ? 'with-img' : 'no-img'} combat-img`} src={combatStyle.img ? combatStyle.img : logoImg} alt={combatStyle.name} />
            <div className="combat-info">
                <strong className="combat-name">{combatStyle.name}</strong>
                <p className="combat-quote">{combatStyle.description}</p>
                <Link to={`/private/cdetail?id=${combatStyle.id}`}>Saber más</Link>
            </div>
        </li>
    )
}