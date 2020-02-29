export { PokemonList, PokemonItem } from "./pkmns";
export declare enum Stat {
    HP = 0,
    ATK = 1,
    DEF = 2,
    SPATK = 3,
    SPDEF = 4,
    SPD = 5
}
export declare class CalcIVS {
    private species;
    private level;
    private nature;
    private stats;
    private evs;
    private error?;
    private ivs;
    constructor(species: number, level: number, nature: number, stats: [number, number, number, number, number, number], evs?: [number, number, number, number, number, number]);
    private calc_stat;
    private get_closest_iv;
    private validate_iv;
    calc(): number[];
}
