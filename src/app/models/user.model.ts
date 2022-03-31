import { Pokemon } from "./pokemon.model";

// model for the User object
export interface User {
    id: number;
    username: string;
    pokemon: Pokemon[];
}
