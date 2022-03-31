// model for an single Pokemon object
export interface Pokemon {
    name: string;
    url: string;
    id: string;
}

// model for Pokemon API response object
export interface PokemonResults {
    results: Pokemon[];
}