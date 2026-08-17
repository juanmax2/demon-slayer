import { Link } from "react-router-dom";
import type { Character } from "../../model/Character.model";
import "./CharacterCard.css"

interface Props{
    character: Character
}

export function CharacterCard({character}: Props){
    return(
        
        <li className="char-container">
            <img className="char-img" src={character.img} alt={character.name} />
            <div className="char-info">
                <strong className="char-name">{character.name}</strong>
                <p className="char-quote">{character.quote}</p>
                <Link to={`/private/detail?id=${character.id}`}>Saber más</Link>
            </div>
        </li>

    )
}