// individual pokemon object
export interface Pokemon {
    name: string;
    url: string;
    id: string;
}

// Pokemon API response object model
export interface PokemonResults {
    results: Pokemon[];
}