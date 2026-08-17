
export interface CombatStyleCharacter{
    id: number;
    name: string
    description: string;
}

export interface CombatStyleAlone{
    id: number;
    name: string;
    description: string;
    img: string;
    combat_style_character: CombatStyleCharacter[]

}