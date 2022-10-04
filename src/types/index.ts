type Group = "Water" | "Fire" | "Air" | "Leaf" | "Ice" | "Ground"

interface Skill {
    name: string;
    damage: number;
}

export interface Pokemon {
    name: string;
    group: Group
    hp: number;
    mana: number;
    skills: Skill[];
    description?: string;
}