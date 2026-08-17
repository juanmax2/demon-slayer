interface FirstArcAppearance {
    name: string;
    description: string;
}

interface Affiliation {
    name: string;
    description: string;
}

export interface CombatStyle {
    id: number;
    name: string;
    description: string;
    img: string;
}

export interface Character{
    id: number;
    name: string;
    age: number;
    gender: string;
    race: string;
    description: string;
    img: string;
    quote: string;
    first_arc_appearance: FirstArcAppearance;
    affiliation: Affiliation;
    combat_style: CombatStyle[];
}