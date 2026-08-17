import './CardDetailCombat.css'
import type { CombatStyleAlone } from "../../../../model/CombatStyle.models";
import { Link } from 'react-router-dom';

interface Props{
    combatStyle: CombatStyleAlone
}

export function CardDetailCombat({combatStyle}: Props){

    return(
        <div key={combatStyle.id} className="cs-detail-comtainer">
            <img className="cs-detail-img" src={combatStyle.img} alt={combatStyle.name} />
            <div>
                <strong className="cs-detail-name" >{combatStyle.name}</strong>
                <p>{combatStyle.description}</p>
                {combatStyle.combat_style_character.length > 0 && 
                <>
                    <h3>Personajes que lo usan</h3>
                    <ul>
                        { combatStyle.combat_style_character.map((cs) => (
                            <li className='combat-style-detail' key={cs.id}>
                                <p>{cs.name}</p>
                                <p>{cs.description}</p>
                                <Link to={`/private/detail?id=${cs.id}`}>Ver personaje</Link>
                            </li>
                    ))}
                    </ul>
                </>
                }

            </div>
        </div>
    )
}