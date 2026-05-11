// Interface definition for the slice entities/CharacterCard

export interface CharacterCardProps {
    character: {
        id: number;
        name: string;
        image: string;
        status: string;
        species: string;
    };
}

export interface Character {
    id: number;
    name: string;
    image: string;
    status: string;
    species: string;
};