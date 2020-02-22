import { PokemonEntry } from './PokemonEntry';
export declare enum Game {
    SHIELD = 0,
    SWORD = 1,
}
export interface GameEvent {
    game: Game;
    pokemons: PokemonEntry[];
}
export interface Nest {
    normal: number;
    rare: number;
    name: number;
}
export interface GameNest {
    nestId: number;
    pokemons: PokemonEntry[];
}
export interface GameNests {
    game: Game;
    nests: GameNest[];
}
export interface DataProvider {
    load_events: () => Promise<string[]>;
    load_event: (name: string) => Promise<GameEvent[]>;
    load_nests_in_game: (game: Game) => Promise<GameNest[]>;
    load_nests: () => Promise<GameNests[]>;
}
export declare const Nests: Nest[];
